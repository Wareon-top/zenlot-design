import { readFile, access } from "node:fs/promises";
import process from "node:process";

const requiredFiles = [
  "index.html",
  "PRODUCT.md",
  "ROADMAP.md",
  "ARCHITECTURE.md",
  "docs/DECISIONS.md",
  "docs/ENVIRONMENTS.md",
  "docs/DEFINITION_OF_DONE.md"
];

const requiredSections = ["comparison", "features", "plugins", "tariffs", "faq", "cta"];
const environments = ["development", "staging", "production"];
const errors = [];

for (const file of requiredFiles) {
  try {
    await access(file);
  } catch {
    errors.push(`Missing required file: ${file}`);
  }
}

const html = await readFile("index.html", "utf8");

if (!/^<!doctype html>/i.test(html.trimStart())) errors.push("index.html must start with a doctype");
if (!/<html\s+lang="ru"/i.test(html)) errors.push("index.html must declare lang=ru");
if (!/<title>[^<]+<\/title>/i.test(html)) errors.push("index.html must contain a title");

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) errors.push(`Duplicate HTML ids: ${duplicateIds.join(", ")}`);

const idSet = new Set(ids);
for (const section of requiredSections) {
  if (!idSet.has(section)) errors.push(`Missing required section id: ${section}`);
}

const localAnchors = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
const missingAnchors = [...new Set(localAnchors.filter((anchor) => !idSet.has(anchor)))];
if (missingAnchors.length) errors.push(`Broken local anchors: ${missingAnchors.join(", ")}`);

for (const environment of environments) {
  const path = `config/environments/${environment}.json`;
  let config;
  try {
    config = JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    errors.push(`Invalid environment file ${path}: ${error.message}`);
    continue;
  }

  if (config.name !== environment) errors.push(`${path}: name must be ${environment}`);
  if (typeof config.branch !== "string" || !config.branch) errors.push(`${path}: branch is required`);
  if (typeof config.debug !== "boolean") errors.push(`${path}: debug must be boolean`);
  if (typeof config.telemetry !== "boolean") errors.push(`${path}: telemetry must be boolean`);
  if (typeof config.allowTestData !== "boolean") errors.push(`${path}: allowTestData must be boolean`);
}

if (errors.length) {
  console.error("ZenLot validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`ZenLot validation passed: ${requiredFiles.length} required files, ${ids.length} unique ids, ${environments.length} environments.`);

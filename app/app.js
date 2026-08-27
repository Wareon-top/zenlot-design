const state = {
  orders: [
    { id: '#DEMO-001', buyer: 'demo_buyer_01', product: 'Демо-товар · категория A', total: '1 490 ₽', status: 'Новый', tone: 'yellow', time: '2 мин' },
    { id: '#DEMO-002', buyer: 'demo_buyer_02', product: 'Демо-товар · категория B', total: '719 ₽', status: 'В работе', tone: 'violet', time: '11 мин' },
    { id: '#DEMO-003', buyer: 'demo_buyer_03', product: 'Демо-товар · категория C', total: '1 020 ₽', status: 'Выдан', tone: 'green', time: '28 мин' },
    { id: '#DEMO-004', buyer: 'demo_buyer_04', product: 'Демо-товар · категория D', total: '2 399 ₽', status: 'Спор', tone: 'red', time: '42 мин' },
    { id: '#DEMO-005', buyer: 'demo_buyer_05', product: 'Демо-товар · категория E', total: '1 850 ₽', status: 'Завершён', tone: 'muted', time: '1 ч' },
    { id: '#DEMO-006', buyer: 'demo_buyer_06', product: 'Демо-товар · категория F', total: '1 199 ₽', status: 'Завершён', tone: 'muted', time: '2 ч' },
  ],
  conversations: [
    { initials: 'D1', name: 'demo_buyer_01', preview: 'Демонстрационное новое сообщение', time: '12:46', unread: 2, active: true },
    { initials: 'D2', name: 'demo_buyer_02', preview: 'Демонстрационный заказ завершён', time: '12:31', unread: 0 },
    { initials: 'D3', name: 'demo_buyer_03', preview: 'Демонстрационный вопрос о заказе', time: '11:58', unread: 0 },
    { initials: 'D4', name: 'demo_buyer_04', preview: 'Демонстрационное обращение', time: '11:40', unread: 1 },
    { initials: 'D5', name: 'demo_buyer_05', preview: 'Демонстрационная обратная связь', time: '10:12', unread: 0 },
  ],
  lots: [
    { tag: 'ROBLOX', title: '1000 Robux · Xbox / Microsoft', price: '1 490 ₽', stock: 84, sales: 31, position: 3, active: true },
    { tag: 'DISCORD', title: 'Discord Nitro · 1 месяц', price: '719 ₽', stock: 210, sales: 47, position: 1, active: true },
    { tag: 'STEAM', title: 'Steam Wallet · 10 USD', price: '1 020 ₽', stock: 33, sales: 19, position: 7, active: true },
    { tag: 'FORTNITE', title: '2800 V-Bucks · Все регионы', price: '2 399 ₽', stock: 0, sales: 12, position: 16, active: false },
    { tag: 'TELEGRAM', title: 'Telegram Premium · 3 месяца', price: '1 199 ₽', stock: 51, sales: 28, position: 4, active: true },
    { tag: 'MINECRAFT', title: 'Java & Bedrock Edition · Key', price: '1 850 ₽', stock: 14, sales: 8, position: 11, active: true },
  ],
  automations: [
    { icon: 'message-square', name: 'Приветствие нового покупателя', description: 'Отвечает в течение 4 секунд после первого сообщения', runs: '128 запусков', active: true },
    { icon: 'package', name: 'Автовыдача цифрового товара', description: 'Выдаёт ключ после подтверждения оплаты', runs: '94 запуска', active: true },
    { icon: 'refresh-cw', name: 'Поднятие активных лотов', description: 'Каждые 60 минут с безопасной случайной задержкой', runs: '36 запусков', active: true },
    { icon: 'alert-triangle', name: 'Эскалация спорного заказа', description: 'Уведомляет владельца и ставит автоматизацию на паузу', runs: '3 запуска', active: false },
  ],
  plugins: [
    { id: 'zenlot.auto-reply', icon: 'zap', name: 'Автоответчик', vendor: 'ZenLot Core', description: 'Безопасно ставит ответ покупателю в очередь и защищён от циклических сообщений.', permissions: ['Сообщения', 'Очередь ответов'], installed: false, active: false, config: { text: 'Здравствуйте! Сообщение получено — скоро вернёмся с ответом.', scenario: 'all', keywords: [], excludeKeywords: [], quietHours: { enabled: false, start: '22:00', end: '08:00', timeZone: 'Asia/Almaty', behavior: 'pause', text: 'Сейчас мы офлайн. Ответим утром.' } } },
    { id: 'zenlot.telegram-notifications', icon: 'send', name: 'Telegram-уведомления', vendor: 'ZenLot Core', description: 'Сообщает владельцу о новых сообщениях и оплаченных заказах.', permissions: ['Сообщения', 'Заказы', 'Telegram'], installed: false, active: false, config: { messages: true, paidOrders: true } },
    { id: 'planned.fraud-watch', icon: 'shield', name: 'Fraud Watch', vendor: 'Планируется', description: 'Отмечает подозрительные заказы до автоматической выдачи.', permissions: ['Заказы'], planned: true },
    { id: 'planned.price-pilot', icon: 'trending-up', name: 'Price Pilot', vendor: 'Планируется', description: 'Помогает сравнивать цену и позицию активного лота.', permissions: ['Лоты', 'Аналитика'], planned: true },
    { id: 'planned.quiet-hours', icon: 'clock', name: 'Quiet Hours', vendor: 'Планируется', description: 'Меняет сценарии ответов в заданное владельцем время.', permissions: ['Расписание'], planned: true },
    { id: 'planned.order-notes', icon: 'file-text', name: 'Order Notes', vendor: 'Планируется', description: 'Добавляет внутренние заметки к покупателям и заказам.', permissions: ['Заказы'], planned: true },
  ],
  pluginAudit: [],
  storeFleet: {
    selectedStoreId: 'demo-store-main',
    capacity: { used: 3, limit: 10 },
    liveActionsEnabled: false,
    stores: [
      { id: 'demo-store-main', displayName: 'Digital Hub', status: 'connected_read_only', proxyConfigured: true, workerId: 'worker-fi-01', lastSeenAt: new Date().toISOString(), demo: true, metrics: { balance: '1 842 ₽', lots: 84, unread: 2 } },
      { id: 'demo-store-games', displayName: 'Game Market', status: 'connected_read_only', proxyConfigured: true, workerId: 'worker-de-02', lastSeenAt: new Date().toISOString(), demo: true, metrics: { balance: '3 116 ₽', lots: 126, unread: 1 } },
      { id: 'demo-store-new', displayName: 'Новый магазин', status: 'awaiting_credentials', proxyConfigured: false, workerId: 'worker-pending-03', lastSeenAt: null, demo: true, metrics: { balance: '—', lots: '—', unread: '—' } },
    ]
  },
  finance: { stores: [], withdrawalIntents: [], liveWithdrawalEnabled: false },
  analytics: [
    { day: 'Пн', revenue: 42, orders: 26 }, { day: 'Вт', revenue: 58, orders: 36 },
    { day: 'Ср', revenue: 47, orders: 31 }, { day: 'Чт', revenue: 76, orders: 49 },
    { day: 'Пт', revenue: 65, orders: 43 }, { day: 'Сб', revenue: 92, orders: 61 },
    { day: 'Вс', revenue: 82, orders: 53 },
  ],
  products: [
    { name: 'Discord Nitro · 1 месяц', revenue: '33 793 ₽', share: 88 },
    { name: '1000 Robux · Xbox', revenue: '46 190 ₽', share: 74 },
    { name: 'Telegram Premium · 3 месяца', revenue: '33 572 ₽', share: 58 },
    { name: 'Steam Wallet · 10 USD', revenue: '19 380 ₽', share: 41 },
  ],
  events: [
    { time: '12:48:14', type: 'automation', title: 'Автоответ отправлен', detail: 'Демо-заказ #DEMO-001', tone: 'violet' },
    { time: '12:46:02', type: 'order', title: 'Получен новый заказ', detail: 'Демо-товар · 1 490 ₽', tone: 'yellow' },
    { time: '12:39:47', type: 'lot', title: 'Лот поднят', detail: 'Демо-лот · позиция №1', tone: 'green' },
    { time: '12:31:21', type: 'message', title: 'Получено сообщение', detail: 'Демонстрационный диалог', tone: 'blue' },
    { time: '12:20:09', type: 'system', title: 'Синхронизация завершена', detail: 'Данные магазина обновлены за 1.2 сек.', tone: 'muted' },
    { time: '11:40:33', type: 'warning', title: 'Автовыдача остановлена', detail: 'Демо-заказ #DEMO-004 требует внимания', tone: 'red' },
  ],
};

const viewTitles = {
  dashboard: 'Обзор', orders: 'Заказы', messages: 'Сообщения', lots: 'Лоты',
  automations: 'Автоматизации', plugins: 'Плагины', telegram: 'Telegram',
  analytics: 'Аналитика', events: 'Журнал', billing: 'Финансы', security: 'Безопасность',
  guide: 'База знаний',
};

const iconNames = {
  'alert-triangle': 'help', 'arrow-up': 'external', automation: 'bolt',
  'chevron-right': 'chevron', 'file-text': 'list', lot: 'box', message: 'chat',
  'message-square': 'chat', 'more-horizontal': 'more', order: 'bag', package: 'box',
  'refresh-cw': 'bolt', sparkles: 'bolt', system: 'grid', 'trending-up': 'chart',
  users: 'user', warning: 'help', zap: 'bolt',
};
const icon = (name) => `<svg aria-hidden="true"><use href="#i-${iconNames[name] || name}"></use></svg>`;
const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const API_BASE_URL = (window.ZENLOT_API_BASE_URL || document.querySelector('meta[name="zenlot-api-base-url"]')?.content || '').replace(/\/$/, '');
const authState = { mode: 'login', token: sessionStorage.getItem('zenlot_session') || '', user: null };

async function apiRequest(path, { method = 'GET', body, authenticated = false } = {}) {
  if (!API_BASE_URL) throw new Error('API_URL_MISSING');
  const headers = { accept: 'application/json' };
  if (body) headers['content-type'] = 'application/json';
  if (authenticated && authState.token) headers.authorization = `Bearer ${authState.token}`;
  const response = await fetch(`${API_BASE_URL}${path}`, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.error?.message || 'Запрос отклонён');
    error.code = payload.error?.code || `HTTP_${response.status}`;
    throw error;
  }
  return payload.data;
}

function accountInitials(email = '') {
  return email.split('@')[0].slice(0, 2).toUpperCase() || 'ZL';
}

function renderAuthState() {
  const email = authState.user?.email || '';
  document.querySelectorAll('[data-auth-name]').forEach((node) => { node.textContent = email || 'Войти'; });
  document.querySelectorAll('[data-auth-avatar]').forEach((node) => { node.textContent = accountInitials(email); });
  const sidebar = document.querySelector('.user-card');
  if (sidebar) {
    sidebar.querySelector('strong').textContent = email || 'Гостевой режим';
    sidebar.querySelector('small').textContent = email ? 'Защищённая сессия' : 'Войти в ZenLot';
    sidebar.querySelector('.user-card__avatar').textContent = accountInitials(email);
  }
  const form = document.querySelector('[data-auth-form]');
  const session = document.querySelector('[data-auth-session]');
  if (form) form.hidden = Boolean(email);
  if (session) {
    session.hidden = !email;
    session.querySelector('[data-auth-session-email]').textContent = email;
    session.querySelector('[data-auth-session-avatar]').textContent = accountInitials(email);
  }
}

function setAuthMode(mode) {
  authState.mode = mode === 'register' ? 'register' : 'login';
  document.querySelectorAll('[data-auth-mode]').forEach((button) => button.classList.toggle('is-active', button.dataset.authMode === authState.mode));
  const title = byId('auth-modal-title');
  const submit = document.querySelector('[data-auth-submit]');
  const password = document.querySelector('[data-auth-form] input[name="password"]');
  const intro = document.querySelector('.auth-intro');
  if (title) title.textContent = authState.mode === 'register' ? 'Создать аккаунт' : 'Вход в кабинет';
  if (submit) submit.textContent = authState.mode === 'register' ? 'Зарегистрироваться' : 'Войти';
  if (intro) intro.textContent = authState.mode === 'register'
    ? 'Создайте единый аккаунт для управления магазинами ZenLot.'
    : 'Войдите, чтобы продолжить работу с магазинами ZenLot.';
  if (password) password.autocomplete = authState.mode === 'register' ? 'new-password' : 'current-password';
  const message = document.querySelector('[data-auth-message]');
  if (message) { message.textContent = ''; message.className = 'auth-message'; }
}

function setAuthModal(open) {
  const modal = document.querySelector('.auth-modal');
  const backdrop = document.querySelector('.auth-backdrop');
  if (!modal) return;
  if (open) {
    modal.hidden = false;
    renderAuthState();
  }
  requestAnimationFrame(() => {
    modal.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
  });
  document.body.classList.toggle('modal-open', open);
  if (!open) window.setTimeout(() => { if (!modal.classList.contains('is-open')) modal.hidden = true; }, 220);
}

async function submitAuth(form) {
  const message = form.querySelector('[data-auth-message]');
  const submit = form.querySelector('[data-auth-submit]');
  const body = Object.fromEntries(new FormData(form));
  message.className = 'auth-message';
  message.textContent = 'Проверяем данные…';
  submit.disabled = true;
  try {
    if (authState.mode === 'register') {
      await apiRequest('/api/v1/auth/register', { method: 'POST', body });
      message.classList.add('is-success');
      message.textContent = 'Аккаунт создан. Подтвердите email, затем выполните вход.';
      form.reset();
      return;
    }
    const session = await apiRequest('/api/v1/auth/login', { method: 'POST', body });
    authState.token = session.token;
    authState.user = session.user;
    sessionStorage.setItem('zenlot_session', session.token);
    renderAuthState();
    await loadPluginCatalog().catch(() => {});
    await loadStoreFleet().catch(() => {});
    await loadFinance().catch(() => {});
    showToast('Вход выполнен через защищённый API', 'success');
  } catch (error) {
    message.classList.add('is-error');
    message.textContent = error.message === 'Failed to fetch' || error.message === 'API_URL_MISSING'
      ? 'API пока недоступен. Запустите локальный backend или укажите адрес сервера.'
      : error.message;
  } finally {
    submit.disabled = false;
  }
}

async function restoreSession() {
  document.querySelector('[data-api-state]').textContent = API_BASE_URL || 'не настроен';
  if (!authState.token) { renderAuthState(); return; }
  try {
    const context = await apiRequest('/api/v1/me', { authenticated: true });
    authState.user = context.user;
  } catch {
    authState.token = '';
    sessionStorage.removeItem('zenlot_session');
  }
  renderAuthState();
  if (authState.user) {
    await loadPluginCatalog().catch(() => {});
    await loadPluginAudit().catch(() => {});
    await loadStoreFleet().catch(() => {});
    await loadFinance().catch(() => {});
  } else {
    renderPluginAudit();
  }
}

function formatMinor(amountMinor, currency = 'RUB') {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency, maximumFractionDigits: 2 }).format(Number(amountMinor || 0) / 100);
}

const storeStatus = (store) => store.status === 'connected_read_only'
  ? { label: 'Read-only активен', tone: 'online' }
  : store.status === 'attention'
    ? { label: 'Требует внимания', tone: 'attention' }
    : store.status === 'paused'
      ? { label: 'На паузе', tone: 'paused' }
      : { label: 'Ожидает подключения', tone: 'waiting' };

function renderStoreFleet() {
  const fleet = state.storeFleet;
  const selected = fleet.stores.find((store) => store.id === fleet.selectedStoreId) || fleet.stores[0];
  if (selected && !fleet.selectedStoreId) fleet.selectedStoreId = selected.id;
  document.querySelectorAll('[data-selected-store-name]').forEach((node) => { node.textContent = selected?.displayName || 'Нет магазинов'; });
  const activeName = document.querySelector('[data-active-store-name]');
  const activeStatus = document.querySelector('[data-active-store-status]');
  if (activeName) activeName.textContent = selected?.displayName || 'Подключите магазин';
  if (activeStatus) activeStatus.textContent = selected ? `FunPay · ${storeStatus(selected).label.toLowerCase()}` : 'FunPay · нет подключения';
  const activeMetrics = selected?.metrics || {};
  const balance = document.querySelector('[data-active-store-balance]');
  const lots = document.querySelector('[data-active-store-lots]');
  const unread = document.querySelector('[data-active-store-unread]');
  if (balance) balance.textContent = activeMetrics.balance ?? '—';
  if (lots) lots.textContent = activeMetrics.lots ?? '—';
  if (unread) unread.textContent = activeMetrics.unread ?? '—';
  const capacityText = `${fleet.capacity?.used ?? fleet.stores.length} из ${fleet.capacity?.limit ?? 10}`;
  document.querySelectorAll('[data-fleet-capacity]').forEach((node) => { node.textContent = capacityText; });
  document.querySelectorAll('[data-store-capacity]').forEach((node) => { node.textContent = capacityText.replace('из', '/'); });

  const switcherList = document.querySelector('[data-store-switcher-list]');
  if (switcherList) switcherList.innerHTML = fleet.stores.map((store) => {
    const status = storeStatus(store);
    return `<button type="button" data-select-store="${escapeHtml(store.id)}" class="${store.id === selected?.id ? 'is-active' : ''}"><span class="store-mini-logo">FP</span><span><strong>${escapeHtml(store.displayName)}</strong><small>${escapeHtml(status.label)}</small></span><i class="store-health store-health--${status.tone}"></i></button>`;
  }).join('') || '<p>Подключённых магазинов пока нет.</p>';

  const grid = document.querySelector('[data-fleet-grid]');
  if (grid) grid.innerHTML = fleet.stores.map((store) => {
    const status = storeStatus(store);
    const metrics = store.metrics || {};
    return `<button type="button" class="fleet-card ${store.id === selected?.id ? 'is-active' : ''}" data-select-store="${escapeHtml(store.id)}">
      <span class="fleet-card__top"><span class="store-logo">FP</span><span><strong>${escapeHtml(store.displayName)}</strong><small>${store.demo ? 'Демонстрация · ' : ''}${escapeHtml(store.workerId)}</small></span><i class="store-health store-health--${status.tone}"></i></span>
      <span class="fleet-card__metrics"><span><small>Баланс</small><strong>${escapeHtml(metrics.balance ?? '—')}</strong></span><span><small>Лоты</small><strong>${escapeHtml(metrics.lots ?? '—')}</strong></span><span><small>Новые</small><strong>${escapeHtml(metrics.unread ?? '—')}</strong></span></span>
      <span class="fleet-card__footer"><span>${escapeHtml(status.label)}</span><b>${store.proxyConfigured ? 'Proxy закреплён' : 'Proxy не настроен'}</b></span>
    </button>`;
  }).join('') || '<div class="finance-empty">Подключите первый магазин, чтобы создать отдельный proxy worker.</div>';
}

async function loadStoreFleet() {
  if (!authState.token || !API_BASE_URL) { renderStoreFleet(); return; }
  state.storeFleet = await apiRequest('/api/v1/stores', { authenticated: true });
  renderStoreFleet();
}

async function selectStore(storeId) {
  const exists = state.storeFleet.stores.some((store) => store.id === storeId);
  if (!exists) return;
  if (authState.token && API_BASE_URL) {
    state.storeFleet = await apiRequest(`/api/v1/stores/${encodeURIComponent(storeId)}/select`, { method: 'POST', authenticated: true, body: {} });
  } else {
    state.storeFleet.selectedStoreId = storeId;
  }
  renderStoreFleet();
  const panel = document.querySelector('[data-store-switcher-panel]');
  const trigger = document.querySelector('[data-store-switcher]');
  if (panel) panel.hidden = true;
  trigger?.setAttribute('aria-expanded', 'false');
  showToast(`Активный контекст: ${state.storeFleet.stores.find((store) => store.id === storeId)?.displayName}`, 'success');
}

function renderFinance() {
  const storesTarget = byId('finance-store-list');
  const intentsTarget = byId('withdrawal-intent-list');
  const form = document.querySelector('[data-withdrawal-intent-form]');
  if (!storesTarget || !intentsTarget) return;
  if (!authState.user) {
    storesTarget.innerHTML = '<div class="finance-empty">Войдите, чтобы увидеть балансы подключённых магазинов.</div>';
    intentsTarget.textContent = 'Журнал намерений появится после входа.';
    if (form) form.hidden = true;
    return;
  }
  if (!state.finance.stores.length) {
    storesTarget.innerHTML = '<div class="finance-empty">Нет финансового снимка. Подключите магазин в read-only режиме и обновите данные.</div>';
    intentsTarget.textContent = 'Симулированных намерений пока нет.';
    if (form) form.hidden = true;
    return;
  }
  storesTarget.innerHTML = state.finance.stores.map((store) => `
    <article class="finance-store-card">
      <div><span class="store-logo">FP</span><span><strong>${escapeHtml(store.displayName)}</strong><small>${escapeHtml(store.storeId)} · закреплённый proxy worker</small></span></div>
      <span><small>Доступно</small><strong>${formatMinor(store.availableMinor, store.currency)}</strong></span>
      <span><small>Ожидает</small><strong>${formatMinor(store.pendingMinor, store.currency)}</strong></span>
      <span class="health-pill health-pill--waiting"><i></i> Только подтверждение</span>
    </article>`).join('');
  if (form) {
    form.hidden = false;
    form.elements.storeId.innerHTML = state.finance.stores.map((store) => `<option value="${escapeHtml(store.storeId)}">${escapeHtml(store.displayName)}</option>`).join('');
  }
  intentsTarget.innerHTML = state.finance.withdrawalIntents.length
    ? state.finance.withdrawalIntents.map((intent) => `<article><time>${new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(intent.createdAt))}</time><strong>${formatMinor(intent.amountMinor, intent.currency)}</strong><span>simulated · деньги не отправлены</span></article>`).join('')
    : 'Симулированных намерений пока нет.';
}

async function loadFinance() {
  if (!authState.token || !API_BASE_URL) { renderFinance(); return; }
  state.finance = await apiRequest('/api/v1/finance', { authenticated: true });
  renderFinance();
}

async function refreshFinance() {
  if (!authState.token) { setAuthModal(true); showToast('Войдите, чтобы обновить финансовый снимок'); return; }
  try {
    await apiRequest('/api/v1/finance/refresh', { method: 'POST', authenticated: true, body: {} });
    await loadFinance();
    showToast('Read-only баланс обновлён через закреплённый proxy worker', 'success');
  } catch (error) {
    showToast(error.code === 'INVALID_STATE' ? 'Сначала завершите read-only подключение магазина' : error.message);
  }
}

async function createWithdrawalIntent(form) {
  const values = new FormData(form);
  const amountMinor = Math.round(Number(values.get('amount')) * 100);
  if (!Number.isSafeInteger(amountMinor) || amountMinor <= 0) { showToast('Введите корректную сумму'); return; }
  try {
    const intent = await apiRequest('/api/v1/finance/withdrawal-intents', {
      method: 'POST', authenticated: true, body: { storeId: values.get('storeId'), amountMinor }
    });
    await loadFinance();
    showToast(`Создано намерение ${formatMinor(intent.amountMinor, intent.currency)}. Деньги не отправлены.`, 'success');
    form.elements.amount.value = '';
  } catch (error) {
    showToast(error.message);
  }
}

function resetPluginCatalog() {
  state.plugins = state.plugins.map((plugin) => plugin.planned ? plugin : { ...plugin, installed: false, active: false });
  renderPlugins();
}

async function loadPluginCatalog() {
  if (!authState.token || !API_BASE_URL) return;
  const catalog = await apiRequest('/api/v1/plugins', { authenticated: true });
  const byPluginId = new Map(catalog.map((plugin) => [plugin.id, plugin]));
  state.plugins = state.plugins.map((plugin) => {
    const backend = byPluginId.get(plugin.id);
    if (!backend) return plugin;
    return {
      ...plugin,
      permissionsRaw: backend.permissions,
      installed: Boolean(backend.installation),
      active: Boolean(backend.installation?.enabled),
      config: backend.installation?.config || plugin.config
    };
  });
  renderPlugins();
  const autoReplyForm = document.querySelector('[data-plugin-settings]');
  const autoReply = state.plugins.find((plugin) => plugin.id === 'zenlot.auto-reply');
  if (autoReplyForm && autoReply) {
    const config = autoReply.config || {};
    autoReplyForm.elements.replyText.value = config.text || '';
    autoReplyForm.elements.scenario.value = config.scenario || 'all';
    autoReplyForm.elements.keywords.value = (config.keywords || []).join(', ');
    autoReplyForm.elements.excludeKeywords.value = (config.excludeKeywords || []).join(', ');
    autoReplyForm.elements.quietEnabled.checked = config.quietHours?.enabled === true;
    autoReplyForm.elements.quietStart.value = config.quietHours?.start || '22:00';
    autoReplyForm.elements.quietEnd.value = config.quietHours?.end || '08:00';
    autoReplyForm.elements.timeZone.value = config.quietHours?.timeZone || 'Asia/Almaty';
    autoReplyForm.elements.quietBehavior.value = config.quietHours?.behavior || 'pause';
    autoReplyForm.elements.quietText.value = config.quietHours?.text || '';
  }
  const telegram = state.plugins.find((plugin) => plugin.id === 'zenlot.telegram-notifications');
  const telegramForm = document.querySelector('[data-telegram-settings]');
  if (telegramForm) {
    telegramForm.elements.messages.checked = telegram?.config?.messages !== false;
    telegramForm.elements.paidOrders.checked = telegram?.config?.paidOrders !== false;
  }
}

function renderPluginAudit() {
  const target = byId('plugin-audit-list');
  if (!target) return;
  if (!authState.user) { target.textContent = 'Войдите, чтобы увидеть журнал текущего магазина.'; return; }
  if (!state.pluginAudit.length) { target.textContent = 'Пока нет действий плагинов. Установите модуль или запустите симуляцию.'; return; }
  const labels = {
    'plugin.installed': 'Плагин установлен', 'plugin.enabled': 'Плагин включён', 'plugin.disabled': 'Плагин остановлен',
    'plugin.configured': 'Настройки сохранены', 'plugin.dispatch.completed': 'Событие обработано', 'plugin.dispatch.failed': 'Обработка остановлена'
  };
  target.innerHTML = state.pluginAudit.map((entry) => {
    const time = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(entry.at || entry.createdAt));
    const plugin = state.plugins.find((item) => item.id === entry.pluginId)?.name || entry.pluginId || 'ZenLot';
    const detail = entry.actionCount != null ? `${entry.actionCount} предлож. действий · simulated` : plugin;
    return `<article class="plugin-audit__entry"><time>${time}</time><strong>${labels[entry.event] || 'Событие плагина'}</strong><span>${detail}</span></article>`;
  }).join('');
}

async function loadPluginAudit() {
  if (!authState.token || !API_BASE_URL) { renderPluginAudit(); return; }
  state.pluginAudit = await apiRequest('/api/v1/plugins/audit?limit=30', { authenticated: true });
  renderPluginAudit();
}

function renderOrders() {
  const target = byId('orders-table-body');
  if (!target) return;
  target.innerHTML = state.orders.map((order) => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td><strong>${order.product}</strong></td>
      <td>${order.buyer}</td>
      <td><strong>${order.total}</strong></td>
      <td><span class="source-pill ${order.status === 'Новый' ? 'source-pill--web' : 'source-pill--auto'}"><i></i>${order.status === 'Новый' ? 'Web' : 'Автопилот'}</span></td>
      <td><span class="table-status ${order.tone === 'green' || order.tone === 'muted' ? 'table-status--success' : order.tone === 'yellow' || order.tone === 'violet' ? 'table-status--processing' : ''}">${order.status}</span></td>
      <td>${order.time} назад</td>
      <td><button class="row-action" data-toast="Карточка ${order.id} открыта в демо-режиме" aria-label="Открыть ${order.id}">${icon('chevron-right')}</button></td>
    </tr>`).join('');
}

function renderConversations() {
  const target = byId('conversation-items');
  if (!target) return;
  target.innerHTML = state.conversations.map((chat) => `
    <button class="conversation-item${chat.active ? ' is-active' : ''}" type="button" data-chat="${chat.name}">
      <span class="chat-avatar">${chat.initials}</span>
      <span><strong>${chat.name}</strong><p>${chat.preview}</p></span>
      <time>${chat.time}</time>${chat.unread ? `<b>${chat.unread}</b>` : ''}
    </button>`).join('');
}

function renderLots() {
  const target = byId('lot-grid');
  if (!target) return;
  target.innerHTML = state.lots.map((lot, index) => `
    <article class="lot-card" style="opacity:${lot.active ? '1' : '.58'}">
      <div class="lot-card__top"><span>${lot.tag}</span><button class="icon-button" data-toast="Меню лота открыто" aria-label="Меню лота">${icon('more-horizontal')}</button></div>
      <h3>${lot.title}</h3>
      <p>${lot.price} · цифровой товар</p>
      <div class="lot-card__stats">
        <span>Остаток<strong class="${lot.stock === 0 ? 'text-red' : ''}">${lot.stock}</strong></span>
        <span>Продажи<strong>${lot.sales}</strong></span>
        <span>Позиция<strong>№${lot.position}</strong></span>
      </div>
      <div class="lot-card__bottom">
        <span><i class="node"></i>${lot.active ? 'Активен' : 'На паузе'}</span>
        <button data-toast="Лот «${lot.tag}» поднят в демо-режиме">${icon('arrow-up')} Поднять</button>
      </div>
    </article>`).join('');
}

function renderAutomations() {
  const target = byId('automation-cards');
  if (!target) return;
  const colors = ['255,210,28', '143,114,255', '112,223,160', '255,108,120'];
  target.innerHTML = state.automations.map((automation, index) => `
    <article class="automation-card" style="--module-rgb:${colors[index % colors.length]}">
      <span class="automation-card__icon">${icon(automation.icon)}</span>
      <div><h3>${automation.name}</h3><p>${automation.description}</p></div>
      <div class="automation-card__meta"><span>${automation.runs} за 7 дней</span><button class="toggle${automation.active ? ' is-on' : ''}" type="button" role="switch" aria-checked="${automation.active}" data-toggle="automation-${index}" aria-label="Состояние автоматизации"></button></div>
    </article>`).join('');
}

function renderPlugins() {
  const target = byId('plugin-grid');
  if (!target) return;
  const colors = ['255,210,28', '143,114,255', '109,157,255', '112,223,160', '255,138,78', '203,128,255'];
  const installed = state.plugins.filter((plugin) => plugin.installed).length;
  const total = state.plugins.filter((plugin) => !plugin.planned).length;
  if (byId('plugin-total')) byId('plugin-total').textContent = `${total} доступно`;
  if (byId('plugin-installed')) byId('plugin-installed').textContent = `${installed} установлено`;
  target.innerHTML = state.plugins.map((plugin, index) => `
    <article class="plugin-card${plugin.planned ? ' is-planned' : ''}" style="--plugin-rgb:${colors[index % colors.length]}">
      <div class="plugin-card__top"><span class="plugin-card__mark">${icon(plugin.icon)}</span><small>${plugin.vendor}</small></div>
      <h3>${plugin.name}</h3><p>${plugin.description}</p>
      <div class="plugin-permissions">${plugin.permissions.map((permission) => `<span>${permission}</span>`).join('')}</div>
      <div class="plugin-card__bottom"><span>${plugin.planned ? 'Следующий этап' : plugin.active ? 'Работает' : plugin.installed ? 'На паузе' : 'Не установлен'}</span><button data-plugin-id="${plugin.id}" ${plugin.planned ? 'disabled' : ''}>${plugin.planned ? 'Скоро' : plugin.active ? 'Отключить' : plugin.installed ? 'Включить' : 'Установить'}</button></div>
    </article>`).join('');
}

async function changePluginState(pluginId) {
  const plugin = state.plugins.find((item) => item.id === pluginId);
  if (!plugin || plugin.planned) return;
  if (!authState.token) {
    setAuthModal(true);
    showToast('Войдите, чтобы управлять плагинами');
    return;
  }
  try {
    if (!plugin.installed) {
      await apiRequest(`/api/v1/plugins/${encodeURIComponent(plugin.id)}/install`, {
        method: 'POST', authenticated: true, body: { permissions: plugin.permissionsRaw || (plugin.id === 'zenlot.auto-reply' ? ['messages:read', 'replies:queue'] : ['messages:read', 'orders:read', 'telegram:send']), config: {} }
      });
      await apiRequest(`/api/v1/plugins/${encodeURIComponent(plugin.id)}/enable`, { method: 'POST', authenticated: true });
      showToast(`${plugin.name} установлен и включён`, 'success');
    } else if (plugin.active) {
      await apiRequest(`/api/v1/plugins/${encodeURIComponent(plugin.id)}/disable`, { method: 'POST', authenticated: true });
      showToast(`${plugin.name} остановлен`);
    } else {
      await apiRequest(`/api/v1/plugins/${encodeURIComponent(plugin.id)}/enable`, { method: 'POST', authenticated: true });
      showToast(`${plugin.name} включён`, 'success');
    }
    await loadPluginCatalog();
    await loadPluginAudit().catch(() => {});
  } catch (error) {
    showToast(error.code === 'PLAN_REQUIRED' ? 'Для установки нужен активный тариф' : error.message);
  }
}

async function savePluginSettings(form) {
  const autoReply = state.plugins.find((plugin) => plugin.id === 'zenlot.auto-reply');
  const values = new FormData(form);
  const text = values.get('replyText')?.trim();
  if (!text) { showToast('Введите текст автоответа'); return; }
  if (!authState.token) { setAuthModal(true); showToast('Войдите, чтобы сохранить настройки'); return; }
  if (!autoReply?.installed) { showToast('Сначала установите Автоответчик'); return; }
  const terms = (name) => String(values.get(name) || '').split(',').map((term) => term.trim()).filter(Boolean).slice(0, 20);
  const config = {
    text,
    scenario: values.get('scenario') || 'all',
    keywords: terms('keywords'),
    excludeKeywords: terms('excludeKeywords'),
    quietHours: {
      enabled: form.elements.quietEnabled.checked,
      start: values.get('quietStart') || '22:00',
      end: values.get('quietEnd') || '08:00',
      timeZone: values.get('timeZone') || 'Asia/Almaty',
      behavior: values.get('quietBehavior') || 'pause',
      text: values.get('quietText')?.trim() || ''
    }
  };
  if (config.scenario === 'keywords' && !config.keywords.length) { showToast('Добавьте хотя бы одно ключевое слово'); return; }
  if (config.quietHours.enabled && config.quietHours.behavior === 'alternate' && !config.quietHours.text) { showToast('Введите ответ для тихих часов'); return; }
  try {
    await apiRequest('/api/v1/plugins/zenlot.auto-reply/config', { method: 'POST', authenticated: true, body: { config } });
    autoReply.config = config;
    await loadPluginAudit().catch(() => {});
    showToast('Настройки автоответчика сохранены', 'success');
  } catch (error) {
    showToast(error.code === 'PLAN_REQUIRED' ? 'Для настройки нужен активный тариф' : error.message);
  }
}

async function saveTelegramSettings(form) {
  const telegram = state.plugins.find((plugin) => plugin.id === 'zenlot.telegram-notifications');
  if (!authState.token) { setAuthModal(true); showToast('Войдите, чтобы сохранить уведомления'); return; }
  if (!telegram?.installed) { showToast('Сначала установите Telegram-уведомления'); return; }
  const config = { messages: form.elements.messages.checked, paidOrders: form.elements.paidOrders.checked };
  try {
    await apiRequest('/api/v1/plugins/zenlot.telegram-notifications/config', { method: 'POST', authenticated: true, body: { config } });
    telegram.config = config;
    await loadPluginAudit().catch(() => {});
    showToast('Настройки Telegram сохранены', 'success');
  } catch (error) {
    showToast(error.code === 'PLAN_REQUIRED' ? 'Для настройки нужен активный тариф' : error.message);
  }
}

async function simulatePluginEvent(form) {
  const output = document.querySelector('[data-plugin-simulation-output]');
  if (!authState.token) { setAuthModal(true); showToast('Войдите, чтобы запустить симуляцию'); return; }
  const input = new FormData(form);
  const type = input.get('type');
  const value = input.get('value')?.trim();
  if (output) output.textContent = 'Симуляция выполняется…';
  try {
    const data = type === 'message.received'
      ? { text: value, isFirstMessage: form.elements.isFirstMessage.checked, occurredAt: form.elements.occurredAt.value || undefined }
      : { orderId: value };
    const result = await apiRequest('/api/v1/plugins/simulate', { method: 'POST', authenticated: true, body: { type, data } });
    const actions = result.results.flatMap((item) => item.actions || []).map((action) => action.type);
    if (output) output.textContent = actions.length
      ? `Готово: ${actions.join(', ')}. Статус — simulated, в FunPay ничего не отправлено.`
      : 'Действий нет: плагин выключен либо сообщение не прошло выбранные условия или тихие часы.';
    await loadPluginAudit().catch(() => {});
  } catch (error) {
    if (output) output.textContent = error.code === 'PLAN_REQUIRED' ? 'Для симуляции нужен активный тариф.' : error.message;
  }
}

function renderAnalytics() {
  const chart = byId('bar-chart');
  if (chart) {
    chart.innerHTML = state.analytics.map((item) => `
      <div class="bar-group"><i style="height:${item.revenue}%" title="Выручка ${item.revenue}%"></i><i style="height:${item.orders}%" title="Заказы ${item.orders}%"></i><span>${item.day}</span></div>`).join('');
  }
  const list = byId('top-products-list');
  if (list) {
    list.innerHTML = state.products.map((product, index) => `
      <article class="top-product"><span>0${index + 1}</span><div><strong>${product.name}</strong><small>Индекс продаж ${product.share}%</small></div><b>${product.revenue}</b></article>`).join('');
  }
}

function renderEvents() {
  const target = byId('event-log');
  if (!target) return;
  const colors = { violet: '143,114,255', yellow: '255,210,28', green: '112,223,160', blue: '109,157,255', muted: '150,153,165', red: '255,108,120' };
  target.innerHTML = state.events.map((event) => `
    <article class="event-entry" style="--event-rgb:${colors[event.tone]}"><time>${event.time}</time><span class="event-entry__icon">${icon(event.type === 'warning' ? 'alert-triangle' : event.type === 'system' ? 'refresh-cw' : event.type)}</span><div><strong>${event.title}</strong><p>${event.detail}</p></div><span><b>${event.type}</b><small>Demo</small></span></article>`).join('');
}

function setView(viewName, updateHash = true) {
  const resolvedView = viewTitles[viewName] ? viewName : 'dashboard';
  document.querySelectorAll('[data-view]').forEach((view) => {
    const active = view.dataset.view === resolvedView;
    view.hidden = !active;
    view.classList.toggle('is-active', active);
  });
  document.querySelectorAll('[data-view-target]').forEach((item) => {
    const active = item.dataset.viewTarget === resolvedView;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-current', active ? 'page' : 'false');
    if (active) item.closest('.nav-group')?.setAttribute('open', '');
  });
  const label = byId('current-view-label');
  if (label) label.textContent = viewTitles[resolvedView];
  document.title = `${viewTitles[resolvedView]} — ZenLot Control`;
  setSidebar(false);
  if (updateHash) history.replaceState(null, '', `#${resolvedView}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setSidebar(open) {
  document.querySelector('.sidebar')?.classList.toggle('is-open', open);
  document.querySelector('.sidebar-backdrop')?.classList.toggle('is-open', open);
  document.body.classList.toggle('sidebar-open', open);
}

function showToast(message, tone = 'default') {
  const stack = document.querySelector('.toast-region');
  if (!stack) return;
  const toast = document.createElement('div');
  toast.className = `toast toast--${tone}`;
  toast.innerHTML = `<i>${tone === 'success' ? '✓' : 'ZL'}</i><span><strong>${tone === 'success' ? 'Готово' : 'ZenLot Demo'}</strong><span>${message}</span></span>`;
  stack.append(toast);
  window.setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    window.setTimeout(() => toast.remove(), 220);
  }, 3100);
}

let connectionStep = 0;
let connectionDraftId = null;
let connectionStatus = null;
let connectionBusy = false;
const connectionDemoSteps = [
  { icon: 'card', title: 'Отдельный контекст магазина', text: 'Каждый магазин получает собственный worker и закреплённое соединение. В демонстрации реальные секретные поля отключены.', points: ['До 10 магазинов в workspace', 'Отдельный workerId', 'Изоляция данных магазина'], action: 'Посмотреть Golden Key' },
  { icon: 'lock', title: 'Golden Key выбранного магазина', text: 'Ключ передаётся только защищённому API, шифруется в vault и никогда не возвращается в интерфейс.', points: ['Отдельная vault-ссылка', 'Нет ключа в PostgreSQL', 'Поле очищается после отправки'], action: 'Посмотреть прокси' },
  { icon: 'shield', title: 'Закреплённый прокси', text: 'Прокси хранится отдельно от Golden Key и используется только worker этого магазина.', points: ['Один магазин — один прокси', 'Пароль не отображается повторно', 'Нет общего IP между магазинами'], action: 'Посмотреть проверку' },
  { icon: 'check', title: 'Read-only проверка', text: 'Preflight проверяет пару Golden Key + прокси, не выполняя действий в FunPay.', points: ['Доступен безопасный режим чтения', 'Worker закреплён за магазином', 'Автоматические действия заблокированы'], action: 'Закрыть демонстрацию' },
];

const liveConnectionMode = () => Boolean(authState.user && API_BASE_URL);
const selectedConnectionStore = () => state.storeFleet.stores.find((store) => store.id === connectionDraftId)
  || state.storeFleet.stores.find((store) => store.id === state.storeFleet.selectedStoreId);

function renderConnectionWizard() {
  const modal = document.querySelector('.connect-modal');
  if (!modal) return;
  const body = modal.querySelector('.connect-modal__body');
  const action = modal.querySelector('[data-connect-next]');
  const mode = modal.querySelector('[data-connection-mode]');
  modal.querySelectorAll('.connect-progress > span').forEach((item, index) => {
    item.classList.toggle('is-active', index === connectionStep);
    item.classList.toggle('is-complete', index < connectionStep);
  });
  if (!liveConnectionMode()) {
    const step = connectionDemoSteps[connectionStep];
    if (mode) mode.textContent = 'Connection wizard / Demo';
    if (body) body.innerHTML = `<span class="connect-illustration${connectionStep === 3 ? ' connect-illustration--success' : ''}">${icon(step.icon)}<i></i></span><h3>${step.title}</h3><p>${step.text}</p><ul>${step.points.map((point) => `<li>${icon('check')} ${point}</li>`).join('')}</ul>`;
    if (action) action.innerHTML = `${step.action} ${icon('chevron-right')}`;
    return;
  }
  if (mode) mode.textContent = 'Protected per-store connection';
  const store = selectedConnectionStore();
  const worker = store?.workerId ? escapeHtml(store.workerId) : 'будет создан автоматически';
  const pages = [
    `<span class="connect-illustration">${icon('plus')}<i></i></span><h3>${store?.status === 'awaiting_credentials' ? 'Продолжить подключение' : 'Новый магазин'}</h3><p>Подключение создаётся внутри текущего workspace и получает отдельный worker.</p>${store?.status === 'awaiting_credentials' ? `<div class="connection-store-badge"><span class="store-logo">FP</span><span><strong>${escapeHtml(store.displayName)}</strong><small>${worker}</small></span></div>` : '<div class="connection-form"><label>Название магазина<input name="storeName" maxlength="80" placeholder="Например, Магазин Финляндия" autocomplete="off"></label><small>Название обновится после read-only проверки профиля.</small></div>'}`,
    `<span class="connect-illustration">${icon('lock')}<i></i></span><h3>Golden Key</h3><p>Ключ отправляется напрямую в vault для магазина «${escapeHtml(store?.displayName || 'Новый магазин')}» и не возвращается обратно.</p><div class="connection-form"><label>Golden Key<input type="password" name="goldenKey" minlength="12" maxlength="4096" autocomplete="off" spellcheck="false" placeholder="Вставьте ключ один раз"></label><small>Не отправляйте Golden Key в Telegram или поддержку.</small></div>`,
    `<span class="connect-illustration">${icon('shield')}<i></i></span><h3>Закреплённый прокси</h3><p>Этот прокси будет использовать только worker <strong>${worker}</strong>.</p><div class="connection-form"><label>Proxy URL<input type="password" name="proxyUrl" maxlength="2048" autocomplete="off" spellcheck="false" placeholder="socks5://user:password@host:port"></label><small>Поддерживаются http, https и socks5. Адрес и пароль не появятся в ответе API.</small></div>`,
    `<span class="connect-illustration connect-illustration--success">${icon('check')}<i></i></span><h3>Read-only проверка</h3><p>ZenLot проверит авторизацию через закреплённый прокси. Сообщения, лоты, заказы и деньги не изменяются.</p><div class="connection-checks"><span>Golden Key <b>${connectionStatus?.credential?.configured ? 'Добавлен' : 'Ожидается'}</b></span><span>Прокси <b>${connectionStatus?.proxy?.configured ? 'Добавлен' : 'Ожидается'}</b></span><span>Live-действия <b>Отключены</b></span></div>`,
  ];
  if (body) body.innerHTML = pages[connectionStep];
  if (action) {
    const labels = [store?.status === 'awaiting_credentials' ? 'Продолжить' : 'Создать магазин', 'Сохранить Golden Key', 'Закрепить прокси', 'Запустить read-only проверку'];
    action.disabled = connectionBusy;
    action.innerHTML = `${connectionBusy ? 'Проверяем…' : labels[connectionStep]} ${icon('chevron-right')}`;
  }
}

function setModal(open) {
  const modal = document.querySelector('.connect-modal');
  const backdrop = document.querySelector('.modal-backdrop');
  if (!modal) return;
  if (open) {
    modal.hidden = false;
    connectionStep = 0;
    connectionStatus = null;
    const selected = state.storeFleet.stores.find((store) => store.id === state.storeFleet.selectedStoreId);
    connectionDraftId = selected?.status === 'awaiting_credentials' ? selected.id : null;
    renderConnectionWizard();
  }
  requestAnimationFrame(() => {
    modal.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
  });
  document.body.classList.toggle('modal-open', open);
  if (open) {
    window.setTimeout(() => modal.querySelector('button')?.focus(), 30);
  } else {
    window.setTimeout(() => {
      if (!modal.classList.contains('is-open')) modal.hidden = true;
    }, 220);
  }
}

async function advanceConnectionWizard() {
  if (!liveConnectionMode()) {
    if (connectionStep < connectionDemoSteps.length - 1) {
      connectionStep += 1;
      renderConnectionWizard();
      return;
    }
    setModal(false);
    showToast('Демонстрация завершена. Реальные секреты не вводились.', 'success');
    return;
  }
  if (connectionBusy) return;
  const modal = document.querySelector('.connect-modal');
  let submittedValue = null;
  if (connectionStep === 0 && !connectionDraftId) {
    submittedValue = modal.querySelector('input[name="storeName"]')?.value.trim();
    if (!submittedValue) { showToast('Введите название магазина'); return; }
  }
  if (connectionStep === 1) {
    submittedValue = modal.querySelector('input[name="goldenKey"]')?.value;
    if (!submittedValue) { showToast('Введите Golden Key'); return; }
  }
  if (connectionStep === 2) {
    submittedValue = modal.querySelector('input[name="proxyUrl"]')?.value;
    if (!submittedValue) { showToast('Введите Proxy URL'); return; }
  }
  connectionBusy = true;
  renderConnectionWizard();
  try {
    if (connectionStep === 0 && !connectionDraftId) {
      const draft = await apiRequest('/api/v1/stores', { method: 'POST', authenticated: true, body: { displayName: submittedValue } });
      connectionDraftId = draft.id;
      await loadStoreFleet();
    } else if (connectionStep === 1) {
      connectionStatus = await apiRequest(`/api/v1/stores/${encodeURIComponent(connectionDraftId)}/connection/golden-key`, { method: 'POST', authenticated: true, body: { goldenKey: submittedValue } });
      submittedValue = null;
    } else if (connectionStep === 2) {
      connectionStatus = await apiRequest(`/api/v1/stores/${encodeURIComponent(connectionDraftId)}/connection/proxy`, { method: 'POST', authenticated: true, body: { proxyUrl: submittedValue } });
      submittedValue = null;
    } else if (connectionStep === 3) {
      connectionStatus = await apiRequest(`/api/v1/stores/${encodeURIComponent(connectionDraftId)}/connection/preflight`, { method: 'POST', authenticated: true, body: {} });
      await loadStoreFleet();
      setModal(false);
      showToast('Магазин подключён в read-only режиме через отдельный worker', 'success');
      return;
    }
    connectionStep += 1;
    showToast(`Шаг ${connectionStep + 1} из 4`, 'success');
  } catch (error) {
    showToast(error.message);
  } finally {
    connectionBusy = false;
    renderConnectionWizard();
  }
}

function bindInteractions() {
  document.addEventListener('click', (event) => {
    const authMode = event.target.closest('[data-auth-mode]');
    if (authMode) { setAuthMode(authMode.dataset.authMode); return; }
    if (event.target.closest('[data-auth-open]')) { setAuthModal(true); return; }
    if (event.target.closest('[data-auth-close]')) { setAuthModal(false); return; }
    if (event.target.closest('[data-auth-logout]')) {
      apiRequest('/api/v1/auth/logout', { method: 'POST', authenticated: true }).catch(() => {}).finally(() => {
        authState.token = ''; authState.user = null; state.finance = { stores: [], withdrawalIntents: [], liveWithdrawalEnabled: false }; sessionStorage.removeItem('zenlot_session'); resetPluginCatalog(); renderFinance(); renderStoreFleet(); renderAuthState(); setAuthMode('login');
      });
      return;
    }
    const viewButton = event.target.closest('[data-view-target], [data-view-link]');
    if (viewButton) {
      event.preventDefault();
      setView(viewButton.dataset.viewTarget || viewButton.dataset.viewLink);
      return;
    }

    if (event.target.closest('[data-sidebar-open]')) {
      setSidebar(true);
      return;
    }
    if (event.target.closest('[data-sidebar-close]')) {
      setSidebar(false);
      return;
    }
    if (event.target.closest('[data-open-connect]')) {
      const switcherPanel = document.querySelector('[data-store-switcher-panel]');
      if (switcherPanel) switcherPanel.hidden = true;
      setModal(true);
      return;
    }
    const storeSwitcher = event.target.closest('[data-store-switcher]');
    if (storeSwitcher) {
      const panel = document.querySelector('[data-store-switcher-panel]');
      if (panel) panel.hidden = !panel.hidden;
      storeSwitcher.setAttribute('aria-expanded', String(panel ? !panel.hidden : false));
      return;
    }
    const selectedStore = event.target.closest('[data-select-store]');
    if (selectedStore) {
      selectStore(selectedStore.dataset.selectStore).catch((error) => showToast(error.message));
      return;
    }
    if (event.target.closest('[data-close-connect]') || event.target.matches('.modal-backdrop')) {
      setModal(false);
      return;
    }

    const guideTab = event.target.closest('[data-guide-target]');
    if (guideTab) {
      const target = guideTab.dataset.guideTarget;
      document.querySelectorAll('[data-guide-target]').forEach((button) => button.classList.toggle('is-active', button === guideTab));
      document.querySelectorAll('[data-guide-panel]').forEach((panel) => {
        const active = panel.dataset.guidePanel === target;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
      return;
    }

    const toggle = event.target.closest('[data-toggle]');
    if (toggle) {
      const next = toggle.getAttribute('aria-checked') !== 'true';
      toggle.setAttribute('aria-checked', String(next));
      toggle.classList.toggle('is-on', next);
      showToast(next ? 'Функция включена в демо-режиме' : 'Функция приостановлена в демо-режиме', next ? 'success' : 'default');
      return;
    }

    const period = event.target.closest('[data-period]');
    if (period) {
      period.parentElement.querySelectorAll('[data-period]').forEach((button) => button.classList.remove('is-active'));
      period.classList.add('is-active');
      showToast(`Период аналитики: ${period.textContent.trim()}`);
      return;
    }

    if (event.target.closest('[data-finance-refresh]')) {
      refreshFinance();
      return;
    }

    const plugin = event.target.closest('[data-plugin-id]');
    if (plugin) {
      changePluginState(plugin.dataset.pluginId);
      return;
    }

    const quickReply = event.target.closest('[data-quick-reply]');
    if (quickReply) {
      const composer = byId('message-composer');
      if (composer) {
        composer.value = quickReply.dataset.quickReply;
        composer.focus();
      }
      return;
    }

    const conversation = event.target.closest('[data-chat]');
    if (conversation) {
      document.querySelectorAll('[data-chat]').forEach((item) => item.classList.remove('is-active'));
      conversation.classList.add('is-active');
      showToast(`Диалог с ${conversation.dataset.chat} выбран`);
      return;
    }

    const toastTrigger = event.target.closest('[data-toast]');
    if (toastTrigger) showToast(toastTrigger.dataset.toast);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setModal(false);
      setSidebar(false);
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      showToast('Глобальный поиск появится после подключения backend');
    }
  });

  document.querySelector('[data-connect-next]')?.addEventListener('click', () => advanceConnectionWizard());

  byId('send-message')?.addEventListener('click', () => {
    const composer = byId('message-composer');
    if (!composer?.value.trim()) {
      showToast('Введите сообщение перед отправкой');
      return;
    }
    composer.value = '';
    showToast('Сообщение отправлено в демо-режиме', 'success');
  });
}

function updateClock() {
  const time = byId('system-clock');
  if (!time) return;
  time.textContent = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Asia/Almaty', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  }).format(new Date());
}

function init() {
  renderOrders();
  renderConversations();
  renderLots();
  renderAutomations();
  renderPlugins();
  renderPluginAudit();
  renderAnalytics();
  renderEvents();
  const composer = document.querySelector('.composer textarea');
  const sendButton = document.querySelector('.composer .send-button');
  if (composer) composer.id = 'message-composer';
  if (sendButton) {
    sendButton.id = 'send-message';
    sendButton.removeAttribute('data-toast');
  }
  document.querySelectorAll('.quick-replies button').forEach((button) => {
    button.dataset.quickReply = button.textContent.trim();
  });
  const securityToggle = document.querySelector('.security-row .toggle');
  if (securityToggle) securityToggle.dataset.toggle = 'two-factor';
  bindInteractions();
  document.querySelector('[data-auth-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAuth(event.currentTarget);
  });
  document.querySelector('[data-plugin-settings]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    savePluginSettings(event.currentTarget);
  });
  document.querySelector('[data-plugin-simulator]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    simulatePluginEvent(event.currentTarget);
  });
  document.querySelector('[data-telegram-settings]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    saveTelegramSettings(event.currentTarget);
  });
  document.querySelector('[data-withdrawal-intent-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    createWithdrawalIntent(event.currentTarget);
  });
  renderFinance();
  renderStoreFleet();
  restoreSession();
  setView(location.hash.slice(1) || 'dashboard', false);
  const requestedAuthMode = new URLSearchParams(location.search).get('auth');
  if (requestedAuthMode === 'login' || requestedAuthMode === 'register') {
    setAuthMode(requestedAuthMode);
    setAuthModal(true);
  }
  updateClock();
  window.setInterval(updateClock, 1000);
  window.addEventListener('hashchange', () => setView(location.hash.slice(1), false));
}

init();

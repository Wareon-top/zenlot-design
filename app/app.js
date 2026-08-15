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
    { icon: 'zap', name: 'Smart Reply', vendor: 'ZenLot Labs', description: 'Предлагает оператору быстрые ответы с учётом контекста заказа.', installs: '2.4k', active: true },
    { icon: 'shield', name: 'Fraud Watch', vendor: 'ZenLot Labs', description: 'Отмечает подозрительные заказы до автоматической выдачи.', installs: '1.8k', active: true },
    { icon: 'trending-up', name: 'Price Pilot', vendor: 'Kite Studio', description: 'Помогает сравнивать цену и позицию активного лота.', installs: '940', active: false },
    { icon: 'clock', name: 'Quiet Hours', vendor: 'Northbyte', description: 'Меняет сценарии ответов и выдачи в ночное время.', installs: '612', active: false },
    { icon: 'file-text', name: 'Order Notes', vendor: 'ZenLot Labs', description: 'Добавляет внутренние заметки к покупателям и заказам.', installs: '1.1k', active: false },
    { icon: 'users', name: 'Team Queue', vendor: 'Orbit Tools', description: 'Распределяет обращения между операторами по очереди.', installs: '486', active: false },
  ],
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
  target.innerHTML = state.plugins.map((plugin, index) => `
    <article class="plugin-card" style="--plugin-rgb:${colors[index % colors.length]}">
      <div class="plugin-card__top"><span class="plugin-card__mark">${icon(plugin.icon)}</span><small>${plugin.vendor}</small></div>
      <h3>${plugin.name}</h3><p>${plugin.description}</p>
      <div class="plugin-card__bottom"><span>${plugin.installs} установок</span><button data-plugin="${plugin.name}" data-active="${plugin.active}">${plugin.active ? 'Установлен' : 'Установить'}</button></div>
    </article>`).join('');
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
const connectionDemoSteps = [
  {
    icon: 'card',
    title: 'Тариф активен',
    text: 'Подключение магазина доступно после покупки любого тарифа. В демонстрации активирован тариф «Про».',
    points: ['Проверка подписки на backend', 'Лимиты модулей из тарифа', 'Один магазин в первом MVP'],
    action: 'Перейти к Telegram',
  },
  {
    icon: 'send',
    title: 'Привязка Telegram-бота',
    text: 'Bot Token добавляется на защищённом сайте. После /start бот принимает одноразовый код из кабинета и привязывается к workspace.',
    points: ['Создание бота через BotFather', 'Одноразовый код с коротким сроком', 'Никаких FunPay-секретов в сообщениях'],
    action: 'Смоделировать привязку',
  },
  {
    icon: 'lock',
    title: 'FunPay и закреплённый прокси',
    text: 'Golden Key и прокси вводятся по очереди только в защищённом кабинете. В публичном прототипе реальные поля намеренно отключены.',
    points: ['Шифрование до сохранения', 'Read-only проверка через прокси', 'Остановка при CAPTCHA или потере авторизации'],
    action: 'Запустить демо-проверку',
  },
  {
    icon: 'check',
    title: 'Магазин подключён',
    text: 'Магазин FunPay успешно подключён к сервису и боту. Приятного пользования.',
    points: ['Доступен безопасный режим чтения', 'Управление на сайте и в Telegram', 'Автоматические действия пока заблокированы'],
    action: 'Открыть управление',
  },
];

function renderConnectionDemo() {
  const modal = document.querySelector('.connect-modal');
  if (!modal) return;
  const step = connectionDemoSteps[connectionStep];
  const body = modal.querySelector('.connect-modal__body');
  const action = modal.querySelector('[data-connect-next]');
  modal.querySelectorAll('.connect-progress > span').forEach((item, index) => {
    item.classList.toggle('is-active', index === connectionStep);
    item.classList.toggle('is-complete', index < connectionStep);
  });
  if (body) {
    body.innerHTML = `<span class="connect-illustration${connectionStep === 3 ? ' connect-illustration--success' : ''}">${icon(step.icon)}<i></i></span><h3>${step.title}</h3><p>${step.text}</p><ul>${step.points.map((point) => `<li>${icon('check')} ${point}</li>`).join('')}</ul>`;
  }
  if (action) action.innerHTML = `${step.action} ${icon('chevron-right')}`;
}

function setModal(open) {
  const modal = document.querySelector('.connect-modal');
  const backdrop = document.querySelector('.modal-backdrop');
  if (!modal) return;
  if (open) {
    modal.hidden = false;
    connectionStep = 0;
    renderConnectionDemo();
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

function bindInteractions() {
  document.addEventListener('click', (event) => {
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
      setModal(true);
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

    const plugin = event.target.closest('[data-plugin]');
    if (plugin) {
      const active = plugin.dataset.active === 'true';
      plugin.dataset.active = String(!active);
      plugin.classList.toggle('button--outline', active);
      plugin.classList.toggle('button--subtle', !active);
      plugin.textContent = active ? 'Установить' : 'Установлен';
      showToast(active ? `${plugin.dataset.plugin} удалён из демо-набора` : `${plugin.dataset.plugin} добавлен в демо-набор`, active ? 'default' : 'success');
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

  document.querySelector('[data-connect-next]')?.addEventListener('click', () => {
    if (connectionStep < connectionDemoSteps.length - 1) {
      connectionStep += 1;
      renderConnectionDemo();
      showToast(`Шаг ${connectionStep + 1} из ${connectionDemoSteps.length}`);
      return;
    }
    setModal(false);
    showToast('Демо-магазин подключён в безопасном read-only режиме.', 'success');
  });

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
  setView(location.hash.slice(1) || 'dashboard', false);
  updateClock();
  window.setInterval(updateClock, 1000);
  window.addEventListener('hashchange', () => setView(location.hash.slice(1), false));
}

init();

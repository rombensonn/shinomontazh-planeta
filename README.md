# Шиномонтаж Планета

Одностраничный лендинг на Next.js 15 для шиномонтажа в Подольске с формами заявок, серверной валидацией, Telegram-уведомлениями и локальным сохранением заявок.

## Стек

- Next.js 15, App Router, TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Route Handler `POST /api/leads`
- Telegram Bot API
- SMTP-заготовка через Nodemailer
- Локальное сохранение в `data/leads.json`

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Переменные окружения

Создайте `.env` на основе `.env.example`:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
LEADS_EMAIL_TO=
NEXT_PUBLIC_SITE_URL=https://example.ru
```

Если Telegram не настроен, сайт продолжит принимать заявки при успешном локальном сохранении. Для VPS, Timeweb, Beget, Reg.ru и похожих хостингов убедитесь, что Node.js-приложение имеет право записи в папку `data`.

## Проверки

```bash
npm run typecheck
npm run build
```

## Формы

На сайте есть три формы:

- основная запись на шиномонтаж;
- уточнение наличия Б/У шин;
- короткая финальная заявка.

Все формы отправляют данные в `/api/leads`, используют honeypot-поле, rate limit, серверную Zod-валидацию и два обязательных чекбокса согласия.

## SEO

Добавлены:

- title и meta description;
- Open Graph;
- JSON-LD `AutoRepair` / `LocalBusiness`;
- `robots.txt`;
- `sitemap.xml`;
- страницы `/privacy` и `/consent`;
- favicon.

# React Project Structure

A small Vite + React + TypeScript starter focused on a clear, scalable `src/` organization.

## Getting started

```sh
npm install
npm run dev
```

## Source map

```text
src/
├── api/                 API client and service calls
├── assets/              Images, icons, and fonts
├── components/
│   ├── common/           Shared states and cross-feature UI
│   ├── layout/           App shell and navigation
│   ├── providers/        Context and app-wide providers
│   ├── skeleton/         Loading placeholders
│   └── ui/               Small reusable controls
├── constants/            Shared constants and route names
├── hooks/                Reusable React hooks
├── i18n/                 Locale configuration and messages
├── pages/                Route-level screens
├── schemas/              Input and data validation schemas
├── store/                Application state
├── types/                Shared TypeScript types
└── utils/                Small pure helper functions
```

Each area includes a small example file. Keep feature-specific code together as the application grows, and promote shared pieces into these folders when they are reused.

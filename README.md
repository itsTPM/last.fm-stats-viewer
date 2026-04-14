# Last.fm stats viewer

A pet project for learning React

## Run dev server

```bash
pnpm install
pnpm dev
```

## Environment

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `VITE_API_KEY` | Yes | Last.fm API key |
| `VITE_API_SECRET` | Yes | Last.fm API secret |
| `VITE_DEFAULT_USERNAME` | No | Pre-fills the username input on the home page |

Get your API credentials at [last.fm/api/account/create](https://www.last.fm/api/account/create).

> [!WARNING]
> `VITE_*` variables are inlined into the client bundle at build time and are visible to anyone who inspects the page source. Do not deploy this app publicly with real API credentials.

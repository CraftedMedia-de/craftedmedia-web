# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Sending contact form emails

This project includes a server API route that sends the submitted contact form via SMTP.

1) Create a `.env` file (or set environment variables in your hosting platform) with the values from `.env.example`.

2) Start the dev server and submit the form. The server route `POST /api/contact` will attempt to send an email using the configured SMTP server.

If you prefer a transactional email provider (SendGrid, Mailgun, etc.), you can adapt the implementation under `server/api/contact.post.ts` to use the provider's SDK.


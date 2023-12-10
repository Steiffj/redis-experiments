# Nitro Minimal Starter

## Temporary Containerization Commands
Podman command reference while everything is still a cobbled-together mess.
- Create network: `podman network create --driver bridge redis-net`
- Start Redis: `podman run -p 6379:6379 -v $(pwd)/data:/data --rm --network redis-net --name redis-cache --hostname redis-cache cgr.dev/chainguard/redis`
- Start Node: `podman run -p 3001:3000 --rm --network redis-net --name nitro-api --hostname nitro-api nitro`
- Create redis-cli container for testing: `podman run -it --rm --net redis-net docker.io/redis redis-cli -h redis-cache`

Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.

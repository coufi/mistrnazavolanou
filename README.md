# Mistr na zavolání

Prezentační demo web v Next.js pro hodinového manžela a drobné řemeslné služby. Projekt je postavený jako statický landing page web v češtině, s obsahem odděleným do datového souboru `src/data/siteContent.ts`.

## Požadavky

- Node.js 20.11+ nebo novější
- npm 10+
- Docker a Docker Compose pro kontejnerové spuštění

## Lokální spuštění bez Dockeru

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:3000`.

## Lokální spuštění přes Docker

```bash
docker compose up --build
```

Vývojový server poběží na `http://localhost:3000`. Zdrojové soubory jsou připojené jako bind mount, takže změny v projektu se projeví i v běžícím kontejneru.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Struktura obsahu

- `src/data/siteContent.ts` – texty, kontakty, služby, ceník, reference a další placeholder data
- `src/components/` – jednotlivé sekce landing page a sdílené UI komponenty
- `public/images/` – ilustrační placeholder assety pro demo verzi
- `doc/zadani.md` – kopie zadání použitá pro implementaci

## Deployment na Vercel

1. Pushněte projekt do Git repozitáře.
2. Ve Vercelu vytvořte nový projekt z tohoto repozitáře.
3. Framework preset ponechte na **Next.js**.
4. Build command zůstává `npm run build`.
5. V první verzi nejsou potřeba žádné environment variables.

Projekt je připravený pro běžný Next.js deployment bez vlastního backendu.

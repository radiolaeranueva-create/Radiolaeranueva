# La Era Nueva

Aplicación de agenda setting deportiva para visualizar titulares por disciplina, ámbito geográfico y fuente. La interfaz está preparada para filtrar noticias por deporte, ámbito y fuente, y abrir la noticia completa con enlace a la web original.

## Tecnologías

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- Node cron

## Scripts

```bash
npm install
npm run dev
```

## Variables de entorno

```bash
cp .env.example .env
```

## Estructura principal

- `app/` – páginas de la interfaz
- `components/` – componentes reutilizables
- `data/` – menú de deportes y fuentes
- `lib/` – lógica de filtrado y normalización
- `prisma/` – esquema de base de datos
- `scripts/` – ingesta periódica de noticias

## Actualización diaria

El scheduler está preparado para ejecutarse cada día a las 05:00.

```bash
npm run ingest:news
```

## Requisitos

- Node.js 18+
- PostgreSQL 14+

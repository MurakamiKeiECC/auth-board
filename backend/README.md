### 大枠の作成

> https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql > https://github.com/prisma/prisma-examples/tree/latest/orm/express

Create project setup

```bash
npm init -y
npm install prisma typescript tsx @types/node ts-node --save-dev
```

Next, initialize TypeScript:

```bash
npx tsc --init
```

Prisma ORM project by creating

```
npx prisma init
cp .env .env.example
```

Install and generate Prisma Client

```
npm install @prisma/client
```

Create a new file named index.ts

```
mkdir -p src
touch src/index.ts
```

### データベースとコンテナ考える

> https://www.prisma.io/docs/orm/overview/databases/postgresql > https://www.prisma.io/docs/orm/prisma-client/testing/integration-testing#add-docker-to-your-project > https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

ltsのバージョンを調べてdockerのtagに指定する

- node
  - https://nodejs.org/en/about/previous-releases
  - https://hub.docker.com/_/node
- postgres
  - https://www.postgresql.org/support/versioning/
  - https://hub.docker.com/_/postgres

```
touch prisma/seed.ts
```

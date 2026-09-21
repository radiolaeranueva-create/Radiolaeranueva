generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Sport {
  id          Int       @id @default(autoincrement())
  name        String
  slug        String    @unique
  description String?
  categories  Category[]
  news        News[]
}

model Category {
  id         Int      @id @default(autoincrement())
  sportId    Int
  name       String
  scope      String
  url        String?
  sport      Sport    @relation(fields: [sportId], references: [id])
  news       News[]
}

model Source {
  id         Int      @id @default(autoincrement())
  name       String
  url        String
  rssUrl     String?
  active     Boolean  @default(true)
  news       News[]
}

model News {
  id          Int       @id @default(autoincrement())
  sportId     Int
  categoryId  Int
  sourceId    Int
  title       String
  summary     String?
  content     String?
  imageUrl    String?
  url         String
  publishedAt DateTime?
  ingestedAt  DateTime  @default(now())
  isFeatured  Boolean   @default(false)
  hash        String    @unique

  sport       Sport    @relation(fields: [sportId], references: [id])
  category    Category @relation(fields: [categoryId], references: [id])
  source      Source   @relation(fields: [sourceId], references: [id])

  @@index([sportId, categoryId])
  @@index([publishedAt])
}

import { PrismaClient } from "@prisma/client";
import { sportsGroups } from "../data/sources";

const prisma = new PrismaClient();

async function main() {
  for (const group of sportsGroups) {
    for (const sport of group.sports) {
      const createdSport = await prisma.sport.upsert({
        where: { slug: sport.slug },
        update: {},
        create: {
          name: sport.name,
          slug: sport.slug,
          description: `${sport.name} - agenda setting deportiva`,
        },
      });

      for (const scope of sport.scopes) {
        const category = await prisma.category.upsert({
          where: {
            id: 0,
          },
          update: {},
          create: {
            sportId: createdSport.id,
            name: sport.name,
            scope: scope.scope,
            url: scope.sources[0]?.url ?? "",
          },
        });

        for (const source of scope.sources) {
          await prisma.source.upsert({
            where: { id: 0 },
            update: {},
            create: {
              name: source.name,
              url: source.url,
              rssUrl: null,
            },
          });
        }
      }
    }
  }

  console.log("Seed ejecutado correctamente.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { sportsGroups } from "../data/sources";

async function ingestNews() {
  console.log("🔄 Ingesta programada: actualización diaria a las 05:00");

  const totalSources = sportsGroups.reduce(
    (count, group) => count + group.sports.reduce((sportCount, sport) => sportCount + sport.scopes.reduce((scopeCount, scope) => scopeCount + scope.sources.length, 0), 0),
    0,
  );

  console.log(`Fuentes registradas: ${totalSources}`);
  console.log("La ingestión puede conectarse a los RSS o a scraping por dominio según el tipo de fuente.");
}

ingestNews();

import { sportsGroups } from "@/data/sources";

export type NewsItem = {
  id: string;
  sportName: string;
  sportSlug: string;
  sourceName: string;
  scope: string;
  title: string;
  summary: string;
  content: string;
  url: string;
  date: string;
};

export function buildDemoNews(): NewsItem[] {
  const items: NewsItem[] = [];

  sportsGroups.forEach((group) => {
    group.sports.forEach((sport) => {
      sport.scopes.forEach((scope) => {
        scope.sources.forEach((source, index) => {
          const baseDate = new Date();
          baseDate.setDate(baseDate.getDate() - index);
          const id = `${sport.slug}-${scope.scope}-${source.name}`
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

          items.push({
            id,
            sportName: sport.name,
            sportSlug: sport.slug,
            sourceName: source.name,
            scope: scope.scope,
            title: `${sport.name}: ${source.name} actualiza la cobertura ${scope.scope}`,
            summary: `Se mantiene la atención sobre ${sport.name} en el ámbito ${scope.scope}, con seguimiento de ${source.name} y su agenda informativa más reciente.`,
            content: `La cobertura de ${sport.name} en ${scope.scope} sigue activa con análisis, novedades del calendario y reportajes de la federación.\n\n${source.name} publica información relevante para la agenda de seguimiento institucional, deportistas, competiciones y desarrollo del deporte en el ámbito correspondiente.\n\nEste dashboard permite visualizar esas noticias en una misma superficie, simplificando la comparación entre fuentes y facilitando la construcción de una agenda setting rigurosa.`,
            url: source.url,
            date: baseDate.toISOString().slice(0, 10),
          });
        });
      });
    });
  });

  return items;
}

export const demoNews = buildDemoNews();

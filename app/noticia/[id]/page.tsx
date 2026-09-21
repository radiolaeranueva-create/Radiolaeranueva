import Link from "next/link";
import { notFound } from "next/navigation";
import { findSportBySlug, getAllScopesForSport, getNewsForSportsByScope, getScopeSources } from "@/lib/news";

export function generateStaticParams() {
  return [
    { sport: "baloncesto", scope: "internacional" },
    { sport: "baloncesto", scope: "nacional" },
    { sport: "baloncesto", scope: "autonomico" },
    { sport: "balonmano", scope: "internacional" },
    { sport: "balonmano", scope: "europeo" },
    { sport: "balonmano", scope: "nacional" },
    { sport: "balonmano", scope: "autonomico" },
    { sport: "futbol", scope: "internacional" },
    { sport: "futbol", scope: "europeo" },
    { sport: "futbol", scope: "nacional" },
    { sport: "futbol", scope: "autonomico" },
  ];
}

export default function SportScopePage({ params }: { params: { sport: string; scope: string } }) {
  const sport = findSportBySlug(params.sport);

  if (!sport) {
    notFound();
  }

  const scopes = getAllScopesForSport(params.sport);
  const normalizedScope = params.scope.toLowerCase();

  if (!scopes.includes(normalizedScope)) {
    notFound();
  }

  const sources = getScopeSources(params.sport, normalizedScope);
  const news = getNewsForSportsByScope(params.sport, normalizedScope);

  return (
    <main className="content-shell">
      <div className="topbar">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Inicio</Link> / <Link href={`/deportes/${params.sport}`}>{sport.name}</Link> / {normalizedScope}
          </div>
          <h1 className="header-title">{sport.name} · {normalizedScope}</h1>
        </div>
      </div>

      <div className="scope-grid">
        {scopes.map((scope) => (
          <Link
            key={scope}
            href={`/deportes/${params.sport}/${scope}`}
            className={`scope-link ${scope === normalizedScope ? "active" : ""}`}
          >
            {scope}
          </Link>
        ))}
      </div>

      <div className="list-grid">
        <div className="news-column">
          {news.length > 0 ? (
            news.map((item) => (
              <article key={item.id} className="news-card">
                <div className="meta-row">
                  <span>{item.sourceName}</span>
                  <span>•</span>
                  <span>{item.scope}</span>
                  <span>•</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link href={`/noticia/${item.id}`} className="cta">
                  Leer noticia →
                </Link>
              </article>
            ))
          ) : (
            <div className="empty-state">No hay titulares disponibles en este ámbito.</div>
          )}
        </div>

        <aside className="side-column">
          <div className="side-card">
            <h3>Fuentes</h3>
            <ul className="source-list">
              {sources.map((source) => (
                <li key={source.name}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

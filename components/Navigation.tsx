import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/news";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = getNewsById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="content-shell">
      <div className="breadcrumbs" style={{ marginBottom: 18 }}>
        <Link href="/">Inicio</Link> / <Link href={`/deportes/${article.sportSlug}`}>{article.sportName}</Link> / <Link href={`/deportes/${article.sportSlug}/${article.scope}`}>{article.scope}</Link> / Noticia
      </div>

      <article className="news-detail">
        <div className="meta-row">
          <span>{article.sourceName}</span>
          <span>•</span>
          <span>{article.scope}</span>
          <span>•</span>
          <time>{article.date}</time>
        </div>

        <h1>{article.title}</h1>
        <p className="summary">{article.summary}</p>
        <div className="content">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={`${article.id}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <a className="source-link" href={article.url} target="_blank" rel="noreferrer">
          Ver noticia original
        </a>
      </article>
    </main>
  );
}

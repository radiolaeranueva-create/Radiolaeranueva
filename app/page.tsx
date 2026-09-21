import Link from "next/link";
import { sportsGroups } from "@/data/sources";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero-card">
        <p className="eyebrow">Agenda setting</p>
        <h1>La Era Nueva</h1>
        <p className="lead">
          Visualiza titulares deportivos por disciplina, ámbito geográfico y fuente. Consulta
          noticias de referencia para monitorizar cobertura informativa y análisis periodístico.
        </p>
      </header>

      <section className="grid-layout">
        {sportsGroups.map((group) => (
          <div key={group.name} className="group-card">
            <h2>{group.name}</h2>
            <ul>
              {group.sports.map((sport) => (
                <li key={sport.slug}>
                  <Link href={`/deportes/${sport.slug}`}>{sport.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}

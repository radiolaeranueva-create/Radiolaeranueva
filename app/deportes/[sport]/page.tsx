import Link from "next/link";
import { notFound } from "next/navigation";
import { findSportBySlug, getAllScopesForSport, getNewsForSportsByScope } from "@/lib/news";

export function generateStaticParams() {
  return [
    { sport: "baloncesto" },
    { sport: "balonmano" },
    { sport: "beisbol-y-softbol" },
    { sport: "futbol" },
    { sport: "rugby" },
    { sport: "voleibol" },
    { sport: "boxeo" },
    { sport: "judo" },
    { sport: "karate" },
    { sport: "muay-thai" },
    { sport: "taekwondo" },
    { sport: "esgrima" },
    { sport: "tiro-con-arco" },
    { sport: "tiro" },
    { sport: "badminton" },
    { sport: "padel" },
    { sport: "tenis" },
    { sport: "tenis-de-mesa" },
    { sport: "ajedrez" },
    { sport: "billar" },
    { sport: "escalada" },
    { sport: "automovilismo" },
    { sport: "ciclismo" },
    { sport: "hipica" },
    { sport: "motociclismo" },
    { sport: "patinaje" },
    { sport: "natacion" },
    { sport: "piraguismo" },
    { sport: "remo" },
    { sport: "surf" },
    { sport: "vela" },
    { sport: "atletismo" },
    { sport: "gimnasia" },
    { sport: "halterofilia" },
    { sport: "triatlon" },
    { sport: "esqui" },
    { sport: "biatlon" },
    { sport: "esqui-alpino" },
    { sport: "curling" },
    { sport: "beisbol" },
    { sport: "golf" },
    { sport: "hockey" },
    { sport: "fronton" },
  ];
}

export default function SportPage({ params }: { params: { sport: string } }) {
  const sport = findSportBySlug(params.sport);

  if (!sport) {
    notFound();
  }

  const scopes = getAllScopesForSport(params.sport);

  return (
    <main className="content-shell">
      <div className="topbar">
        <div>
          <div className="breadcrumbs">
            <Link href="/">Inicio</Link> / {sport.name}
          </div>
          <h1 className="header-title">{sport.name}</h1>
        </div>
      </div>

      <div className="scope-grid">
        {scopes.map((scope) => (
          <Link
            key={scope}
            href={`/deportes/${params.sport}/${scope}`}
            className="scope-link"
          >
            {scope}
          </Link>
        ))}
      </div>

      <div className="empty-state">
        Elige un ámbito geográfico para consultar los titulares y fuentes asociadas.
      </div>
    </main>
  );
}

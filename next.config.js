import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="content-shell">
      <div className="empty-state">
        <h2>Contenido no encontrado</h2>
        <p>La sección solicitada no existe o no está disponible todavía.</p>
        <Link href="/">Volver al inicio</Link>
      </div>
    </main>
  );
}

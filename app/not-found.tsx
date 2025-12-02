import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-text-secondary mb-8">Página não encontrada</p>
        <Link
          href="/"
          className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors inline-block"
        >
          Voltar para home
        </Link>
      </div>
    </div>
  );
}


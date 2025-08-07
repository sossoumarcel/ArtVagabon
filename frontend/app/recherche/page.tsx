"use client"

import { useSearchParams } from 'next/navigation'

export default function RecherchePage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div>
      <h1>Résultats de recherche pour : "{query}"</h1>
      {/* Le contenu des résultats de recherche ira ici */}
    </div>
  );
}

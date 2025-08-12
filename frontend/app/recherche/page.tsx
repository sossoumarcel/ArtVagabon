"use client"

import { useSearchParams } from 'next/navigation'

export default function RecherchePage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div>
      <h1>Résultats de recherche pour : &quot;{query}&quot;</h1>
    </div>
  );
}

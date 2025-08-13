"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RechercheContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>
        Résultats de recherche pour : {query ? `"${query}"` : "aucune recherche"}
      </h1>
    </div>
  );
}

export default function RecherchePage() {
  return (
    <Suspense fallback={<div>Chargement des résultats...</div>}>
      <RechercheContent />
    </Suspense>
  );
}

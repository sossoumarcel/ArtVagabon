/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { absoluteUrl } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"

interface ArticleProps {
  node: DrupalNode
}

export function Article({ node, ...props }: ArticleProps) {
  // --- Débogage pour l'image Cloudinary ---
  console.log(
    "Données reçues pour 'field_imagecloudinary':",
    JSON.stringify(node.field_imagecloudinary, null, 2)
  );

  // --- Extraction des données pour l'Image Cloudinary ---
  const cloudinaryImageUrl = node.field_imagecloudinary?.field_media_cloudinary_image?.uri?.url
  const cloudinaryImageAlt = node.field_imagecloudinary?.field_media_cloudinary_image?.meta?.alt || 'Image Cloudinary de l\'article'

  // --- Extraction des données pour l'Image Standard Drupal ---
  // On utilise absoluteUrl pour transformer le chemin relatif en URL complète
  const standardImageUrl = node.field_image?.uri?.url ? absoluteUrl(node.field_image.uri.url) : null
  const standardImageAlt = node.field_image?.meta?.alt || 'Image standard de l\'article'

  return (
    <article {...props}>
      {/* Titre */}
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>

      {/* Métadonnées (Auteur et Date) */}
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>

      {/* Affichage de l'Image Cloudinary si elle existe */}
      {cloudinaryImageUrl && (
        <figure className="my-8">
          <h2 className="text-2xl font-bold mb-4">Image Cloudinary</h2>
          <Image
            src={cloudinaryImageUrl}
            width={1200}
            height={768}
            alt={cloudinaryImageAlt}
            className="object-cover w-full h-auto bg-gray-100"
            priority // Priorité à l'image Cloudinary
          />
        </figure>
      )}

      {/* Affichage de l'Image Standard si elle existe */}
      {standardImageUrl && (
        <figure className="my-8">
          <h2 className="text-2xl font-bold mb-4">Image Standard</h2>
          <Image
            src={standardImageUrl}
            width={1200}
            height={768}
            alt={standardImageAlt}
            className="object-cover w-full h-auto bg-gray-100"
          />
        </figure>
      )}

      {/* Corps du Texte */}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
  )
}

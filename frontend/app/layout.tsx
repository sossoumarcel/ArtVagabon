import type { Metadata } from "next"
import type { ReactNode } from "react"
import Script from 'next/script'

import MainLayout from "@/components/atoms/MainLayout"
import { HeaderNav } from "@/components/atoms/navigation/HeaderNav"
import { Footer } from "@/components/atoms/Footer"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KD7TS99LKZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KD7TS99LKZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <MainLayout
          header={<HeaderNav />}
          footer={<Footer />}
        >
          {children}
        </MainLayout>
        
      </body>
    </html>
  )
}
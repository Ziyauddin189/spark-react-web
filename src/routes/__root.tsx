import { createRootRoute, Outlet } from '@tanstack/react-router'
import { faqs } from '@/data/faqs'
import { batches } from '@/data/batches'
import { site } from '@/lib/site'

const title = 'Spark Academy — Live concept-first coaching for 10th, Inter MPC, EAPCET & JEE'
const description =
  'Live interactive Sunday classes for SSC/CBSE 10th, Jr. & Sr. Intermediate MPC, AP EAPCET, JEE Mains and Software Training. Concept-first teaching, small batches.'

// Structured data so Google can show the academy and its FAQs as rich results.
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    slogan: 'Learn · Ignite · Launch',
    description,
    email: site.email,
    telephone: site.phoneE164,
    founder: { '@type': 'Person', name: site.founder },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    sameAs: [site.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Batches',
      itemListElement: batches.map((b) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Course', name: b.title, description: b.desc },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Fonts are loaded in index.html so they arrive before first paint */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Outlet />
    </>
  ),
})

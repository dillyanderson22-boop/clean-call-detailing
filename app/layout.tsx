import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Clean Call Car Detailing — Mobile Detailing in Chandler, AZ',
    template: '%s | Clean Call Car Detailing',
  },
  description:
    'Mobile car detailing in Chandler & the East Valley. Interior & exterior detailing, ceramic coating, paint correction and wheel detail — we come to your home or office. Call (602) 641-9134.',
  keywords: ['mobile car detailing Chandler', 'ceramic coating Chandler AZ', 'paint correction', 'car detailing Gilbert', 'auto detailing East Valley', 'interior detailing'],
  openGraph: {
    title: 'Clean Call Car Detailing — Mobile Detailing in Chandler, AZ',
    description: 'We come to you. Interior, exterior, ceramic coating & paint correction across the East Valley.',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AutoWash',
  name: site.name,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  telephone: '+16026419134',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 33.3062, longitude: -111.8413 },
  areaServed: site.areas.map((a) => ({ '@type': 'City', name: a })),
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00', closes: '19:00',
  }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

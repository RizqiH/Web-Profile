export interface PersonStructuredData {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  description: string
  url: string
  image: string
  sameAs: string[]
  alumniOf?: {
    '@type': string
    name: string
  }
  email?: string
  address?: {
    '@type': string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  knowsAbout: string[]
}

export interface WebSiteStructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  author: {
    '@type': string
    name: string
  }
}

export interface WebPageStructuredData {
  '@context': string
  '@type': string
  '@id': string
  url: string
  name: string
  description: string
  inLanguage: string
  isPartOf: {
    '@type': string
    name: string
    url: string
  }
  about: {
    '@type': string
    name: string
  }
}

export function createPersonStructuredData(siteURL: string): PersonStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Rizqi Amanan Habibulloh',
    jobTitle: 'Mobile Developer & Full Stack Web Developer',
    description:
      'Computer Science student specializing in cross-platform mobile development (Flutter/Dart) and native Android (Kotlin), as well as scalable backend services with Go, Python, and Node.js.',
    url: siteURL,
    image: new URL('/assets/images/fotoku.jpg', siteURL).href,
    sameAs: [
      'https://github.com/RizqiH',
      'https://www.linkedin.com/in/rizki-amanan/',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Pembangunan Nasional "Veteran" East Java',
    },
    email: 'rizkiamanan@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surabaya',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    knowsAbout: [
      'Mobile Development',
      'Flutter',
      'Dart',
      'Kotlin',
      'Jetpack Compose',
      'Web Development',
      'Full Stack Development',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'Next.js',
      'Go',
      'Python',
      'Laravel',
      'PHP',
      'MySQL',
      'PostgreSQL',
      'Firebase',
      'Redis',
      'Docker',
      'Clean Architecture',
      'BLoC Pattern',
      'MVVM',
    ],
  }
}

export function createWebSiteStructuredData(siteURL: string): WebSiteStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rizqi Amanan - Mobile & Full Stack Developer Portfolio',
    description:
      'Portfolio website of Muhammad Rizqi Amanan Habibulloh, a Mobile & Full Stack Developer showcasing projects, skills, and experience.',
    url: siteURL,
    author: {
      '@type': 'Person',
      name: 'Muhammad Rizqi Amanan Habibulloh',
    },
  }
}

export function createWebPageStructuredData(
  siteURL: string,
  pageURL: string,
  pageName: string,
  pageDescription: string
): WebPageStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': new URL(pageURL, siteURL).href,
    url: new URL(pageURL, siteURL).href,
    name: pageName,
    description: pageDescription,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Rizqi Amanan - Mobile & Full Stack Developer Portfolio',
      url: siteURL,
    },
    about: {
      '@type': 'Person',
      name: 'Muhammad Rizqi Amanan Habibulloh',
    },
  }
}

export function createPortfolioStructuredData(siteURL: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Projects',
    description: 'Collection of mobile and web development projects by Rizqi Amanan',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Face Verification Attendance System',
          description:
            'Enterprise-grade attendance system with real-time face recognition (Flutter, Go, Python InsightFace).',
          url: 'https://github.com/RizqiH/Face-verification-absen',
          applicationCategory: 'MobileApplication',
          operatingSystem: 'Android/iOS',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Lab QR Scanner',
          description:
            'Laboratory inventory management Android app with QR verification, ML Kit, CameraX, and Firebase.',
          url: 'https://github.com/RizqiH/kotlin-peminjaman-barang-app-using-firebase',
          applicationCategory: 'MobileApplication',
          operatingSystem: 'Android',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Trading Simulation Platform',
          description:
            'Complete stock trading simulation application with Go Clean Architecture, Nuxt 3, WebSocket, and Redis.',
          url: 'https://stock-simulation-frontend.vercel.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Animal Mart',
          description: 'E-commerce platform with real-time admin analytics and persistent cart.',
          url: 'https://animal-marts.vercel.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'SoftwareApplication',
          name: 'AuctionHub Online Auction System',
          description: 'Real-time online bidding system built with PHP 8.1, MySQL, AdminLTE, and Docker.',
          url: 'https://uaspemweb.wasmer.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Village Web Platform',
          description:
            'Digital platform supporting local creative communities with documentation and digital collaboration spaces.',
          url: 'https://arusbawahcreator.vercel.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
    ],
  }
}



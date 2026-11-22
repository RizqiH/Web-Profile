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
    name: 'Muhammad Rizqi Amanan Habibullah',
    jobTitle: 'Full Stack Web Developer',
    description:
      'Full Stack Web Developer with 1.5+ years of hands-on contract experience building production-ready web applications using Laravel, PHP, Vue.js, Next.js, React, TypeScript, Node.js, Go, MySQL, and PostgreSQL. Experienced in Clean Architecture, MVC, RESTful APIs, Docker deployment, and payment gateway integration.',
    url: siteURL,
    image: new URL('/assets/images/fotoku.jpg', siteURL).href,
    sameAs: [
      'https://github.com/RizqiH',
      'https://www.linkedin.com/in/rizki-amanan/',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Pembangunan Nasional Veteran East Java',
    },
    email: 'rizkiamanan@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surabaya',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    knowsAbout: [
      'Full Stack Development',
      'Web Development',
      'Laravel',
      'PHP',
      'Vue.js',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Go',
      'Python',
      'Flutter',
      'Kotlin',
      'Docker',
      'Redis',
      'MySQL',
      'PostgreSQL',
      'RESTful APIs',
      'Clean Architecture',
      'CI/CD',
    ],
  }
}

export function createWebSiteStructuredData(siteURL: string): WebSiteStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rizqi Amanan - Full Stack Web Developer Portfolio',
    description:
      'Portfolio website of Muhammad Rizqi Amanan Habibullah, a Full Stack Web Developer with 1.5+ years of contract experience showcasing projects, skills, and experience.',
    url: siteURL,
    author: {
      '@type': 'Person',
      name: 'Muhammad Rizqi Amanan Habibullah',
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
      name: 'Rizqi Amanan - Full Stack Web Developer Portfolio',
      url: siteURL,
    },
    about: {
      '@type': 'Person',
      name: 'Muhammad Rizqi Amanan Habibullah',
    },
  }
}

export function createPortfolioStructuredData(siteURL: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Projects',
    description: 'Collection of web development projects by Rizqi Amanan',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Kontena AI',
          description:
            'AI Content Strategist platform with multi-LLM pipeline and Hybrid RAG engine using Next.js, FastAPI, and Supabase PostgreSQL.',
          url: 'https://kontena.tech/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Trading Simulation Platform',
          description:
            'Stock trading simulation platform using Go backend Clean Architecture, Nuxt 3 frontend, MySQL, Redis, and WebSocket.',
          url: 'https://stock-simulation-frontend.vercel.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Face Verification Attendance System',
          description:
            'Real-time face recognition attendance system built with Flutter (Clean Architecture + BLoC), Go backend, and Python InsightFace.',
          url: 'https://github.com/RizqiH/Face-verification-absen',
          applicationCategory: 'MobileApplication',
          operatingSystem: 'Android/iOS',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Lab QR Scanner',
          description:
            'Android laboratory inventory app with ML Kit QR scanning, CameraX, Jetpack Compose Material3, and Firebase.',
          url: 'https://github.com/RizqiH/kotlin-peminjaman-barang-app-using-firebase',
          applicationCategory: 'MobileApplication',
          operatingSystem: 'Android',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Animal Mart',
          description: 'E-commerce platform with Next.js 14, Express.js, and Firebase Firestore featuring order management and admin analytics.',
          url: 'https://animal-marts.vercel.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'SoftwareApplication',
          name: 'AuctionHub Online Auction System',
          description: 'Online auction system using PHP 8.1, MySQL, AdminLTE, and Docker containerization.',
          url: 'https://uaspemweb.wasmer.app/',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
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

import React from 'react'

interface AboutMeProps {
  name?: string
}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div class="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
      <div class="flex justify-center mb-12">
        <div class="rounded-xl overflow-hidden shadow-lg border border-black/10">
          <img
            src="/assets/images/fotoku.jpg"
            alt="Muhammad Rizqi Amanan Habibullah"
            class="w-72 sm:w-80 h-52 sm:h-56 object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div class="text-black flex flex-col items-center text-center">
        <h1 class="text-2xl tracking-tighter font-light lg:text-4xl text-black">
          About
        </h1>
        <h2 class="text-2xl tracking-tighter font-light lg:text-4xl text-black">
          Rizqi Amanan
        </h2>
        <p class="text-xs font-mono uppercase tracking-widest text-gray-600 mt-2">
          Full Stack Web Developer &bull; Surabaya, Indonesia
        </p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center gap-6 mt-8 text-base text-gray-700 leading-relaxed">
        <p class="max-w-lg">
          Full Stack Web Developer with 1.5+ years of hands-on contract experience building production-ready web applications using Laravel, PHP, Vue.js, Next.js, React, TypeScript, Node.js, Go, MySQL, and PostgreSQL. Experienced in Clean Architecture, MVC, RESTful APIs, Docker deployment, and payment gateway integration.
        </p>
        <p class="max-w-lg">
          Final-year Informatics student (GPA 3.8/4.00) at Universitas Pembangunan Nasional "Veteran" East Java. Currently based in Surabaya and available for full-time onsite work as well as flexible remote contracts.
        </p>
      </div>

      <div class="my-16 border-t border-gray-400/30"></div>

      <div>
        <div class="text-black flex flex-col items-center text-center mb-8">
          <h2 class="text-2xl tracking-tighter font-light lg:text-3xl text-black">
            Experience
          </h2>
        </div>

        <div class="flex flex-col gap-6 w-full max-w-3xl mx-auto text-base text-gray-700">
          <div class="flex flex-col lg:flex-row justify-between gap-6 pb-6 border-b border-gray-400/20">
            <div class="max-w-md">
              <p class="font-bold text-gray-900">PT. Aksamedia</p>
              <p class="text-xs font-mono text-gray-600 uppercase mt-0.5">Remote (Project-Based) &bull; Sept 2025 - July 2026</p>
              <p class="text-xs font-mono text-gray-800 font-semibold mt-1">Full Stack Web Developer (Contract)</p>
            </div>
            <div class="max-w-md text-sm text-gray-700">
              <ul class="list-disc ml-5 space-y-1.5">
                <li>Engineered scalable e-commerce platform architecture with Laravel and Next.js.</li>
                <li>Integrated Doku Payment Gateway for automated transaction processing.</li>
                <li>Developed modular UI components using React and Vue.js with GitLab code reviews.</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row justify-between gap-6 pb-6 border-b border-gray-400/20">
            <div class="max-w-md">
              <p class="font-bold text-gray-900">Wootix (Looyal Subsidiary)</p>
              <p class="text-xs font-mono text-gray-600 uppercase mt-0.5">Onsite &bull; Oct 2025 - July 2026</p>
              <p class="text-xs font-mono text-gray-800 font-semibold mt-1">Full Stack Web Developer (Contract)</p>
            </div>
            <div class="max-w-md text-sm text-gray-700">
              <ul class="list-disc ml-5 space-y-1.5">
                <li>Core engineer on Wootix online event ticketing and management platform.</li>
                <li>Built automated identity card validation system using Python OCR (RapidOCR).</li>
                <li>Implemented multi-language support (i18n), session check-in limits, and RBAC.</li>
                <li>Integrated transactional email validation API and Google Geocoding API.</li>
                <li>Developed event creator dashboard and payment calculator using Next.js, TypeScript, and Express.</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row justify-between gap-6">
            <div class="max-w-md">
              <p class="font-bold text-gray-900">Mark Design Startup</p>
              <p class="text-xs font-mono text-gray-600 uppercase mt-0.5">Onsite &bull; June 2022 - Dec 2022</p>
              <p class="text-xs font-mono text-gray-800 font-semibold mt-1">Web Developer (Internship)</p>
            </div>
            <div class="max-w-md text-sm text-gray-700">
              <ul class="list-disc ml-5 space-y-1.5">
                <li>Developed responsive corporate profile website using ReactJS, NodeJS, and MySQL.</li>
                <li>Authored 15+ articles for digital platforms and handled network troubleshooting.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="my-16 border-t border-gray-400/30"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div>
          <h2 class="text-xl tracking-tighter font-light text-black mb-4">
            Education
          </h2>
          <div class="space-y-4 text-sm text-gray-700">
            <div>
              <p class="font-bold text-gray-900">UPN "Veteran" East Java</p>
              <p class="text-xs font-mono text-gray-600">2023 - Present &bull; 7th Semester</p>
              <p class="text-gray-800 mt-0.5">Bachelor of Informatics &bull; GPA: 3.8 / 4.00</p>
            </div>
            <div>
              <p class="font-bold text-gray-900">SMK Telkom Malang</p>
              <p class="text-xs font-mono text-gray-600">2021 - 2023</p>
              <p class="text-gray-800 mt-0.5">Software Engineering</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl tracking-tighter font-light text-black mb-4">
            Certifications
          </h2>
          <div class="space-y-3 text-sm text-gray-700">
            <div>
              <p class="font-bold text-gray-900">Data Science & Generative AI</p>
              <p class="text-xs font-mono text-gray-600">Celerates CAMP Batch 4 (PT Mitra Talenta Grup) &bull; July 2026</p>
            </div>
            <div>
              <p class="font-bold text-gray-900">NodeJS Competency Certification</p>
              <p class="text-xs font-mono text-gray-600">BNSP &bull; March 2023</p>
            </div>
            <div>
              <p class="font-bold text-gray-900">IT Specialist in JavaScript</p>
              <p class="text-xs font-mono text-gray-600">Certiport &bull; December 2022</p>
            </div>
            <div>
              <p class="font-bold text-gray-900">Telkom Digi Up Junior Web Developer</p>
              <p class="text-xs font-mono text-gray-600">BNSP &bull; November 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a
          href="/project"
          class="inline-flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-black border-b-2 border-gray-700 pb-1 hover:border-black transition-colors"
        >
          <span>Explore Projects</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  )
}

export default AboutMe

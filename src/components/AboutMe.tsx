import React from 'react'

interface AboutMeProps {
  name: string
}

const AboutMe: React.FC<AboutMeProps> = ({
  name = 'Muh. Rizqi Amanan Habibullah',
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 px-8 py-12">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-16 h-16 border border-white rounded-lg rotate-45"></div>
              <div className="absolute bottom-6 left-12 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Profile Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 shadow-lg">
                <span className="text-4xl">🌟</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {name}
              </h1>

              {/* Subtitle */}
              <div className="flex items-center justify-center gap-2 text-gray-200">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-lg font-medium">Informatics Student</span>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
                I am a passionate student at{' '}
                <span className="font-semibold text-gray-800">
                  Universitas Pembangunan Nasional Veteran East Java
                </span>
                , majoring in Informatics. I have a deep love for creative
                writing and transforming ideas into impactful works, including
                copywriting that resonates with audiences.
              </p>
            </div>

            {/* Skills & Focus Areas */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Writing */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">✍️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Creative Writing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Passionate about crafting compelling narratives and
                    developing copywriting skills that engage and inspire
                    audiences.
                  </p>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Focused on creating intuitive user experiences and beautiful
                    interfaces that bridge functionality with aesthetics.
                  </p>
                </div>
              </div>

              {/* Web Development */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Web Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building modern, responsive web applications with clean code
                    and attention to performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl px-8 py-4 border border-gray-200">
                <p className="text-gray-600 italic text-lg">
                  "Transforming ideas into digital experiences"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-gray-200/30 rounded-full blur-xl"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-40 h-40 bg-gray-300/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}

export default AboutMe

import React, { useEffect, useState, useRef } from 'react'
import './AboutMe.css'

interface AboutMeProps {
  name: string
}

const AboutMe: React.FC<AboutMeProps> = ({
  name = 'Muh. Rizqi Amanan Habibullah',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const fullText = 'Full Stack Web Developer'

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    let mouseTicking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTicking && containerRef.current) {
        requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect()
          setMousePos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
          })
          mouseTicking = false
        })
        mouseTicking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      clearInterval(typingInterval)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const particles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={`particle-${i}`}
      className="absolute w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-20 animate-float-particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  ))

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-500/10 to-transparent animate-gradient-shift"></div>
        {particles}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div
          className={`bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
          style={{
            transform: `translateY(${scrollY * 0.1}px) perspective(1000px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`,
            boxShadow: `${mousePos.x * 20}px ${mousePos.y * 20}px 60px rgba(0,0,0,0.15)`,
            transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
          }}
        >
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 px-8 py-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

            <div className="absolute inset-0 opacity-15">
              <div
                className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full animate-float-1 animate-spin-slow"
                style={{
                  transform: `translate(${scrollY * 0.05 + mousePos.x * 15}px, ${scrollY * 0.03 + mousePos.y * 15}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
              ></div>
              <div
                className="absolute top-8 right-8 w-16 h-16 border border-white rounded-lg rotate-45 animate-float-2"
                style={{
                  transform: `translate(${scrollY * -0.03 + mousePos.x * -10}px, ${scrollY * 0.04 + mousePos.y * -10}px) rotate(${45 + scrollY * 0.05 + mousePos.x * 20}deg)`,
                  transition: 'transform 0.2s ease-out',
                }}
              ></div>
              <div
                className="absolute bottom-6 left-12 w-12 h-12 bg-white/20 rounded-full animate-float-3 animate-pulse-slow"
                style={{
                  transform: `translate(${scrollY * 0.02 + mousePos.x * 8}px, ${scrollY * -0.02 + mousePos.y * 8}px) scale(${1 + mousePos.x * 0.1})`,
                  transition: 'transform 0.2s ease-out',
                }}
              ></div>
              <div
                className="absolute top-1/2 right-1/4 w-8 h-8 border border-white/30 rotate-12 animate-float-1"
                style={{
                  transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px) rotate(${12 + mousePos.x * 30}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
              ></div>
              <div
                className="absolute bottom-1/3 right-12 w-6 h-6 bg-white/10 rounded-full animate-float-2"
                style={{
                  transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                  transition: 'transform 0.15s ease-out',
                }}
              ></div>
            </div>

            <div
              className="relative z-10 text-center"
              style={{
                transform: `translateY(${scrollY * 0.15}px) translateX(${mousePos.x * 5}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 shadow-lg transition-all duration-700 delay-300 ${isVisible ? 'animate-bounce-in scale-100' : 'scale-0'}`}
                style={{
                  transform: `rotate(${mousePos.x * 10}deg) scale(${1 + mousePos.y * 0.1})`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <span className="text-3xl font-bold text-gray-700">R</span>
              </div>

              <h1
                className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight transition-all duration-800 delay-500 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}
                style={{
                  textShadow: `${mousePos.x * 2}px ${mousePos.y * 2}px 10px rgba(0,0,0,0.3)`,
                }}
              >
                {name}
              </h1>

              <div className={`flex items-center justify-center gap-2 text-gray-200 transition-all duration-800 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div
                  className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-expand-width"
                  style={{ width: `${2 + Math.abs(mousePos.x) * 0.5}rem` }}
                ></div>
                <span className="text-lg font-medium">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
                <div
                  className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-expand-width"
                  style={{ width: `${2 + Math.abs(mousePos.x) * 0.5}rem` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="px-8 py-12 relative">
            <div
              className={`mb-12 transition-all duration-800 delay-900 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
              style={{
                transform: `translateY(${scrollY * 0.08}px) translateX(${mousePos.x * 3}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
                Full Stack Web Developer with 1.5+ years of hands-on contract experience at{' '}
                <span className="font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">
                  PT. Aksamedia
                </span>{' '}
                and{' '}
                <span className="font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">
                  Wootix (Looyal)
                </span>
                . Final-year Informatics student at UPN "Veteran" East Java (GPA 3.8/4.00), specializing in Laravel, PHP, Vue.js, Next.js, Go, Node.js, MySQL, PostgreSQL, RESTful APIs, and Docker.
              </p>
            </div>

            <div
              className="grid md:grid-cols-3 gap-8"
              style={{
                transform: `translateY(${scrollY * 0.06}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <div
                className={`group transition-all duration-500 delay-1100 ${isVisible ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{
                  transform: `translateY(${mousePos.y * 5}px) rotateX(${mousePos.y * 3}deg)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <div className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-4 hover:scale-110 cursor-pointer hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800">
                    <span className="text-white text-sm font-bold">BE</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    Backend Engineering
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Building production-ready RESTful APIs and microservices with Laravel, Go (Gin/Fiber), Node.js/Express, Python/FastAPI, MySQL, PostgreSQL, and Redis.
                  </p>
                </div>
              </div>

              <div
                className={`group transition-all duration-500 delay-1200 ${isVisible ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{
                  transform: `translateY(${mousePos.y * -3}px) rotateX(${mousePos.y * -2}deg)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <div className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-4 hover:scale-110 cursor-pointer hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800">
                    <span className="text-white text-sm font-bold">FE</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    Frontend and Mobile
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Architecting responsive web apps with React, Next.js, Vue.js, Svelte, and cross-platform mobile apps with Flutter (BLoC) and Kotlin (Jetpack Compose).
                  </p>
                </div>
              </div>

              <div
                className={`group transition-all duration-500 delay-1300 ${isVisible ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{
                  transform: `translateY(${mousePos.y * 7}px) rotateX(${mousePos.y * 4}deg)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <div className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-4 hover:scale-110 cursor-pointer hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    AI/ML and DevOps
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Integrating AI/ML features (InsightFace, RapidOCR, Hybrid RAG with LLMs), Docker containerization, CI/CD pipelines (Jenkins, GitHub Actions), and Clean Architecture patterns.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-12 text-center transition-all duration-800 delay-1400 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
              style={{
                transform: `translateY(${scrollY * 0.04}px) scale(${1 + Math.abs(mousePos.y) * 0.02})`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <div
                className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl px-8 py-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  transform: `rotate(${mousePos.x * 2}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
              >
                <p className="text-gray-600 italic text-lg">
                  "Available for full-time onsite work in Surabaya"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute -z-10 top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-xl animate-float-bg-1"
          style={{
            transform: `translate(${scrollY * 0.15 + mousePos.x * 20}px, ${scrollY * 0.1 + mousePos.y * 20}px) scale(${1 + Math.abs(mousePos.x) * 0.2})`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute -z-10 bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-2xl animate-float-bg-2"
          style={{
            transform: `translate(${scrollY * -0.1 + mousePos.x * -15}px, ${scrollY * 0.08 + mousePos.y * -15}px) scale(${1 + Math.abs(mousePos.y) * 0.3})`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute -z-10 top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-gray-400/10 to-gray-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.2 + mousePos.x * 25}px, ${scrollY * -0.05 + mousePos.y * 25}px) rotate(${mousePos.x * 45}deg)`,
            transition: 'transform 0.4s ease-out',
          }}
        ></div>
        <div
          className="absolute -z-10 top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-gray-500/15 to-gray-600/15 rounded-full blur-2xl"
          style={{
            transform: `translate(${scrollY * -0.08 + mousePos.x * -20}px, ${scrollY * 0.12 + mousePos.y * -20}px) rotate(${mousePos.y * 60}deg)`,
            transition: 'transform 0.4s ease-out',
          }}
        ></div>
      </div>
    </div>
  )
}

export default AboutMe

"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { VoiceSphere } from "@/components/voice-sphere"
import { ArrowRight, Sparkles, Play, Clock, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25
      heroRef.current.style.setProperty("--mouse-x", `${x}px`)
      heroRef.current.style.setProperty("--mouse-y", `${y}px`)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,127,74,0.15),rgba(255,255,255,0))]" />
        {/* Secondary accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,159,122,0.08)_0%,transparent_70%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,74,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-[15%] w-72 h-72 bg-[#FF7F4A]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-[#FF9F7A]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            
            

            <div className="space-y-6 animate-fade-in-up animation-delay-100">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.08]">
                Radiología{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#FF7F4A] via-[#FF8F5A] to-[#FF9F7A] bg-clip-text text-transparent">
                    Inteligente.
                  </span>
                  <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-[#FF7F4A]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="text-slate-400">Reinventada.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transforma lecturas de radiografías en informes médicos completos{" "}
                <span className="font-semibold text-slate-800">en segundos</span>. Con{" "}
                <span className="inline-flex items-center gap-1 font-bold text-[#FF7F4A]">80.5%</span> de precisión
                y en constante evolución.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-200">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] text-white hover:shadow-2xl hover:shadow-[#FF7F4A]/40 transition-all duration-500 text-base sm:text-lg px-7 sm:px-8 py-6 sm:py-7 h-auto font-semibold rounded-2xl overflow-hidden"
                onClick={() => {
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Únete al Beta Exclusivo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F7A] to-[#FF7F4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base sm:text-lg px-7 sm:px-8 py-6 sm:py-7 h-auto font-semibold border-2 border-slate-200 hover:border-[#FF7F4A]/30 hover:bg-[#FF7F4A]/5 bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-300"
                onClick={() => {
                  document.querySelector("#app-showcase")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="h-5 w-5 mr-2 text-[#FF7F4A] group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-2 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium">Setup en 2 min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium">Sin tarjeta</span>
              </div>
            </div>

            {/* Stats with premium styling 
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-200/60 animate-fade-in-up animation-delay-400">
              {[
                { value: "10k+", label: "Profesionales", sublabel: "activos" },
                { value: "500k+", label: "Consultas", sublabel: "procesadas" },
                { value: "80.5%", label: "Precisión", sublabel: "garantizada" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-[#FF7F4A] group-hover:to-[#FF9F7A] transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
            */}
          </div>

          {/* Right: 3D Visualization with enhanced frame */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full animate-fade-in-up animation-delay-200">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[80%] h-[80%] rounded-full border border-[#FF7F4A]/10 animate-pulse" />
              <div className="absolute w-[90%] h-[90%] rounded-full border border-[#FF7F4A]/5" />
              <div className="absolute w-full h-full rounded-full border border-[#FF7F4A]/[0.02]" />
            </div>
            <VoiceSphere />
            {/* Floating label */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-slate-200/50 flex items-center gap-2 sm:gap-3">
              <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">IA Escuchando...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

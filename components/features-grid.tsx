"use client"

import { Scan, Zap, FileCheck, Stethoscope, Brain, Globe2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Scan,
    title: "Dictado de Lectura Radiográfica",
    description:
      "Convierte tu dictado de lectura radiológica o su transcripción en informes médicos estructurados con IA.",
  },
  {
    icon: Brain,
    title: "IA Contextual",
    description: "Comprende terminología radiológica y detecta hallazgos clínicos relevantes automáticamente.",
  },
  {
    icon: Zap,
    title: "Ultrarrápido",
    description: "Genera informes radiológicos completos en segundos, optimizando tu flujo de trabajo.",
  },

  {
    icon: Globe2,
    title: "Flexible y Adaptable",
    description: "Funciona con audio o texto de lectura radiográfica, adaptándose a tu flujo de trabajo.",
  },
  {
    icon: FileCheck,
    title: "Plantillas Inteligentes",
    description: "Templates adaptativos que aprenden tu estilo de reporte preferido.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7F4A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF9F7A]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4" />
            Características Premium
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">
            Diseñado para la{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] bg-clip-text text-transparent">
                Salud Moderna
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-[#FF7F4A]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Herramientas avanzadas que transforman tu flujo de documentación clínica con la potencia de la IA
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#FF7F4A]/30 transition-all duration-300">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7F4A] to-[#FF9F7A] shadow-lg shadow-[#FF7F4A]/25">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-slate-500 text-sm sm:text-base">
            ¿Necesitas más información?{" "}
            <button 
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#FF7F4A] font-semibold hover:underline underline-offset-4 transition-all"
            >
              Habla con nuestro equipo →
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

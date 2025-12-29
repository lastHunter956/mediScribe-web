"use client"

import { useState } from "react"
import { Smartphone, X, ChevronLeft, ChevronRight } from "lucide-react"

const appScreens = [
  { image: "/images/screen-1.jpeg", title: "Inicio", description: "Dashboard principal" },
  { image: "/images/screen-2.jpeg", title: "Grabación", description: "Captura de audio" },
  { image: "/images/screen-3.jpeg", title: "Procesamiento", description: "IA en acción" },
  { image: "/images/screen-4.jpeg", title: "Historial", description: "Tus consultas" },
  { image: "/images/screen-5.jpeg", title: "Configuración", description: "Personalización" },
  { image: "/images/screen-6.jpeg", title: "Ajustes", description: "Preferencias" },
]

export function AppShowcase() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % appScreens.length : 0))
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + appScreens.length) % appScreens.length : 0))

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background - mismo estilo que otras secciones */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7F4A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF9F7A]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header - consistente con otras secciones */}
        <div className="text-center mb-16 sm:mb-20 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium">
            <Smartphone className="h-4 w-4 text-[#FF7F4A]" />
            App Móvil Nativa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">
            La App en{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] bg-clip-text text-transparent">Acción</span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-[#FF7F4A]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explora cada pantalla de MediScribe y descubre cómo simplifica tus informes radiológicos
          </p>
        </div>

        {/* Phone Mockups Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {appScreens.map((screen, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ maxWidth: '180px' }}>
                {/* Phone outer frame */}
                <div className="relative bg-slate-900 rounded-[2rem] p-2 shadow-xl shadow-slate-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#FF7F4A]/20 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        Ver más
                      </span>
                    </div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full" />
                </div>
              </div>
              
              {/* Label */}
              <div className="mt-4 text-center">
                <p className="text-slate-900 font-medium text-sm">{screen.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-slate-600">Disponible iOS y Android</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#FF7F4A]" />
            <span className="text-slate-600">Interfaz en Español</span>
          </div>
          
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          {/* Navigation */}
          <button 
            className="absolute left-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Image */}
          <div 
            className="relative max-w-sm mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-800 rounded-[2.5rem] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-800 rounded-b-2xl z-10" />
              <div className="overflow-hidden rounded-[2rem] bg-black">
                <img
                  src={appScreens[selectedImage].image}
                  alt={appScreens[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white font-semibold text-lg">{appScreens[selectedImage].title}</p>
              <p className="text-slate-400 text-sm">{appScreens[selectedImage].description}</p>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {appScreens.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === index ? 'bg-[#FF7F4A] w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions/waitlist"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, ArrowRight, Sparkles, Users, Clock, Shield, Star } from "lucide-react"

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    specialty: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await joinWaitlist(formData)

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "¡Bienvenido a MediScribe AI!",
          description: "Te contactaremos pronto con acceso anticipado.",
        })
        setFormData({ name: "", email: "", profession: "", specialty: "" })
      } else {
        toast({
          title: "Error",
          description: result.error || "No se pudo procesar tu solicitud. Inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar el formulario. Verifica tu conexión.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Success celebration with confetti effect
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  const benefits = [
    { icon: Users, text: "Acceso prioritario al beta" },
    { icon: Clock, text: "Soporte personalizado 24/7" },
    { icon: Shield, text: "Descuentos exclusivos" },
  ]

  return (
    <section id="waitlist" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,127,74,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-[2.5rem] bg-white border border-slate-200/80 shadow-2xl shadow-slate-200/50 overflow-hidden">
          {/* Decorative corner gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF7F4A]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF9F7A]/10 to-transparent pointer-events-none" />
          
          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* Success State */}
            {isSuccess ? (
              <div className="text-center py-12 sm:py-16 animate-fade-in-up">
                <div className="inline-flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 mb-6 sm:mb-8 shadow-xl shadow-emerald-500/30">
                  <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">¡Estás en la lista!</h3>
                <p className="text-lg sm:text-xl text-slate-600 max-w-md mx-auto">
                  Te enviaremos un email con instrucciones para acceder al beta muy pronto.
                </p>
                <div className="mt-6 sm:mt-8 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-amber-400" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF7F4A]/10 to-[#FF9F7A]/10 border border-[#FF7F4A]/20 text-[#FF7F4A] text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    Cupos Limitados
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                    Únete al Futuro de la{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] bg-clip-text text-transparent">
                        Radiología con IA
                      </span>
                      <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-[#FF7F4A]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                        <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Sé de los primeros en experimentar la generación de informes radiológicos impulsada por IA. 
                    Acceso exclusivo para profesionales de la salud.
                  </p>
                </div>

                {/* Benefits pills */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
                      <benefit.icon className="h-4 w-4 text-[#FF7F4A]" />
                      <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Dr. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 sm:h-14 px-4 sm:px-5 bg-slate-50/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF7F4A] focus:ring-[#FF7F4A]/20 rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="doctor@hospital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 sm:h-14 px-4 sm:px-5 bg-slate-50/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF7F4A] focus:ring-[#FF7F4A]/20 rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label htmlFor="profession" className="block text-sm font-semibold text-slate-700">
                        Profesión
                      </label>
                      <Input
                        id="profession"
                        type="text"
                        placeholder="Médico, Enfermero, etc."
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        required
                        className="h-12 sm:h-14 px-4 sm:px-5 bg-slate-50/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF7F4A] focus:ring-[#FF7F4A]/20 rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="specialty" className="block text-sm font-semibold text-slate-700">
                        Especialidad
                      </label>
                      <Input
                        id="specialty"
                        type="text"
                        placeholder="Cardiología, Pediatría, etc."
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        required
                        className="h-12 sm:h-14 px-4 sm:px-5 bg-slate-50/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF7F4A] focus:ring-[#FF7F4A]/20 rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 sm:h-16 px-8 text-base sm:text-lg font-semibold bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] text-white hover:shadow-2xl hover:shadow-[#FF7F4A]/30 rounded-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          Solicitar Acceso Exclusivo
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F7A] to-[#FF7F4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>

                  <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed">
                    Al registrarte, aceptas nuestros{" "}
                    <a href="/terminos" className="text-[#FF7F4A] hover:underline underline-offset-2">Términos de Servicio</a>
                    {" "}y{" "}
                    <a href="/privacidad" className="text-[#FF7F4A] hover:underline underline-offset-2">Política de Privacidad</a>.
                    Sin spam, lo prometemos.
                  </p>
                </form>
              </>
            )}
          </div>

          
        </div>
      </div>
    </section>
  )
}

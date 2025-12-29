"use client"

import Link from "next/link"
import { ArrowLeft, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF7F4A] to-[#FF9F7A] flex items-center justify-center shadow-lg shadow-[#FF7F4A]/25">
              <img src="/images/icono-app.png" alt="App Icon" className="h-10 w-10 rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">MediScribe</span>
              <span className="text-[10px] font-medium text-[#FF7F4A] -mt-0.5 tracking-wider uppercase">AI Powered</span>
            </div>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Términos de Servicio
            </h1>
            <p className="text-slate-500">
              Última actualización: 28 de diciembre de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar MediScribe AI (&quot;la Aplicación&quot;, &quot;el Servicio&quot;), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
              </p>
              <p>
                MediScribe AI es desarrollado por emprendedores colombianos comprometidos con la innovación tecnológica en el sector salud. Nos reservamos el derecho de actualizar estos términos en cualquier momento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Descripción del Servicio</h2>
              <p>
                MediScribe AI es una aplicación de pago que utiliza inteligencia artificial para transformar dictados de lectura radiográfica o transcripciones de lectura de radiografía en informes médicos estructurados. El servicio está diseñado exclusivamente para asistir a profesionales de la salud en su labor de documentación radiológica.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">3. Elegibilidad y Registro</h2>
              <p>
                Para utilizar MediScribe AI, usted debe:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ser un profesional de la salud debidamente acreditado</li>
                <li>Proporcionar información veraz durante el registro (nombre, correo electrónico, profesión y especialidad médica)</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>No compartir su cuenta con terceros bajo ninguna circunstancia</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">4. Uso Permitido</h2>
              <p>
                El Servicio debe utilizarse únicamente para fines médicos profesionales legítimos. Está estrictamente prohibido:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar la Aplicación para propósitos no médicos</li>
                <li>Compartir credenciales de acceso con otras personas</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Realizar ingeniería inversa o intentar extraer el código fuente</li>
                <li>Usar el Servicio para actividades ilegales o no éticas</li>
                <li>Sobrecargar intencionalmente los servidores del Servicio</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">5. Exención de Responsabilidad Médica</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                <p className="text-amber-800 font-medium">
                  ⚠️ AVISO IMPORTANTE: Los informes generados por MediScribe AI son asistenciales y de apoyo. El profesional de la salud es el único responsable de revisar, validar y utilizar la información proporcionada por la inteligencia artificial.
                </p>
              </div>
              <p>
                MediScribe AI y sus desarrolladores:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NO garantizan</strong> la precisión absoluta de los informes generados</li>
                <li><strong>NO se hacen responsables</strong> por diagnósticos médicos basados en los informes</li>
                <li><strong>NO asumen responsabilidad</strong> por malas interpretaciones o errores de la IA</li>
                <li><strong>NO reemplazan</strong> el juicio clínico profesional del médico</li>
              </ul>
              <p>
                El uso de la información proporcionada por MediScribe AI es bajo la exclusiva responsabilidad del profesional de la salud que utiliza el Servicio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">6. Propiedad Intelectual</h2>
              <p>
                <strong>Sus contenidos:</strong> Usted conserva todos los derechos de propiedad sobre los dictados de lectura radiográfica, transcripciones e informes que genera utilizando el Servicio.
              </p>
              <p>
                <strong>Nuestro Servicio:</strong> MediScribe AI, incluyendo su software, algoritmos, diseño, marca y contenido, son propiedad exclusiva de sus desarrolladores y están protegidos por las leyes de propiedad intelectual de Colombia y tratados internacionales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">7. Pagos y Suscripción</h2>
              <p>
                MediScribe AI es un servicio de pago. Los términos específicos de precios, planes y métodos de pago serán comunicados durante el proceso de suscripción. Nos reservamos el derecho de modificar los precios con previo aviso.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">8. Suspensión y Terminación</h2>
              <p>
                Nos reservamos el derecho de suspender o terminar su acceso al Servicio, sin previo aviso, en caso de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violación de estos Términos de Servicio</li>
                <li>Uso inadecuado o abusivo de la Aplicación</li>
                <li>Compartir credenciales de acceso con terceros</li>
                <li>Uso del Servicio para fines no médicos</li>
                <li>Actividades que comprometan la seguridad del sistema</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">9. Limitación de Responsabilidad</h2>
              <p>
                En la máxima medida permitida por la ley colombiana, MediScribe AI y sus desarrolladores no serán responsables por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el Servicio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">10. Ley Aplicable</h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes de la República de Colombia. Cualquier disputa será sometida a la jurisdicción de los tribunales colombianos competentes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">11. Contacto</h2>
              <p>
                Para consultas sobre estos Términos de Servicio, puede contactarnos a través de los canales disponibles en nuestra aplicación.
              </p>
            </section>

          </div>

          {/* Back button */}
          <div className="pt-8 border-t border-slate-200">
            <Button asChild className="bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] text-white hover:shadow-lg hover:shadow-[#FF7F4A]/30 transition-all">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

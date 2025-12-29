"use client"

import Link from "next/link"
import { ArrowLeft, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="text-slate-500">
              Última actualización: 28 de diciembre de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">1. Introducción</h2>
              <p>
                En MediScribe AI, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestra aplicación de asistencia radiológica con inteligencia artificial.
              </p>
              <p>
                MediScribe AI es desarrollado por emprendedores colombianos y opera bajo las leyes de protección de datos de la República de Colombia, incluyendo la Ley 1581 de 2012 y sus decretos reglamentarios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Información que Recopilamos</h2>
              <p>
                Recopilamos los siguientes tipos de información:
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 pt-4">2.1 Datos de Registro</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nombre completo:</strong> Para identificación del usuario</li>
                <li><strong>Correo electrónico:</strong> Para comunicaciones y acceso a la cuenta</li>
                <li><strong>Profesión:</strong> Para verificar elegibilidad (solo profesionales de salud)</li>
                <li><strong>Especialidad médica:</strong> Para personalizar la experiencia del servicio</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 pt-4">2.2 Datos de Uso del Servicio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Grabaciones de audio:</strong> Los dictados de lectura radiográfica que usted envía para procesar</li>
                <li><strong>Informes generados:</strong> Los documentos médicos creados por la inteligencia artificial</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">3. Cómo Utilizamos su Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar y mantener el funcionamiento del Servicio</li>
                <li>Procesar sus solicitudes de generación de informes radiológicos</li>
                <li>Mejorar y optimizar la calidad del Servicio</li>
                <li>Comunicarnos con usted sobre actualizaciones o cambios importantes</li>
                <li><strong>Desarrollar modelos de inteligencia artificial propios</strong> utilizando los datos almacenados de forma agregada y anonimizada</li>
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                <p className="text-blue-800">
                  <strong>Nota sobre el entrenamiento de IA:</strong> Las grabaciones de audio y los informes generados pueden ser utilizados para entrenar y mejorar nuestros modelos de inteligencia artificial propios, con el objetivo de ofrecer un mejor servicio en el futuro.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">4. Compartición de Datos con Terceros</h2>
              <p>
                Para proporcionar nuestro servicio, compartimos ciertos datos con proveedores externos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>API de procesamiento de audio:</strong> El audio que usted envía es procesado por un servicio externo especializado en transcripción</li>
                <li><strong>API de modelo de IA comercial:</strong> La información transcrita es procesada por un modelo de inteligencia artificial de terceros para generar los informes</li>
              </ul>
              <p>
                Estos proveedores están sujetos a sus propias políticas de privacidad y están obligados contractualmente a proteger su información.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">5. Almacenamiento y Retención de Datos</h2>
              <p>
                Sus datos son almacenados de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Datos de registro:</strong> Se mantienen mientras su cuenta esté activa</li>
                <li><strong>Grabaciones de audio e informes:</strong> Se almacenan de forma segura en nuestros servidores</li>
                <li><strong>Período de retención:</strong> Los datos se conservan por un mínimo de 30 días. Si los datos son seleccionados para entrenamiento de modelos de IA, pueden conservarse por períodos más largos de forma anonimizada</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">6. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido a datos personales</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Servidores seguros con protocolos de protección actualizados</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">7. Sus Derechos</h2>
              <p>
                De acuerdo con la legislación colombiana de protección de datos, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conocer qué datos personales tenemos sobre usted</li>
                <li>Actualizar y rectificar sus datos personales</li>
                <li>Solicitar prueba de la autorización otorgada</li>
                <li>Revocar la autorización y solicitar la supresión de datos (sujeto a obligaciones legales de retención)</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                <p className="text-amber-800">
                  <strong>Importante:</strong> Debido a la naturaleza del servicio y los requisitos de entrenamiento de modelos de IA, la eliminación completa de datos de audio e informes puede no ser posible una vez que estos han sido incorporados en procesos de entrenamiento de forma anonimizada.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">8. Uso por Profesionales de Salud</h2>
              <p>
                MediScribe AI está diseñado exclusivamente para profesionales de la salud. Al utilizar el servicio, usted declara que:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Es un profesional de la salud debidamente acreditado</li>
                <li>Cuenta con las autorizaciones necesarias para procesar información de pacientes</li>
                <li>Cumple con las regulaciones de privacidad médica aplicables</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">9. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos a través de la aplicación o por correo electrónico. El uso continuado del Servicio después de cualquier modificación constituye su aceptación de la nueva política.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">10. Jurisdicción</h2>
              <p>
                Esta Política de Privacidad se rige por las leyes de la República de Colombia, particularmente la Ley 1581 de 2012 sobre Protección de Datos Personales y sus decretos reglamentarios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 pt-6">11. Contacto</h2>
              <p>
                Para ejercer sus derechos o realizar consultas sobre esta Política de Privacidad, puede contactarnos a través de los canales disponibles en nuestra aplicación.
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

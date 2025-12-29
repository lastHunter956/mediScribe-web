import Link from "next/link"
import { Stethoscope, Twitter, Linkedin, Github, Mail, MapPin, Phone, Heart } from "lucide-react"

const footerLinks = {
  producto: [
    { label: "Características", href: "#features" },
    { label: "Precios", href: "#" },
    { label: "Seguridad", href: "#" },
    { label: "Integraciones", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
    { label: "Cookies", href: "#" },
    { label: "Licencias", href: "#" },
  ],
  recursos: [
    { label: "Documentación", href: "#" },
    { label: "Guías", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Comunidad", href: "#" },
    { label: "Soporte", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF7F4A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF9F7A]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column - Takes 2 cols on lg */}
            <div className="col-span-2 lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3 group inline-flex">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#FF7F4A] to-[#FF9F7A] flex items-center justify-center shadow-lg shadow-[#FF7F4A]/20 group-hover:scale-105 transition-transform">
                  <img src="/images/icono-app.png" alt="App Icon" className="h-11 w-11 rounded-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900 tracking-tight">MediScribe</span>
                  <span className="text-[10px] font-medium text-[#FF7F4A] -mt-0.5 tracking-wider uppercase">AI Powered</span>
                </div>
              </Link>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                Transformando la radiología con inteligencia artificial de última generación. 
                Tu tiempo es valioso, dedica más a tus diagnósticos.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <a href="https://wa.me/573116797664" className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#FF7F4A] transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-[#FF7F4A]/10 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  +57 311 6797664
                </a>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  Colombia
                </div>
              </div>
              {/* Social Links 
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-[#FF7F4A] flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              */}
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Producto</h3>
              <ul className="space-y-3">
                {footerLinks.producto.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-600 hover:text-[#FF7F4A] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-600 hover:text-[#FF7F4A] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-600 hover:text-[#FF7F4A] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-600 hover:text-[#FF7F4A] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/80 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-1">
              © 2025 MediScribe AI. Hecho con{" "}
              <Heart className="h-3.5 w-3.5 text-[#FF7F4A] fill-[#FF7F4A] inline" />{" "}
              para profesionales de la salud.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Todos los sistemas operativos
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-400">v2.1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

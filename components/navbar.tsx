"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Stethoscope, Menu, X, ChevronRight } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#app-showcase", label: "Demo" },
    { href: "#waitlist", label: "Beta" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl">
          <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl border transition-all duration-500 ${
            scrolled 
              ? "bg-white/90 shadow-xl shadow-slate-900/10 border-slate-200/50" 
              : "bg-white/70 shadow-lg shadow-slate-900/5 border-white/40"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img src="/images/icono-app.png" alt="App Icon" className="h-10 w-10 rounded-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">MediScribe</span>
                <span className="text-[10px] font-medium text-[#FF7F4A] -mt-0.5 tracking-wider uppercase">AI Powered</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] text-white font-semibold hover:shadow-xl hover:shadow-[#FF7F4A]/30 transition-all duration-300 px-5 py-2.5 h-auto group"
                onClick={() => {
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Acceso Anticipado
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F7A] to-[#FF7F4A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-200/50 p-4 transition-all duration-300 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  setMobileMenuOpen(false)
                }}
                className="px-4 py-3 text-left text-base font-medium text-slate-700 hover:text-[#FF7F4A] hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-slate-200 my-2" />
            <Button
              className="w-full bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] text-white font-semibold py-3 h-auto"
              onClick={() => {
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
            >
              Acceso Anticipado
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

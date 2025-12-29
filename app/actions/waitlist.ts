"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un correo electrónico válido"),
  profession: z.string().min(2, "La profesión debe tener al menos 2 caracteres"),
  specialty: z.string().min(2, "La especialidad debe tener al menos 2 caracteres"),
})

type WaitlistData = z.infer<typeof waitlistSchema>

export async function joinWaitlist(data: WaitlistData) {
  try {
    // Validar datos
    const validatedData = waitlistSchema.parse(data)

    // Verificar si Supabase está configurado
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('tu-proyecto')) {
      // Modo demo: simular registro exitoso
      console.log("[Demo Mode] Registro simulado:", validatedData)
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return { 
        success: true, 
        data: { 
          id: `demo-${Date.now()}`,
          ...validatedData,
          created_at: new Date().toISOString()
        },
        demo: true
      }
    }

    // Si Supabase está configurado, usar la conexión real
    const { createServerClient } = await import("@supabase/ssr")
    const { cookies } = await import("next/headers")
    
    const cookieStore = await cookies()
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      },
    )

    // Insertar en la tabla waitlist
    const { data: insertedData, error } = await supabase
      .from("waitlist")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          profession: validatedData.profession,
          specialty: validatedData.specialty,
        },
      ])
      .select()
      .single()

    if (error) {
      // Si el error es por email duplicado
      if (error.code === "23505") {
        return { success: false, error: "Este correo electrónico ya está registrado en la lista de espera" }
      }
      console.error("[Supabase] Error al insertar:", error)
      throw error
    }

    console.log("[Supabase] Registro exitoso:", insertedData)
    return { success: true, data: insertedData }

  } catch (error) {
    console.error("[Waitlist] Error:", error)

    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    return { success: false, error: "No se pudo procesar tu solicitud. Por favor intenta nuevamente." }
  }
}

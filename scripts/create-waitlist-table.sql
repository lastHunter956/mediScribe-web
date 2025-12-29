-- Script SQL para crear la tabla de lista de espera en Supabase
-- Esta tabla almacenará los registros de usuarios interesados en acceso anticipado

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  profession TEXT NOT NULL,
  specialty TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para búsquedas rápidas por email
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Índice para ordenar por fecha de registro
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para documentación
COMMENT ON TABLE waitlist IS 'Tabla para almacenar registros de lista de espera de MediScribe';
COMMENT ON COLUMN waitlist.name IS 'Nombre completo del profesional de salud';
COMMENT ON COLUMN waitlist.email IS 'Correo electrónico único del usuario';
COMMENT ON COLUMN waitlist.profession IS 'Profesión médica (ej: Médico, Enfermera)';
COMMENT ON COLUMN waitlist.specialty IS 'Especialidad médica';

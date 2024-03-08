import { createClient } from '@supabase/supabase-js'
//creando conexion con supabase
const supabaseUrl = 'https://qcutecvhlocinsbldrlb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjdXRlY3ZobG9jaW5zYmxkcmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2Mzk0MDQsImV4cCI6MjAyMjIxNTQwNH0.VSuKm4O_DAsWSbmLcA-AXGB-5AsyNLLTmR5gAr3UBKI'


//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)


console.log('conexión', supabase)
import { createClient } from '@supabase/supabase-js';

// Vercel build aşamasında hata almamak için boş değer kontrolü veya yer tutucu (placeholder) kullanıyoruz.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

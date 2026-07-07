const SUPABASE_URL = "COLE_AQUI_SUA_URL_DO_SUPABASE";
const SUPABASE_KEY = "COLE_AQUI_SUA_CHAVE_PUBLIC_ANON";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

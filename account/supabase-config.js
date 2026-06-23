// Veyn — Supabase project credentials.
// The anon key is safe to expose in client-side code; Row Level Security
// policies in the database control what it can actually read/write.

const SUPABASE_URL = 'https://kdknadmgbiebyuqwigfi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtka25hZG1nYmllYnl1cXdpZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxODg3NzUsImV4cCI6MjA5Nzc2NDc3NX0.UD1ErrUJGLugmVAbXWqNuFGgT-Bgr3-Ow8x0HdT50NU';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

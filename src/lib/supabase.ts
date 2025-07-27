// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzpioibyqqypxebzmocw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6cGlvaWJ5cXF5cHhlYnptb2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1ODk1MzksImV4cCI6MjA2OTE2NTUzOX0.wG8iqzqfMwsVRD1RAOoc7fHVTOt8WmnprFVnmnwrZZ4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

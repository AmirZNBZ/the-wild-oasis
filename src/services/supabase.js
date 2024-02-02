import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jxtlrihhiwnpzaecsaeh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dGxyaWhoaXducHphZWNzYWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzkyMDEsImV4cCI6MjAyMjIxNTIwMX0.bHeBRBLa_0KcZ6_MKNaOtqgRe43sMg5x6xSKn4WuW7c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

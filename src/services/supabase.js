import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jxtlrihhiwnpzaecsaeh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4enVwbHF1dHlxeWx6cnhyZWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNzQ5NzQsImV4cCI6MjA0Mzk1MDk3NH0.Moa15doBQiY7oafbDUZA9QuKD0ZrvhIw0jWed2JFf1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

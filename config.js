// ============================================
// SUPABASE CONFIGURATION
// Replace these with your actual Supabase credentials
// ============================================

const SUPABASE_URL = 'https://lyemvikuxyoinjmqouhv.supabase.co'; // e.g., 'https://xxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5ZW12aWt1eHlvaW5qbXFvdWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3OTc3MzAsImV4cCI6MjA4MjM3MzczMH0.y23G0JTji4J3rT3CgAbdN-ufAmGhUrgBZMCXRvK6Tp0'; // Your anon/public key

// Initialize Supabase client
// We'll load the Supabase library from CDN in the HTML or use fetch API directly

// Survey Configuration
const SURVEY_CONFIG = {
    title: 'Student Financial Wellness Survey',
    organization: 'SiLo.Grp',
    project: 'Mastersave',
    version: '1.0',
    surveyUrl: window.location.href
};
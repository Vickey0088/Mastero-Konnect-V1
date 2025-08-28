// Application constants and configuration values

export const APP_CONFIG = {
  name: 'Mastero Konnect',
  tagline: 'Connecting aspirations with guidance',
  description: 'AI-powered mentorship platform connecting mentees with experienced professionals',
} as const;

export const ROUTES = {
  HOME: '/',
  PROFILE_BUILDING: '/profile-building',
  AI_ASSESSMENT: '/ai-assessment',
  FIND_MENTOR: '/find-mentor',
  AI_RECOMMENDATION: '/ai-recommendation',
  MENTOR_PROFILE: '/mentor/:id',
  CONNECT_MENTOR: '/mentor/:id/connect',
  FEEDBACK_REWARDS: '/mentor/:id/feedback',
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    RESET: '/auth/reset',
  },
} as const;

export const API_ENDPOINTS = {
  // Add API endpoints here when backend is integrated
} as const;

export const FORM_VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PROFILE_BIO_LENGTH: 500,
  MAX_SKILLS_COUNT: 10,
} as const;
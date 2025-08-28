// User-related type definitions

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  userId: string;
  education: string;
  skills: string[];
  careerInterests: string[];
  bio?: string;
  experience?: string;
  goals?: string[];
  completedAt?: Date;
}

export interface Mentor {
  id: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  profilePicture?: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  skills: string[];
  experience: string;
  hourlyRate?: number;
  isAvailable: boolean;
}

export interface MentorMatch {
  mentorId: string;
  mentor: Mentor;
  matchScore: number;
  reasons: string[];
}
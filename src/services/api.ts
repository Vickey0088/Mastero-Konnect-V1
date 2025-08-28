// API service layer for external API calls
// TODO: Implement actual API integration when backend is ready

import { ApiResponse, PaginatedResponse } from '@/types/common';
import { Mentor, MentorMatch, UserProfile } from '@/types/user';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Profile API methods
  async createProfile(profile: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> {
    return this.request<UserProfile>('/profiles', {
      method: 'POST',
      body: JSON.stringify(profile),
    });
  }

  async updateProfile(userId: string, profile: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> {
    return this.request<UserProfile>(`/profiles/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profile),
    });
  }

  // Mentor API methods
  async searchMentors(params: {
    query?: string;
    domain?: string;
    experienceLevel?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Mentor>>> {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([, value]) => value !== undefined) as [string, string][]
    ).toString();
    
    return this.request<PaginatedResponse<Mentor>>(`/mentors?${queryString}`);
  }

  async getMentorRecommendations(userId: string): Promise<ApiResponse<MentorMatch[]>> {
    return this.request<MentorMatch[]>(`/users/${userId}/mentor-recommendations`);
  }

  async getMentorById(mentorId: string): Promise<ApiResponse<Mentor>> {
    return this.request<Mentor>(`/mentors/${mentorId}`);
  }
}

export const apiService = new ApiService();
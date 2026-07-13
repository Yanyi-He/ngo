export type Resource = {
  title: string;
  slug: string;
  category: string;
  type: "Checklist" | "Guide" | "Explainer" | "Brief" | "Worksheet";
  summary: string;
  source: string;
  popular: boolean;
};

export type Event = {
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  deadline: string;
};

export type CommunityPost = {
  title: string;
  category: string;
  author: string;
  replies: number;
  status: "published" | "pending review";
  excerpt: string;
};

export type VolunteerProfile = {
  name: string;
  role: string;
  city: string;
  languages: string[];
  focus: string;
  availability: string;
  status: "active" | "onboarding" | "paused";
};

export type MentorProfile = {
  name: string;
  city: string;
  languages: string[];
  areasOfSupport: string[];
  background: string;
  availability: string;
  status: "active" | "matched" | "paused";
};

export type MenteeProfile = {
  name: string;
  city: string;
  preferredLanguage: string;
  needs: string[];
  urgencyLevel: "Low" | "Medium" | "High" | "Time-sensitive";
  status: "submitted" | "reviewing" | "matched";
};

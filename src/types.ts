export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: string;
  members: string[];
}
export interface ClickupTeams {
  teams: ClickupTeam[];
}

export interface ClickupTeam {
  id: string;
  name: string;
  color: string;
  avatar: string;
  members: TeamMember[];
}

export interface TeamMember {
  user: User;
}

export interface User {
  id: number;
  username: string;
  color: string;
  profilePicture: string;
}

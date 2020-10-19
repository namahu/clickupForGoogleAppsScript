export interface TeamMember {
  user: User;
}

export interface User {
  id: number;
  username: string;
  color: string;
  profilePicture: string;
}

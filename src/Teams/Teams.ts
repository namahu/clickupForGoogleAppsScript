import Clickup_ from "Clickup";
import { TeamMember } from "types";
import ClickupRequest_ from "./Request";

export interface ClickupTeam {
  id: string;
  name: string;
  color: string;
  avatar: string;
  members: TeamMember[];
}

export default class Teams {
  clickupClient: Clickup_;
  clickupTeams: ClickupTeam[];

  constructor(clickupClient: Clickup_) {
    this.clickupClient = clickupClient;
  }

  /**
   * The getTeams method retrieves the teams included in this token.
   *
   * @returns Object of the acquired team.
   */
  public getTeams(): ClickupTeam[] {
    return this.clickupClient._request.get_("team");
  }
}

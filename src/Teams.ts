import { ClickupTeam, ClickupTeams } from "types";
import ClickupRequest_ from "./Request";

export default class Teams {
  private readonly apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  /**
   * The getTeams method retrieves the teams included in this token.
   *
   * @returns Object of the acquired team.
   */
  public getTeams(): ClickupTeam[] {
    const request: ClickupRequest_ = new ClickupRequest_("team", this.apiToken);
    const result: ClickupTeams = request.get_();
    return result.teams;
  }
}

import Tasks from "./Tasks/Tasks";
import Teams from "./Teams/Teams";
import ClickupRequest_ from "./Request";

/**
 * Get Clickup object using Personal API token.
 *
 * @param apiToken - Clickup personal API token
 * @returns - CLickup object
 *
 */
const getClickup = (apiToken: string): Clickup => {
  return new Clickup(apiToken);
};

class Clickup {
  readonly apiToken: string;
  readonly baseURL: string = "https://api.clickup.com/api/v2/";
  _request: ClickupRequest_;

  Tasks: Tasks = new Tasks(this);
  Teams: Teams = new Teams(this);

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this._request = new ClickupRequest_(this.baseURL, apiToken);
  }
};

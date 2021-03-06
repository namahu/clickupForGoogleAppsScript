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

export default class Clickup {
  readonly apiToken: string;
  readonly baseURL: string = "https://api.clickup.com/api/v2/";
  _request: ClickupRequest_;

  Tasks: Tasks = new Tasks(this);
  Teams: Teams = new Teams(this);

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this._request = new ClickupRequest_(this.baseURL, apiToken);
  }

  /**
   * Get a specific list of tasks
   *
   * @param listId - ID of list to get task
   * @param archive - Flag to include archived tasks
   */
  // getTasksByListId(listId: string, archived: boolean = false) {
  //   const path: string = `list/${listId}/task?archived=${archived}`;
  //   return this._request.get_(path);
  // }

  // getTaskByTaskId(taskId: string) {
  //   const path: string = `task/${taskId}`;
  //   return this._request.get_(path);
  // }

  // createTaskInList(listId: string, payLoad) {
  //   const path: string = `list/${listId}/task`;
  //   return this._request.post_(payLoad, path);
  // }

  // updateTaskByTaskId(taskId: string, payLoad) {
  //   const path: string = `task/${taskId}`;
  //   return this._request.put_(payLoad, path);
  // }

  // deleteTaskByTaskId(taskId: string) {
  //   const path: string = `task/${taskId}`;
  //   return this._request.delete_(path);
  // }
}

import Teams from "./Teams";
import ClickupRequest_ from "./Request";
/**
 * Get Clickup object using Personal API toke.
 *
 * @param apiToken - Clickup personal API token
 * @returns - CLickup object
 *
 */
export const getClickup = (apiToken: string): Clickup_ => {
  return new Clickup_(apiToken);
};

export default class Clickup_ {
  private readonly apiToken: string;
  private baseURL: string = "https://api.clickup.com/api/v2/";
  private request: ClickupRequest_;

  Teams: Teams = new Teams(this);

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this.request = new ClickupRequest_(this.baseURL, apiToken);
  }

  /**
   * Get a specific list of tasks
   *
   * @param listId - ID of list to get task
   * @param archive - Flag to include archived tasks
   */
  getTasksByListId(listId: string, archived: boolean = false) {
    const path: string = `list/${listId}/task?archived=${archived}`;
    return this.request.get_(path);
  }

  getTaskByTaskId(taskId: string) {
    const path: string = `task/${taskId}`;
    return this.request.get_(path);
  }

  createTaskInList(listId: string, payLoad) {
    const path: string = `list/${listId}/task`;
    return this.request.post_(payLoad, path);
  }

  updateTaskByTaskId(taskId: string, payLoad) {
    const path: string = `task/${taskId}`;
    return this.request.put_(payLoad, path);
  }

  deleteTaskByTaskId(taskId: string) {
    const path: string = `task/${taskId}`;
    return this.request.delete_(path);
  }
}

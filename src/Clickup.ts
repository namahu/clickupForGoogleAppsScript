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

export class Clickup_ {
  readonly apiToken: string;
  Teams: Teams = new Teams(this);

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  baseURL: string = "https://api.clickup.com/api/v2/";

  /**
   * Get a specific list of tasks
   *
   * @param listId - ID of list to get task
   * @param archive - Flag to include archived tasks
   */
  getTasksByListId(listId: string, archived: boolean = false) {
    const path: string = `list/${listId}/task?archived=${archived}`;
    const request = new ClickupRequest_(path, this.apiToken);
    return getTasksByListId_(request);
  }

  getTaskByTaskId(taskId: string) {
    const path: string = `task/${taskId}`;
    const request = new ClickupRequest_(path, this.apiToken);
    return getTaskByTaskId_(request);
  }

  createTaskInList(listId: string, payLoad) {
    const path: string = `list/${listId}/task`;
    const request = new ClickupRequest_(path, this.apiToken);
    return createTaskInList_(request, payLoad);
  }

  updateTaskByTaskId(taskId: string, payLoad) {
    const path: string = `task/${taskId}`;
    const request = new ClickupRequest_(path, this.apiToken);
    return updateTaskByTaskId_(request, payLoad);
  }

  deleteTaskByTaskId(taskId: string) {
    const path: string = `task/${taskId}`;
    const request = new ClickupRequest_(path, this.apiToken);
    return deleteTaskByTaskId_(request);
  }
}

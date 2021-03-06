import Clickup from "Clickup";
import * as TaskInterfaces from "interfaces/TaskInterfaces";
import * as ErrorInterfaces from "interfaces/ErrorInterfaces";

/**
 * The Tasks class wraps Clickup's Tasks API.
 */
export default class Tasks {
  clickupClient: Clickup;
  clickupTask: TaskInterfaces.ClickupTask;

  constructor(clickupClient: Clickup) {
    this.clickupClient = clickupClient;
  }

  /**
   * A method to create a query string from the object passed as an argument.
   *
   * @param queries - The object on which the query ring is based.
   */
  private _createQueryString(queries: TaskInterfaces.TaskSearchQueries) {
    const keys: string[] = Object.keys(queries);
    return keys
      .map((k) => {
        const value = queries[k];
        if (Array.isArray(value)) {
          return value
            .map((v, i) => {
              const paramKey: string = encodeURIComponent(`${k}[${i}]`);
              const paramValue: string = encodeURIComponent(v);
              return `${paramKey}=${paramValue}`;
            })
            .join("&");
        }
        return `${k}=${encodeURIComponent(value)}`;
      })
      .join("&");
  }

  /**
   * The createTaskInList() method creates a new task in the list.
   * 
   * @param listId - The ID of the list that creates the task.
   * @param payload - An object containing information about the task to be created.
   */
  public createTaskInList(listId: number, taskName: string, option?: TaskInterfaces.ClickupTaskPayload): TaskInterfaces.ClickupTask | ErrorInterfaces.TaskError {
    if (!taskName) return { err: "Task name invalid", ECODE: "INPUT_005" };
    let payload: TaskInterfaces.ClickupTaskPayload = {
      name: taskName
    };
    if (option) payload = {...payload, ...option};
    return this.clickupClient._request.post_(payload, `list/${listId}/task/`);
  }

  /**
   * The getTaskByTaskId() method retrieves the task with the ID passed as argument.
   *
   * @param taskId - The ID of the task for which you want to obtain information.
   */
  public getTaskByTaskId(taskId: string): TaskInterfaces.ClickupTask {
    return this.clickupClient._request.get_(`task/${taskId}`);
  }

  /**
   * The getTasksByListId() method gets the tasks 
   * included in the list of IDs passed as arguments.
   *
   * @param listId - The ID of the list from which you want to get the task.
   * @param queries - The conditions for refining the tasks to be acquired.
   */
  public getTasksByListId(
    listId: number,
    queries: TaskInterfaces.TaskSearchQueries = {
      archived: false,
    }
  ): TaskInterfaces.ClickupTasks {
    if (!queries.archived) queries.archived = false;
    const params: string = this._createQueryString(queries);
    return this.clickupClient._request.get_(`list/${listId}/task?${params}`);
  }

  
  public getTeamTasks(
    teamId: number, 
    filterOptions: TaskInterfaces.TaskFilteredQueries = { page: 0 }
  ): TaskInterfaces.ClickupTasks | ErrorInterfaces.TaskError {
    if (!teamId) return { err: "Team id invalid", ECODE: "INPUT_ex0002"};
    if (!filterOptions) filterOptions.page = 0;

    const params: string = this._createQueryString(filterOptions);
    return this.clickupClient._request.get_(`team/${teamId}/task?${params}`);
  }

  public updateTask(taskId: string, payload: TaskInterfaces.ClickupTaskPayload): TaskInterfaces.ClickupTask {
    return this.clickupClient._request.put_(payload, `task/${taskId}`);
  }

  public deleteTaskByTaskId(taskId: string): {} | ErrorInterfaces.TaskError {
    if (!taskId) return { err: "Invalid Task ID", ECODE: "INPUT_ex0001" };
    return this.clickupClient._request.delete_(`task/${taskId}`);
  }
}

import Clickup from "Clickup";
import {
  ClickupTask,
  ClickupTasks,
  TaskSearchQueries,
} from "interfaces/TaskInterfaces";
import ClickupRequest_ from "Request";

export const getTasksByListId_ = (request: ClickupRequest_, path: string) => {
  return request.get_(path);
};

export const getTaskByTaskId_ = (request) => {
  return request.get_();
};

export const createTaskInList_ = (request, payLoad) => {
  return request.post_(payLoad);
};

export const updateTaskByTaskId_ = (request, payLoad) => {
  return request.put_(payLoad);
};

export const deleteTaskByTaskId_ = (request) => {
  return request.delete_();
};

export default class Tasks {
  clickupClient: Clickup;
  clickupTask: ClickupTask;

  constructor(clickupClient: Clickup) {
    this.clickupClient = clickupClient;
  }

  private _createQueryString(queries: TaskSearchQueries) {
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

  public getTaskByTaskId(taskId: string): ClickupTask {
    return this.clickupClient._request.get_(`task/${taskId}`);
  }

  public getTasksByListId(
    listId: number,
    queries: TaskSearchQueries = {
      archived: false,
    }
  ): ClickupTasks {
    if (!queries.archived) queries.archived = false;
    const params: string = this._createQueryString(queries);
    return this.clickupClient._request.get_(`list/${listId}/task?${params}`);
  }
}

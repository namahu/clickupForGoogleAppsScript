import Clickup from "Clickup";
import { ClickupTask } from "interfaces/TaskInterfaces";
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

  public getTaskByTaskId(id: string): ClickupTask {
    return this.clickupClient._request.get_(`task/${id}`);
  }
}

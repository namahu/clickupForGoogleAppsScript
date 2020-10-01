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

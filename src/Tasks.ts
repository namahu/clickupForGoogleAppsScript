const getTasksByListId_ = (request) => {
    return request.get_();
};

const getTaskByTaskId_ = (request) => {
    return request.get_();
};

const createTaskInList_ = (request, payLoad) => {
    return request.post_(payLoad);
};

const updateTaskByTaskId_ = (request, payLoad) => {
    return request.put_(payLoad);
};

const deleteTaskByTaskId_ = (request) => {
    return request.delete_();
};

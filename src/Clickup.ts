const getClickup = (apiToken: string) => {
    return new Clickup_(apiToken);
};

class Clickup_ {
    apiToken: string;

    constructor (apiToken: string) {
        this.apiToken = apiToken;
    }

    baseURL: string = 'https://api.clickup.com/api/v2/';

    createEndpoint_(path: string): string {
        return `${this.baseURL}${path}`;
    }

    /**
     * Get a specific list of tasks
     *
     * @param listId
     * @param archived
     */
    getTasksByListId(listId: string, archived: boolean = false) {
        const path: string = `list/${listId}/task?archived=${archived}`;
        const url: string = this.createEndpoint_(path);
        const request = new ClickupRequest_(url, this.apiToken);
        return getTasksByListId_(request);
    }

    getTaskByTaskId(taskId: string) {
        const path: string = `task/${taskId}`;
        const url: string = this.createEndpoint_(path);
        const request = new ClickupRequest_(url, this.apiToken);
        return getTaskByTaskId_(request);
    }

    createTaskInList(listId: string, payLoad) {
        const path: string = `list/${listId}/task`;
        const url: string = this.createEndpoint_(path);
        const request = new ClickupRequest_(url, this.apiToken);
        return createTaskInList_(request, payLoad);
    }

    updateTaskByTaskId(taskId: string, payLoad) {
        const path: string = `task/${taskId}`;
        const url: string = this.createEndpoint_(path);
        const request = new ClickupRequest_(url, this.apiToken);
        return updateTaskByTaskId_(request, payLoad);
    }

    deleteTaskByTaskId(taskId: string) {
        const path: string = `task/${taskId}`;
        const url: string = this.createEndpoint_(path);
        const request = new ClickupRequest_(url, this.apiToken);
        return deleteTaskByTaskId_(request);
    }
};

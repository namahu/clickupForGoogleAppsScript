import { Clickup } from "Clickup";

export default class Comments {
    clickupClient: Clickup;

    constructor(clickupClient: Clickup) {
        this.clickupClient = clickupClient;
    }

    public getTaskCommentsByTaskId(taskId: string) {
        return this.clickupClient._request.get_(`task/${taskId}/comment/`);
    }
}

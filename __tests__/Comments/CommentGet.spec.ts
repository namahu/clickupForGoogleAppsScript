import getClickup, { Clickup } from "../../src/Clickup";
import * as Comments from "./expectedCommentsValue";
import { createMockFetch } from "../Mock/MockFunction";

const mockFetch = createMockFetch(Comments.comments);
UrlFetchApp.fetch = mockFetch;

const clickup: Clickup = getClickup("test_token");

describe("Testing Comments class", () => {
    it("The getTaskCommentsByTaskId() method can retrieve tha task comments", () => {
        const actual = clickup.Comments.getTaskCommentsByTaskId("taskId");
        const calls: string[][] = mockFetch.mock.calls;
        
        expect(calls[0][0]).toBe(`${clickup.baseURL}task/taskId/comment/`);
        expect(actual).toEqual(Comments.comments);
    });
});

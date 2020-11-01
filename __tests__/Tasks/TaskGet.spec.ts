import Clickup from "../../src/Clickup";
import Request from "../../src/Request";
import { ClickupTask, ClickupTaskPayload, ClickupTasks, TaskFilteredQueries } from "interfaces/TaskInterfaces";
import { TaskError } from "interfaces/ErrorInterfaces";
import MockHTTPResponse from "../Mock/MockHttpResponse";

const clickup: Clickup = new Clickup("test_token");

const expectedValue: ClickupTask = {
  id: "9hx",
  name: "Updated Task Name",
  status: {
    status: "in progress",
    color: "#d3d3d3",
    orderindex: 1,
    type: "custom",
  },
  orderindex: "1.00000000000000000000000000000000",
  date_created: "1567780450202",
  date_updated: "1567780450202",
  date_closed: null,
  creator: {
    id: 183,
    username: "John Doe",
    color: "#827718",
    profilePicture:
      "https://attachments-public.clickup.com/profilePictures/183_abc.jpg",
  },
  assignees: [],
  checklists: [],
  tags: [],
  parent: null,
  priority: null,
  due_date: null,
  start_date: null,
  time_estimate: null,
  time_spent: null,
  list: {
    id: "123",
  },
  folder: {
    id: "456",
  },
  space: {
    id: "789",
  },
  url: "https://app.clickup.com/t/9hx",
};

const createMockFetch = (expectedValue) => {
  return jest.fn(() => {
    return new MockHTTPResponse(expectedValue);
  });
};


describe("Testing the Tasks class", () => {

  it("The getTaskByTaskId() method can retrieve the task", () => {
    const mockFetch = createMockFetch(expectedValue);
    UrlFetchApp.fetch = mockFetch;

    const actual = clickup.Tasks.getTaskByTaskId("test");

    expect(actual).toEqual(expectedValue);
  });

  describe("Testing the getTasksByListId()", () => {
    const mockFetch = createMockFetch({ tasks: [expectedValue] });
    beforeEach(() => {
      UrlFetchApp.fetch = mockFetch;
    });

    it("Tasks can be retrieved from the List's ID.", () => {
    
      const actual = clickup.Tasks.getTasksByListId(111);
      const calls: string[][] = mockFetch.mock.calls;

      expect(calls[0][0]).toBe(`${clickup.baseURL}list/111/task?archived=false`);
      expect(actual).toEqual({ tasks: [expectedValue] });
    });

    it("Tasks can be obtained by specifying conditions along with List ID.", () => {
      const actual = clickup.Tasks.getTasksByListId(111, { statuses: ["In progress"] });
      const params = `${encodeURIComponent("statuses[0]")}=${encodeURIComponent("In progress")}`;

      const calls: string[][] = mockFetch.mock.calls;

      expect(calls[0][0]).toBe(`${clickup.baseURL}list/111/task?${params}&archived=false`);
      expect(actual).toEqual({ tasks: [expectedValue] });
    });
  });

  describe("Testing the getTeamTasks()", () => {
    const mockFetch = createMockFetch({ tasks: [expectedValue] });
    beforeEach(() => {
      UrlFetchApp.fetch = mockFetch;
    });

    it("Get Tasks from Team ID", () => {
      const actual = clickup.Tasks.getTeamTasks(222);

      expect(actual).toEqual({ tasks: [expectedValue]});
    })

    it("Tasks can be retrieved from team IDs by specifying conditions.", () => {
      const filterQueries: TaskFilteredQueries = {
        page: 0,
        subtasks: true
      };
      const actual = clickup.Tasks.getTeamTasks(222, filterQueries);
      const calls: string[][] = mockFetch.mock.calls;

      expect(calls[0][0]).toContain(`${clickup.baseURL}team/222/task`);
      expect(calls[0][0]).toContain("page=0");
      expect(calls[0][0]).toContain("subtasks=true");

      expect(actual).toEqual({ tasks: [expectedValue] });
    });
  });
});

import Clickup from "../../src/Clickup";
import Request from "../../src/Request";
import { ClickupTask, ClickupTaskPayload } from "interfaces/TaskInterfaces";
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
  beforeEach(() => {
    UrlFetchApp.fetch = null;
  });

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

  // describe("Testing the createTaskInList()", () => {
  //   const payload: ClickupTaskPayload = {
  //     "description": "New Task Description",
  //     "assignees": [183],
  //     "tags": ["tag name 1"],
  //     "status": "Open",
  //     "priority": 3,
  //     "due_date": 1508369194377,
  //     "due_date_time": false,
  //     "time_estimate": 8640000,
  //     "start_date": 1567780450202,
  //     "start_date_time": false,
  //     "notify_all": true,
  //     "parent": null,
  //     "links_to": null,
  //     "custom_fields": [
  //         {
  //           "id": "0a52c486-5f05-403b-b4fd-c512ff05131c",
  //           "value": 23
  //         },
  //         {
  //           "id": "03efda77-c7a0-42d3-8afd-fd546353c2f5",
  //           "value": "Text field input"
  //         }
  //     ]
  //   };
  //   it("This method can create tasks in a specified list.", () => {
  //     const mockPost = jest
  //       .spyOn(Request.prototype, "post_")
  //       .mockReturnValue(expectedValue);

  //     expect(mockPost).not.toHaveBeenCalled();
  //     expect(clickup.Tasks.createTaskInList(111, "sample task", payload)).toEqual(expectedValue);
  //     expect(mockPost).toHaveBeenCalled();
  //   });

  //   it("Returns an error if the task name is empty.", () => {
  //     const expectedError: TaskError = {
  //       err: "Task name invalid",
  //       ECODE: "INPUT_005"
  //     };
  //     expect(clickup.Tasks.createTaskInList(111, "")).toEqual(expectedError);
  //   });
  // });

  // describe("Testing the updateTask()", () => {
  //   const mockPut = jest.spyOn(Request.prototype, "put_").mockReturnValue(expectedValue);
  //   const updatePayload: ClickupTaskPayload = { name: "update Task name"};
  //   it("This method can update the task for a given ID.", () => {
  //     const taskId: string = "9hx"
  //     expect(mockPut).not.toHaveBeenCalled();
  //     expect(clickup.Tasks.updateTask(taskId, updatePayload)).toEqual(expectedValue);
  //     expect(mockPut).toHaveBeenCalled();
  //   })

  //   it("If the second argument is absent or empty, an error is returned", () => {

  //   }))
  // })
});

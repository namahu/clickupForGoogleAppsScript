import Clickup from "../src/Clickup";
import Tasks from "../src/Tasks";
import Request from "../src/Request";
import { ClickupTask } from "interfaces/TaskInterfaces";

const clickup: Clickup = new Clickup("aaa");
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

describe("Testing the Tasks class", () => {
  it("The getTaskByTaskId() method can retrieve the task", () => {
    const mockGet = jest
      .spyOn(Request.prototype, "get_")
      .mockReturnValue(expectedValue);

    expect(mockGet).not.toHaveBeenCalled();

    expect(clickup.Tasks.getTaskByTaskId("aaa")).toEqual(expectedValue);
    expect(mockGet).toHaveBeenCalled();
  });

  describe("Testing the getTasksByListId()", () => {
    it("Tasks can be retrieved from the List's ID.", () => {
      const mockGet = jest
        .spyOn(Request.prototype, "get_")
        .mockReturnValue({ tasks: [expectedValue] });

      expect(mockGet).not.toHaveBeenCalled();

      expect(clickup.Tasks.getTasksByListId("listID")).toEqual({
        tasks: [expectedValue],
      });

      expect(mockGet).toHaveBeenCalled();
    });

    it("Tasks can be obtained by specifying conditions along with List ID.", () => {});
  });
});

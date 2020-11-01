import { ClickupTeam } from "../src/Teams/Teams";
import getClickup, { Clickup } from "../src/Clickup";
import Request from "../src/Request";

const clickup = getClickup("aaa");

describe("Testing the Teams class", () => {
  it("Testing the getTeams() method", () => {
    const expectedValue: ClickupTeam[] = [
      {
        id: "1234",
        name: "My ClickUp Team",
        color: "#000000",
        avatar: "https://example.com",
        members: [
          {
            user: {
              id: 123,
              username: "test user",
              color: "#000000",
              profilePicture: "https://example.com",
            },
          },
        ],
      },
    ];
    const mockGet = jest
      .spyOn(Request.prototype, "get_")
      .mockReturnValue(expectedValue);

    expect(mockGet).not.toHaveBeenCalled();

    const teams: ClickupTeam[] = clickup.Teams.getTeams();

    expect(teams.length).toBe(1);
    expect(teams).toEqual(expectedValue);

    expect(mockGet).toHaveBeenCalled();
  });
});

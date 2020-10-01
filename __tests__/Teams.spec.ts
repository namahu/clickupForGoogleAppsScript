import ClickupRequest_ from "../src/Request";
import Teams from "../src/Teams";

jest.mock("../src/Request.ts");
const ClickupRequestMock = ClickupRequest_ as jest.Mock;

describe("Teams", () => {
  it("正しくTeamsを取得できるかテスト", () => {
    ClickupRequestMock.mockImplementationOnce(() => {
      return {};
    });
  });
});

import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restListMock.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should ", async () => {
  await act(async () => {
    render(<Body />);
  });
});

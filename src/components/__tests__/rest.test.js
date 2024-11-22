import { render, screen } from "@testing-library/react";
import ResCard from "../RestCards";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";

test("should ", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText("Hotel Sandarshini");

  expect(name).toBeInTheDocument();
});

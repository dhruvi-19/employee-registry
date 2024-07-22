import { render } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");

describe("App", () => {
  it("Shows employees that match user's search term", () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Buzz Lightyear",
          initials: "BL",
          description: "International movie",
        },
        {
          id: 2,
          name: "Mr. Potato Head",
          initials: "PH",
          description: "International movie icon",
        },
      ],
    });
  });

  render(<App />);
});

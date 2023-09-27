import CoinFlipper from "./CoinFlipper";
import * as cf from "./CoinFlipper";
cf.randomFlip = jest.fn();

import { render, fireEvent } from "@testing-library/react";

it("renders without breaking", function () {
  render(<CoinFlipper />);
});

it("snapshot test - renders the same", function () {
  const { container } = render(<CoinFlipper />);

  expect(container).toMatchSnapshot();
});

it("image url changes with flip", function () {
  cf.randomFlip.mockReturnValueOnce("heads");

  const { container } = render(<CoinFlipper />);
  fireEvent.click(container.querySelector(".flipButton"));

  expect(container.querySelector(".flip-image").getAttribute("src")).toContain(
    "obverse"
  );
});

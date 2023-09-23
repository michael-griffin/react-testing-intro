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

//TODO: ask why mocking only once did not work.
//TODO: ask why innerText didn't work but innerHTML did
it("image url changes with flip", function () {
  cf.randomFlip.mockReturnValue("heads");
  // cf.randomFlip.mockReturnValueOnce("heads");
  // cf.randomFlip.mockReturnValueOnce("heads");
  // random.choice.mockReturnValueOnce("A")

  const { container } = render(<CoinFlipper />);
  const coinImage = container.querySelector(".flipImage");
  expect(coinImage.getAttribute("src")).toEqual(null);

  fireEvent.click(container.querySelector(".flipButton"));

  expect(coinImage.getAttribute("src")).toContain("obverse");
});


it("results string updates properly", function () {
  cf.randomFlip.mockReturnValue("heads");

  const {container } = render(<CoinFlipper />);
  const resultMsg = container.querySelector(".resultMsg");
  expect(resultMsg.innerHTML).toContain("Out of 0");

  fireEvent.click(container.querySelector('.flipButton'));
  expect(resultMsg.innerHTML).toContain("Out of 1");
  expect(resultMsg.innerHTML).toContain("there have been 1 heads");

  fireEvent.click(container.querySelector('.flipButton'));
  expect(resultMsg.innerHTML).toContain("Out of 2");
  expect(resultMsg.innerHTML).toContain("there have been 2 heads");
});

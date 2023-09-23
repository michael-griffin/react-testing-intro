// import CoinFlipper, { randomFlip } from "./CoinFlipper";
import CoinFlipper from "./CoinFlipper";

Math.random = jest.fn();

beforeEach(function (){
  Math.random.mockReturnValue(.6); //heads
});

import { render, fireEvent } from "@testing-library/react";

it("renders without breaking", function () {
  render(<CoinFlipper />);
});

it("snapshot test - renders the same", function () {
  const { container } = render(<CoinFlipper />);

  expect(container).toMatchSnapshot();
});


it("image url changes with flip", function () {
  const { container } = render(<CoinFlipper />);
  const coinImage = container.querySelector(".flipImage");
  expect(coinImage.getAttribute("src")).toEqual(null);

  fireEvent.click(container.querySelector(".flipButton"));

  expect(coinImage.getAttribute("src")).toContain("obverse");
});


it("results string updates properly", function () {
  //TODO: check toHaveTextContent
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

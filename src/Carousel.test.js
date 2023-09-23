import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


test("render without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="don't crash please" />);
})

test("snapshot test for rendering Carousel", function () {
  const {container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="don't crash please"
    />);
  expect(container).toMatchSnapshot();
})

//TODO: Mild refactor: expect after each event being fired.
test("left arrows moves to previous image", function () {
  const {container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="don't crash please"
    />);

  //Should go forwards twice, backwards one.
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-left-circle"));

  const currImage = container.querySelector(".Card-image");
  expect(currImage.getAttribute("src")).toEqual("test2.com");
  expect(currImage.getAttribute("alt")).toEqual("testing image 2");

  fireEvent.click(container.querySelector(".bi-arrow-left-circle"));

  //TODO: don't actually need newImage
  const newImage = container.querySelector(".Card-image");
  expect(newImage.getAttribute("src")).toEqual("test1.com");
  expect(newImage.getAttribute("alt")).toEqual("testing image 1");
})



test("arrows disappear properly", function () {
  const {container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="don't crash please"
    />);

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  expect(leftArrow.style.visibility).toEqual("hidden");
  expect(rightArrow.style.visibility).toEqual("visible");

  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));

  expect(leftArrow.style.visibility).toEqual("visible");
  expect(rightArrow.style.visibility).toEqual("hidden");
})


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

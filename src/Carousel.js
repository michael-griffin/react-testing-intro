import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }
  // function goBackward() {
  //   if (currCardIdx === 0) {
  //     setCurrCardIdx(photos.length - 1);
  //   } else {
  //     setCurrCardIdx(currCardIdx - 1);
  //   }
  // }

  const leftArrow = <i
    className="bi bi-arrow-left-circle"
    onClick={goBackward}
  />;

  const rightArrow = <i
    className="bi bi-arrow-right-circle"
    onClick={goForward}
  />;
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {/* {currCardIdx > 0 && leftArrow} */}
        <i
          className="bi bi-arrow-left-circle"
          style={{ visibility: currCardIdx > 0 ? "visible" : "hidden" }}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          style={{ visibility: (currCardIdx < photos.length - 1) ? "visible" : "hidden" }}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;

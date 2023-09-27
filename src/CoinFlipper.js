import React, { useState } from "react";

const HEADS_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017" +
  "-D_Roosevelt_dime_obverse_transparent.png/912px-2017-D_Roosev" +
  "elt_dime_obverse_transparent.png";
const TAILS_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017" +
  "-D_Roosevelt_dime_reverse_transparent.png/911px-2017-D_Roosev" +
  "elt_dime_reverse_transparent.png";

function randomFlip() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function CoinFlipper() {
  //have some state for our coin
  //const [isHeads, setIsHeads ] = useState();
  //have some state for how many times the coin is flipped
  const [flips, setFlips] = useState([]);

  function handleClick() {
    const nextFlip = randomFlip();
    setFlips(() => {
      return [...flips, nextFlip];
    });
  }

  let imgSource;
  if (flips.length > 0) {
    imgSource = flips[flips.length - 1] === "heads" ? HEADS_URL : TAILS_URL;
  }
  const headsCount = flips.filter((f) => f === "heads").length;

  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <img src={imgSource} style={{ width: "200px" }} className="flip-image" />
      <br></br>
      <button onClick={handleClick} className="flipButton">
        Flip Me!
      </button>
      <p>
        Out of {flips.length}, there have been {headsCount} heads and{" "}
        {flips.length - headsCount} tails.
      </p>
    </div>
  );
}

export default CoinFlipper;

export { randomFlip };

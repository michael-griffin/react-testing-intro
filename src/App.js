import "./App.css";
import Carousel from "./Carousel";
import photos from "./photos.js";
import CoinFlipper from "./CoinFlipper";

/** App component, renders Carousel
 *
 * Props: none
 * State: none
 *
 * App --> Carousel
 */

function App() {
  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <CoinFlipper />
    </div>
  );
}

export default App;

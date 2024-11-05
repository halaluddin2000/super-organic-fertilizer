import { useState } from "react";
import "./BackgroundSlider.css";
import imageSlide from "../../data/Hero/heroData";
function BackgroundSlider() {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  console.log(imageSlide);

  return (
    <div className="container-style">
      {imageSlide.map((item) => {
        <img src={imageSlide.url} alt="" />;
      })}
      <div style={bgImageStyle}></div>
    </div>
  );
}

export default BackgroundSlider;

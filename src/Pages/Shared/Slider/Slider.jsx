import SimpleImageSlider from "react-simple-image-slider";
// import image1 from "../../../assets/Slider/1.jpg"
// import image2 from "../../../assets/Slider/2.jpg"
// import image3 from "../../../assets/Slider/3.jpg"

const images = [
  { url: "src/assets/Slider/1.jpg" },
  { url: "src/assets/Slider/2.jpg" },
  { url: "src/assets/Slider/3.jpg" },

];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1440}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default App;
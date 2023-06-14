import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Allproduct from "./Allproduct";
export default function Homepage() {
  return (
    <>
      <div className="w-[900px] m-auto mb-12 mt-10">
        <AwesomeSlider>
          <div data-src={banner} />
          <div data-src={banner2} />
        </AwesomeSlider>
      </div>

      <Allproduct />
    </>
  );
}

{
  /* <img className=" mt-10 w-8/12 m-auto" src={banner}></img> */
}

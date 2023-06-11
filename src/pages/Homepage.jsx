import banner from "../assets/banner.png";
import Allproduct from "./Allproduct";
export default function Homepage() {
  return (
    <>
      <img className=" mt-10 w-8/12 m-auto" src={banner}></img>
      <Allproduct />
    </>
  );
}

import Navbar from "./Navbar";
import rubber from "../assets/rubber.jpg";
import React from "react";
export default function Rubber5() {
  return (
    <>
      <Navbar title="หมวด : ซีลยาง แผ่นยาง ปะเก็นยาง ท่อยาง และอื่น ๆ" />

      {/* สินค้าย่อย ๆ  */}
      <div className="flex flex-wrap gap-6 rounded-box bg-slate-500 ">
        <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
          <figure>
            <img src={rubber} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end ">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
          <figure>
            <img src={rubber} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end ">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
          <figure>
            <img src={rubber} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end ">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
          <figure>
            <img src={rubber} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end ">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
          <figure>
            <img src={rubber} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end ">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

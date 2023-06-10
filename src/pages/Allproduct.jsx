import Navbar from "../components/Navbar";
import rubber from "../assets/rubber.jpg";
import React from "react";
import { Link } from "react-router-dom";
export default function Allproduct() {
  return (
    <>
      <Navbar title="หมวดหมู่สินค้า" />

      <h2 className="flex justify-center p-11">สินค้าทั้งหมด</h2>
      <div className="flex flex-wrap justify-center gap-6 rounded-box bg-red-300 ">
        <Link to="/rubber1">
          <div className="card card-compact w-56 h-72 bg-base-100 shadow-xl mt-9">
            <figure>
              <img src={rubber} />
            </figure>
            <div className="card-body  hover:bg-slate-200 ">
              <h2>สินค้าที่ 1 ของลูกกลิ้งยาง</h2>

              <div className="card-actions">
                <button>ดูรายละเอียดสินค้า</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

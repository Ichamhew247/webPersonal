// import React, { useState } from "react";
import { useState, useEffect } from "react";
import { getProduct } from "../api/authApi";
export default function Allproduct() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getProduct().then((rs) => {
      console.log(rs.data);
      setproduct(rs.data);
    });
  }, []);
  return (
    <>
      <h2 className="flex justify-center p-11">สินค้าทั้งหมด</h2>

      <div className="Allproduct">
        {product.map((product) => (
          <div className="AllproductId">
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

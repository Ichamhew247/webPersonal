// import React, { useState, useEffect } from "react";
// import { getProduct } from "../api/authApi";

// export default function Allproduct() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     getProduct().then((rs) => {
//       console.log(rs.data);
//       setProduct(rs.data);
//     });
//   }, []);

//   return (
//     <>
//       <h2 className="flex justify-center p-11">สินค้าทั้งหมด</h2>

//       <div className="Allproduct bg-amber-200 h-96">
//         {product.map((product) => (
//           <div
//             className="AllproductId border-solid border-2 border-sky-500 w-72 h-40 p-5 overflow-y-auto"
//             key={product.id}
//           >
//             <h2>ชื่อสินค้า: {product.name}</h2>
//             <h2>ราคาสินค้า: {product.priceProduct} บาท</h2>
//             <h2>
//               รายละเอียดสินค้า:
//               {product.description}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// import React, { useState } from "react";
import { useState, useEffect } from "react";
import { getProduct } from "../api/authApi";
import { TagPrice } from "../icons";
import { Link } from "react-router-dom";

export default function Allproduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((rs) => {
      console.log(rs.data);
      setProduct(rs.data);
    });
  }, []);

  const hdlRemove = (index) => {
    const list = [...product];
    list.splice(index, 1);
    setProduct(list);
  };

  return (
    <>
      <h2 className="flex justify-center p-11">สินค้าทั้งหมด</h2>
      <div className="Allproduct flex flex-wrap">
        {product.map((product, index) => (
          <div
            className="AllproductId bg-yellow-200 m-4 w-56 h-60 rounded-md"
            key={index}
          >
            <h2>ชื่อสินค้า : {product.name}</h2>

            <div className="flex items-center">
              <TagPrice className="fill-zinc-500 w-9" />{" "}
              <h2>{product.priceProduct}</h2>
            </div>

            <h2 className="overflow-auto h-40">{product.description}</h2>
            <div className="flex justify-end gap-1 bg-slate-500">
              <Link
                className="btn btn-circle"
                to={`/editproductpage/${product.id}`}
              >
                Edit
              </Link>
              <h1>{product.id}</h1>
              {product.length !== 1 && (
                <button onClick={() => hdlRemove(index)}>Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

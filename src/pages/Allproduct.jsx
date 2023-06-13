import { useState, useEffect } from "react";
import { getProduct, deleteProductById } from "../api/authApi";
import { ImBin2 } from "react-icons/im";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Allproduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((rs) => {
      console.log(rs.data);
      setProduct(rs.data);
    });
  }, []);

  const hdlRemove = (index, id) => {
    deleteProductById(id).then(() => {
      const list = [...product];
      list.splice(index, 1);
      setProduct(list);
    });
  };

  return (
    <>
      <h2 className="flex justify-center p-14 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
        สินค้าทั้งหมด
      </h2>
      <div className="Allproduct flex flex-wrap bg-slate-500">
        {product.map((product, index) => (
          <div className=" w-[250px] h-[300px] rounded-md p-1 ">
            <div className="bg-white w-[100%] h-[80%] p-3 border-sky-500 ">
              <div className="h-[70%] flex justify-center items-center">
                photo
              </div>
              <p className="font-semibold">ชื่อสินค้า : {product.name}</p>
              <p className="font-semibold">ราคา {product.priceProduct}</p>
              <p className="font-semibold">รายละเอียด {product.description}</p>
            </div>
            <div className="bg-white h-[20%] flex justify-end pr-3 gap-2">
              <button onClick={() => hdlRemove(index, product.id)}>
                <ImBin2 />
              </button>
              <button>
                <Link to={`/editproductpage/${product.id}`}>
                  <BiEdit />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

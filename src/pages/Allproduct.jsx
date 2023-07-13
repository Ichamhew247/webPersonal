import { useState, useEffect } from "react";
import { deleteProductById, searchProduct } from "../api/authApi";
import { ImBin2 } from "react-icons/im";
import { BiEdit } from "react-icons/bi";
import { TbCurrencyBaht } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Allproduct() {
  const [product, setProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      searchProduct({ search: searchValue }).then((rs) => {
        console.log(rs);
        setProduct(rs.data);
      });
    }, 1000);
  }, [searchValue]);

  const hdlChange = (e) => {
    setSearchValue(e.target.value);
  };
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
      <div className="flex justify-end items-center shadow-sm mb-3">
        <div>
          <input
            type="text"
            placeholder="ค้นหาสินค้าที่ต้องการ"
            className="input input-bordered h-8 w-[230px]  "
            onChange={hdlChange}
            value={searchValue}
          />
        </div>
        <div>
          <AiOutlineSearch
            size="1.5rem"
            type="button"
            className="text-blue cursor-pointer text-3xl"
          />
        </div>
      </div>
      <div className="Allproduct flex flex-wrap justify-center gap-10">
        {product.map((product, index) => (
          <div
            className="w-[250px] h-[300px] p-1 mb-3 shadow-lg bg-slate-400"
            key={product.id}
          >
            <div className="bg-white w-[100%] h-[90%] p-3 border-solid border-b-2 border-t-black">
              <div className="h-[60%] flex justify-center items-center bg-slate-200">
                photo
              </div>
              <p className="font-semibold">ชื่อสินค้า: {product.name}</p>
              <div className="flex items-center gap-2">
                {product.priceProduct}
                <TbCurrencyBaht />
              </div>
              <p className="font-semibold">รายละเอียด {product.description}</p>
            </div>

            {user ? (
              <>
                {/* Edit remove */}
                <div className="bg-slate-400 h-[10%] flex justify-end pr-3 gap-2">
                  <button onClick={() => hdlRemove(index, product.id)}>
                    <ImBin2 />
                  </button>
                  <button>
                    <Link to={`/editproductpage/${product.id}`}>
                      <BiEdit />
                    </Link>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>-</div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

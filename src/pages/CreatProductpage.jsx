import { useState } from "react";
import { createProduct } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function CreateProduct() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    priceProduct: "",
    description: "",
  });

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const rs = await createProduct(input);
      toast.success();
      navigate("/allproduct");
    } catch (error) {
      console.log(error);
      toast.error(err.response.data.message);
    }
  };
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="flex justify-center p-14 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
        เพิ่มสินค้า
      </h2>
      <div className="Allproduct flex flex-wrap justify-center">
        <div className="w-[250px] h-auto gap-3 p-1 mb-3 shadow-lg ">
          <div className="bg-white w-[100%] h-[100%] p-3 ">
            <form
              className="flex flex-col items-center gap-4 mt-4"
              onSubmit={hdlSubmit}
            >
              <div className="name">
                <input
                  type="text"
                  placeholder="ชื่อสินค้า"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  value={input.name}
                  onChange={hdlChangeInput}
                />
              </div>
              <div className="priceProduct">
                <input
                  type="text"
                  placeholder="ราคาสินค้า"
                  className="input input-bordered w-full max-w-xs"
                  name="priceProduct"
                  value={input.priceProduct}
                  onChange={hdlChangeInput}
                />
              </div>
              <div className="description">
                <input
                  type="text"
                  placeholder="รายละเอียดสินค้า"
                  className="input input-bordered w-full max-w-xs"
                  name="description"
                  value={input.description}
                  onChange={hdlChangeInput}
                />
              </div>
              <div className="flex justify-center gap-9">
                <button className="btn" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <p className="bg-red-200 w-6/12  p-5 flex justify-center mt-10 font-semibold text-2xl rounded-md">
          เพิ่มสินค้า
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-red-100 w-6/12 flex justify-center  font-semibold text-2xl">
          <form
            className="flex flex-col items-center gap-4 mt-4 "
            onSubmit={hdlSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="ชื่อสินค้า"
                className="input input-bordered w-full max-w-xs"
                name="name"
                value={input.name}
                onChange={hdlChangeInput}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="ราคาสินค้า"
                className="input input-bordered w-full max-w-xs"
                name="priceProduct"
                value={input.priceProduct}
                onChange={hdlChangeInput}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="รายละเอียดสินค้า"
                className="input input-bordered w-full max-w-xs"
                name="description"
                value={input.description}
                onChange={hdlChangeInput}
              />
            </div>
            <div className="flex  justify-center gap-9 ">
              <button className="btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}

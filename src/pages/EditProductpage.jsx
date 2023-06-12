import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../api/authApi";
import { useNavigate, useParams } from "react-router-dom";
export default function EditProductpage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [input, setInput] = useState({
    name: "",
    priceProduct: "",
    description: "",
  });
  useEffect(() => {
    getProductById(id).then((rs) => {
      setInput(rs.data);
      console.log(rs.data);
    });
  }, [id]);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    console.log("FN");
    // // validation
    try {
      const rs = await updateProduct(id, input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="flex justify-center mt-10">แก้ไขสินค้า</h2>
      <div className="bg-zinc-950 w-4/12 flex justify-center mx-auto mt-10">
        <div className="bg-red-60 ">
          <form
            className="flex flex-col items-center gap-4 mt-4 "
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
                className="isnput input-bordered w-full max-w-xs"
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
      </div>
    </>
  );
}

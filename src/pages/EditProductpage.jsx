import { useDropzone } from "react-dropzone";
import { FcAddImage } from "react-icons/fc";
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

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  return (
    <>
      <h2 className="flex justify-center p-14 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
        แก้ไขสินค้า
      </h2>
      <div className="Allproduct flex flex-wrap justify-center">
        <div className="w-[250px] h-auto gap-3 p-1 mb-3 shadow-lg bg-orange-200">
          <div className="bg-white w-[100%] h-[100%] p-3 border-solid border-b-2 border-t-black">
            <form
              className="flex flex-col items-center gap-4 mt-4"
              onSubmit={hdlSubmit}
            >
              {/* ทำภาพ */}
              {/* <div className="flex w-36 h-[70%] justify-center items-center bg-red-600">
                <form action="#">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} accept="image/*" />

                    <FcAddImage className="text-6xl" />
                  </div>
                  <ul>{files}</ul>
                  <button
                    type="submit"
                    className="bg-white rounded-lg w-18 h-6 p-1 text-[9px]"
                  >
                    <p>Uploads</p>
                  </button>
                </form>
              </div> */}
              {/* ทำภาพ */}
              <div className="name">
                <p>ชื่อสินค้า</p>
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
                <p>ราคาสินค้า</p>
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
                <p>รายละเอียดสินค้า</p>
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
    </>
  );
}

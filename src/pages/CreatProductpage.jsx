import { useState } from "react";
import { createProduct } from "../api/authApi";

export default function CreateProduct() {
  const [input, setInput] = useState({
    name: "",
    priceProduct: "",
    description: "",
  });
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    createProduct(input);
  };
  return (
    <>
      <div className="flex justify-center">
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
              <button className="btn" typeof="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// <div className="bg-gray-300 h-56 w-72 flex justify-center items-center">
//             <svg
//               className="w-16"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 {" "}
//                 <path
//                   d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//                 <path
//                   d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//                 <path
//                   d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//               </g>
//             </svg>
//           </div>

// import { useState } from "react";
// import { createProduct } from "../api/authApi";

// export default function CreateProduct() {
//   const [input, setInput] = useState({
//     name: "",
//     priceProduct: "",
//     description: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const hdlChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const hdlSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createProduct(input);
//       setSuccess(true);
//       setInput({
//         name: "",
//         priceProduct: "",
//         description: "",
//       });
//       setError("");
//     } catch (error) {
//       setSuccess(false);
//       setError("เกิดข้อผิดพลาดในการเพิ่มสินค้า");
//     }
//   };

//   return (
//     <>
//       <h2 className="flex justify-center mt-10">เพิ่มสินค้า</h2>
//       <div className="bg-zinc-950 w-4/12 flex justify-center mx-auto mt-10">
//         <div className="bg-red-60 "></div>

//         <form className="flex flex-col items-center gap-4 mt-4 ">
//           {success && (
//             <p className="text-green-500">เพิ่มสินค้าเรียบร้อยแล้ว</p>
//           )}
//           {error && <p className="text-red-500">{error}</p>}
//           <div>
//             <input
//               type="text"
//               placeholder="ชื่อสินค้า"
//               className="input input-bordered w-full max-w-xs"
//               name="name"
//               value={input.name}
//               onChange={hdlChangeInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="ราคาสินค้า"
//               className="input input-bordered w-full max-w-xs"
//               name="priceProduct"
//               value={input.priceProduct}
//               onChange={hdlChangeInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="รายละเอียดสินค้า"
//               className="input input-bordered w-full max-w-xs"
//               name="description"
//               value={input.description}
//               onChange={hdlChangeInput}
//             />
//           </div>
//           <div className="flex justify-center gap-9 ">
//             <button className="btn" type="submit" onSubmit={hdlSubmit}>
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// <div className="bg-gray-300 h-56 w-72 flex justify-center items-center">
//             <svg
//               className="w-16"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 {" "}
//                 <path
//                   d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//                 <path
//                   d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//                 <path
//                   d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
//                   stroke="#adadad"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>{" "}
//               </g>
//             </svg>
//           </div>

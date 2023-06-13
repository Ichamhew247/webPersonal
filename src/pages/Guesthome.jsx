// import React from "react";

// import { ImBin2 } from "react-icons/im";
// import { BiEdit } from "react-icons/bi";

// export default function GuestHome() {
//   return (
//     <>
//       {product.map((product, index) => (
//         <div className="bg-orange-300 w-[250px] h-[300px] rounded-md p-1 ">
//           <div className="bg-red-400 w-[100%] h-[80%] p-3  ">
//             <div className="h-[70%] flex justify-center items-center">
//               photo
//             </div>
//             <p className="font-semibold">ชื่อสินค้า : {product.name}</p>
//             <p className="font-semibold">ราคา {product.priceProduct}</p>
//             <p className="font-semibold">รายละเอียด {product.description}</p>
//           </div>
//           <div className="bg-slate-500 h-[20%] flex justify-end pr-3 gap-2">
//             <button onClick={() => hdlRemove(index, product.id)}>
//               <ImBin2 />
//             </button>
//             <button>
//               <Link
//                 className="btn btn-circle"
//                 to={`/editproductpage/${product.id}`}
//               >
//                 <BiEdit />
//               </Link>
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

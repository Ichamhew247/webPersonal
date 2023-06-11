import { SearchIcon } from "../icons";
export default function Search({ title }) {
  return (
    <>
      <div className="bg-slate-500 flex justify-end ">
        <div className=" gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="ค้นหาสินค้าที่ต้องการ"
              className="input input-bordered w-24 h-10 md:w-auto"
            />
          </div>
        </div>

        <div className="dropdown dropdown-end bg-amber-500">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <SearchIcon className="fill-red-700 " />
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

// import { SearchIcon } from "../icons";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();
//   const [category, setCategory] = useState("หมวดหมู่สินค้า");

//   useEffect(() => {
//     // ตรวจจับการเปลี่ยนเส้นทางและอัพเดตค่าใหม่ในส่วนของ "หมวดหมู่สินค้า"
//     if (location.pathname === "/rubber1") {
//       setCategory("rubber1");
//     } else {
//       setCategory("หมวดหมู่สินค้า");
//     }
//   }, [location]);

//   return (
//     <>
//       <div>
//         <div className="navbar bg-base-100">
//           <div className="flex-1">
//             <a className="btn btn-ghost normal-case text-xl">{category}</a>
//           </div>
//           <div className="flex-none gap-2">
//             <div className="form-control">
//               <input
//                 type="text"
//                 placeholder="ค้นหาสินค้าที่ต้องการ"
//                 className="input input-bordered w-24 md:w-auto"
//               />
//             </div>

//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full">
//                   <SearchIcon className="fill-red-700 " />
//                 </div>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

{
  /* <div className="dropdown">
  <label tabIndex={0} className="btn m-1">
    {title}
  </label>
  <ul
    tabIndex={0}
    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <a>ลูกกลิ้งยาง ลูกกลิ้งเหล็ก</a>
    </li>
    <li>
      <a>ยางดูด</a>
    </li>
    <li>
      <a>ลูกล้อ</a>
    </li>
    <li>
      <a>หมวดพลาสติก อุตสาหากรรม</a>
    </li>
    <li>
      <a>ซีลยาง แผ่นยาง ปะเก็นยาง ท่อยาง และอื่น ๆ</a>
    </li>
    <li>
      <a>ยางดูด</a>
    </li>
    <li>
      <a>สินค้าทั้งหมด</a>
    </li>
  </ul>
</div> */
}

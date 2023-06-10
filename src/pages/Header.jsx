import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="flex  items-end justify-center gap-28 bg-white">
        <div className="flex-col pb-14  ">
          <h1 className=" text-7xl text-blue-700 pb-4 font-semibold">
            Modernrubber and Supply
          </h1>
          <p className="text-rose-500 font-semibold text-2xl">
            02-898-2250, 081-692-2780
          </p>
        </div>
        <img className=" w-64 h-64 " src={Logo} />
      </div>

      <div className=" flex text-white font-semibold bg-amber-300">
        <div className="flex justify-between mx-16 gap-5  bg-yellow-700 w-72 text-lg">
          <Link to="/">หน้าแรก</Link>
          <Link to="/allproduct">สินค้า</Link>
          <Link to="/contact">ติดต่อเรา</Link>{" "}
        </div>
        <div className="flex justify-end flex-1 bg-slate-600">
          <div className="dropdown dropdown-end ">
            <label
              tabIndex={0}
              className="btn m-1 text-blue-900 font-bold text-lg mr-20"
            >
              MENU
            </label>
            <ul
              tabIndex={0}
              className="text-blue-900 font-bold text-lg mr-20 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login">
                  <span>เข้าสู่ระบบ</span>
                </Link>
              </li>
              <li>
                <a>ประวัติการซื้อขาย</a>
              </li>
              <li>
                <a>พิมพ์ใบกำกับภาษี</a>
              </li>
              <li>
                <a>เพิ่มสินค้า</a>

                <button
                  className="btn"
                  onClick={() => window.my_modal_1.showModal()}
                >
                  open modal
                </button>
                <dialog id="my_modal_1" className="modal">
                  <form method="dialog" className="modal-box">
                    <input
                      type="text"
                      placeholder="ชื่อสินค้า"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <input
                      type="text"
                      placeholder="ประเภทของสินค้า"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <input
                      type="text"
                      placeholder="อัพโหลดรูปภาพ"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <input
                      type="text"
                      placeholder="รายละเอียดสินค้า"
                      className="input input-bordered w-full max-w-xs"
                    />

                    <div className="bg-gray-300 h-56 flex justify-center items-center">
                      <svg
                        className="w-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
                            stroke="#adadad"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                            stroke="#adadad"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
                            stroke="#adadad"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>

                    <div className="modal-action">
                      <button className="btn">Close</button>
                    </div>
                  </form>
                </dialog>
              </li>
              <li>
                <a>ออกจากระบบ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

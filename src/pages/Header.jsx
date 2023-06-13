import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import LoginPage from "./LoginPage";
import { useAuth } from "../contexts/AuthContext";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="flex items-end justify-center mt gap-28 bg-white shadow-2xl">
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
      <div className=" flex justify-between font-semibold bg-[#4971F7] ">
        <div className="flex justify-between items-center mx-16 gap-5 text-white w-72 text-lg">
          <Link to="/">หน้าแรก</Link>
          <Link to="/allproduct">สินค้า</Link>
          <Link to="/contact">ติดต่อเรา</Link>{" "}
        </div>

        <div className="flex w-96 gap-6">
          <div className="w-64 flex items-center gap-3">
            {/* <div>
              <input
                type="text"
                placeholder="ค้นหาสินค้าที่ต้องการ"
                className="input input-bordered h-8 w-[230px] "
              />
            </div>
            <div>
              <AiOutlineSearch
                size="1.5rem "
                type="button"
                className="text-white cursor-pointer text-3xl "
              />
            </div> */}
            <div className="dropdown dropdown-end ">
              <button tabIndex={0}>
                <AiOutlineMenuFold
                  type="button"
                  className=" text-white cursor-pointer text-3xl"
                />
              </button>
              <ul
                tabIndex={0}
                className="text-blue-900 font-bold text-lg mr-20 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <a>ประวัติการซื้อขาย</a>
                    </li>
                    <li>
                      <a>พิมพ์ใบกำกับภาษี</a>
                    </li>
                    <li>
                      <Link to="/creatproductpage">
                        <span>เพิ่มสินค้า</span>
                      </Link>
                    </li>
                    <li>
                      <a className="cursor-pointer" onClick={hdlLogout}>
                        ออกจากระบบ
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">
                        <span>เข้าสู่ระบบ</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

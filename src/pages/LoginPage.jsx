import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { login, getMe } from "../api/authApi";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  // const { user, setUser } = useAuth();

  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    //validation
    console.log(input);
    login(input)
      .then((rs) => {
        // console.log(rs.data.token);
        localStorage.setItem("token", rs.data.token);
        let token = localStorage.getItem("token");
        return getMe(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error || err.message);
      });
  };
  return (
    <>
      <main className="p-6 m-auto max-w-[70%] ">
        <h1 className="text-green-600 text-6xl">Login for staff</h1>
        <div>
          <form
            className="bg-zinc-400 gap-6 flex flex-col p-6"
            onSubmit={hdlSubmit}
          >
            <div>
              <h1 className="text-4xl">User</h1>
              <input
                type="text"
                placeholder="พิมพ์ชื่อผู้ใช้งาน"
                className="input input-bordered w-full max-w-xs"
                onChange={hdlChangeInput}
                name="userName"
                value={input.userName}
              />
            </div>
            <div>
              <h1 className="text-4xl">Password</h1>
            </div>
            <input
              type="password"
              placeholder="พิมพ์รหัสผ่าน"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="password"
              value={input.password}
            />
            <Link to="/register">
              <span>Create New account</span>
            </Link>

            <button
              type="submit"
              className="btn btn-outline text-blue-400 w-32 bg-white"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

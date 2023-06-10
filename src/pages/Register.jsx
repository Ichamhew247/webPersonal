import React from "react";
import { useState } from "react";
import { register } from "../api/authApi";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    const { username, firstName, lastName, password, confirmPassword } = input;
    e.preventDefault();

    // Validation
    if (password != confirmPassword)
      return alert("Password not match, recheck");

    register({
      username,
      firstName,
      lastName,
      password,
    })
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <main className="p-6 m-auto max-w-[70%] ">
        <h1 className="text-green-600 text-6xl">Create New Account</h1>

        <form
          className="bg-zinc-400 gap-6 flex flex-col p-6"
          onClick={hdlSubmit}
        >
          <h1 className="text-4xl">User</h1>
          <div>
            <input
              type="text"
              placeholder="userName"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="username"
              value={input.username}
            />
          </div>
          <h1 className="text-4xl">FirstName</h1>
          <div>
            <input
              type="text"
              placeholder="พิมพ์ชื่อ firstName"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="firstName"
              value={input.firstName}
            />
          </div>
          <h1 className="text-4xl">LastName</h1>
          <div>
            <input
              type="text"
              placeholder="พิมพ์ชื่อ LastName"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="lastName"
              value={input.lastName}
            />
          </div>
          <h1 className="text-4xl">Password</h1>
          <div>
            <input
              type="password"
              placeholder="พิมพ์รหัสผ่าน"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="password"
              value={input.password}
            />
          </div>
          <div>
            <div>
              <h1 className="text-4xl">Confirm Password</h1>
            </div>

            <input
              type="password"
              placeholder="พิมพ์ confirmPassword"
              className="input input-bordered w-full max-w-xs"
              onChange={hdlChangeInput}
              name="confirmPassword"
              value={input.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline text-blue-400 w-32 bg-white"

            // name="password"
            // value={input.submit}
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
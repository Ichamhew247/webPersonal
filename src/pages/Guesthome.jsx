// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { UsePostContext } from "../../../hook/UsePostContext";
// import { HiPlus } from "react-icons/hi2";
// import { postApi } from "../../../service/modules/post-api";

// function UploadPageContainer() {
//   const [noPic, setNopic] = useState(true);
//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState("");
//   const chooseFileFn = (e) => {
//     if (e.target.files[0]) {
//       setFileUrl(URL.createObjectURL(e.target.files[0]));
//       setFile(e.target.files[0]);
//       setNopic(false);
//     }
//   };
//   const [postInput, setPost] = useState({ image: "", message: "" });
//   const { postFn } = UsePostContext();
//   const navigate = useNavigate();
//   const handlePostInput = (e) =>
//     setPost({ ...postInput, [e.target.name]: e.target.value });

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (postInput.message) {
//       formData.append("message", postInput.message);
//     }
//     if (file) {
//       console.log(file);
//       formData.append("image", file);
//     }
//     const res = await postApi(formData);
//     navigate("/gallery");
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <input
//         id="uploadPic"
//         type="file"
//         placeholder="You can't touch this"
//         className="hidden"
//         onChange={(e) => chooseFileFn(e)}
//       />

//       <label
//         htmlFor="uploadPic"
//         className="relative h-[500px] aspect-[4/6] bg-slate-200 flex justify-center items-center"
//       >
//         <img
//           className={`absolute w-full h-full object-cover ${
//             noPic ? "hidden" : ""
//           }`}
//           src={fileUrl}
//           alt="upload picture"
//           onError={(e) => setNopic(true)}
//         />
//         <HiPlus className="w-14 h-14 " />
//       </label>
//       <textarea
//         name="message"
//         value={postInput.message}
//         className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
//         onChange={handlePostInput}
//       ></textarea>

//       {/* <div className="flex gap-2">
//         <button className="btn btn-outline">EDIT</button>
//         <button className="btn  btn-outline">SAVE</button>
//       </div> */}
//       <button className="btn btn-outline" onClick={handleUpload}>
//         UPLOAD
//       </button>
//     </div>
//   );
// }

// export default UploadPageContainer;

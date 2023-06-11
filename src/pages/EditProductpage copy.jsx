// import { useEffect, useState } from "react";
// import {
//   getPlaylistById,
//   getChordlistByPlaylistId,
//   updatePlaylist,
//   updateChordlist,
// } from "../api/tantachordApi";

// import { useNavigate, useParams } from "react-router-dom";

// export default function EditPlaylist() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [input, setInput] = useState({
//     musicName: "",
//     youtubeEmbed: "",
//   });

//   // const [inputChordlist, setInputChordlist] = useState([{
//   //     time: '',
//   //     chord: ''
//   // }])

//   useEffect(() => {
//     getPlaylistById(id).then((rs) => {
//       setInput(rs.data);
//       console.log(rs.data);
//     });
//     // getChordlistByPlaylistId(id).then((rs) => {
//     //     setInputChordlist(rs.data);
//     // });
//   }, [id]);

//   const hdlChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   // const hdlChangeChordInput = (e, index) => {
//   //     const { name, value } = e.target
//   //     const list = [...inputChordlist]
//   //     list[index][name] = value
//   //     setInputChordlist(list)
//   // }

//   // const hdlAddclick = () => {
//   //     setInputChordlist([...inputChordlist, { time: '', chord: '' }])
//   // }

//   // const hdlRemove = index => {
//   //     const list = [...inputChordlist]
//   //     list.splice(index, 1)
//   //     setInputChordlist(list)
//   // }

//   const hdlSubmit = (e) => {
//     let token = localStorage.getItem("token");
//     e.preventDefault();
//     // validation
//     updatePlaylist(id, input, token)
//       // .then(updateChordlist(id, inputChordlist))
//       .then((rs) => {
//         console.log(rs);
//         navigate("/");
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={hdlSubmit}>
//         {/* <YouTube/>

//                 <h2></h2> */}

//         <div className="musicName">
//           <input
//             className="w-full p-2.5 border focus:bg-blue-100"
//             type="text"
//             placeholder="musicName"
//             name="musicName"
//             value={input.musicName}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <div className="youtubeEmbed">
//           <input
//             className="w-full p-2.5 border focus:bg-blue-100"
//             type="text"
//             placeholder="youtubeEmbed"
//             name="youtubeEmbed"
//             value={input.youtubeEmbed}
//             onChange={hdlChangeInput}
//           />
//         </div>

//         <div>
//           {inputChordlist.map((x, i) => (
//             <div className="Chordlist" key={i}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="time"
//                   name="time"
//                   value={x.time}
//                   onChange={(e) => hdlChangeChordInput(e, i)}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="chord"
//                   name="chord"
//                   value={x.chord}
//                   onChange={(e) => hdlChangeChordInput(e, i)}
//                 />
//               </div>
//               {inputChordlist.length !== 1 && (
//                 <button onClick={() => hdlRemove(i)}>Remove</button>
//               )}
//               {inputChordlist.length - 1 === i && (
//                 <button onClick={hdlAddclick}>Add Chord</button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div>
//           <button type="submit" className="btn">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

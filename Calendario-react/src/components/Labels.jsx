// import React, { useContext } from "react";
// import GlobalContext from "../context/GlobalContex";

// export default function Labels() {
//   const { Labels, atualizaLabel } = useContext(GlobalContext);
  
//   return (
//     <>
//       <React.Fragment>
//         <p className="text-gray-500 font-bold mt-10">Label</p>
//         {Labels.map(({ label: lbl, verificado }, idx) => (
//           <div key={idx} className="items-center mt-3 block">
//             <label></label>
//             <input
//               onClick={() =>
//                 atualizaLabel({ label: lbl, verificado: !verificado })
//               }
//               type="checkbox"
//               checked={verificado}
//               className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
//             />
//             <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
//           </div>
//         ))}
//       </React.Fragment>
//     </>
//   );
// }

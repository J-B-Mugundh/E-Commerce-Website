// import Footer from "./Footer";
// import {useContext, useEffect, useState} from "react";
// import {ProductsContext} from "./ProductsContext";

// export default function Layout({children}) {
//   const {setSelectedProducts} = useContext(ProductsContext);
//   const [success,setSuccess] = useState(false);
//   useEffect(() => {
//     if (window.location.href.includes('success')) {
//       setSelectedProducts([]);
//       setSuccess(true);
//     }
//   }, []);
//   return (
//     <div>
//       <div className="p-5">
//         {success && (
//           <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
//             Thanks for your order!
//           </div>
//         )}
//         {children}
//       </div>
//       <Footer />
//     </div>
//   );
// }

import Footer from "./Footer";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "./ProductsContext";

export default function Layout({ children }) {
  // making a layout so that the body and footer can be one
  return (
    <div>
      <div className="p-5">  {/* main div */}
        {children}
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}
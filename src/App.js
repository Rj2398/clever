// // 62bca20aeae1a2c3432128b2

// import axios from "axios";
// import React, { useEffect } from "react";

// function App() {
//   const clientId = "745ce0e4a98fe44a0b1e"; // your Clever client ID
//   const redirectUri = "https://clever-login.vercel.app"; // must match Clever dashboard
//   const backendApi = "https://pmsclmsadmin.tgastaging.com/api/get-clever-token";
//   // 👆 change to production API when Laravel is deployed

//   const handleLogin = () => {
//     // Standard OAuth login URL (credential login)
//     window.location.href = `https://clever.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
//   };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get("code");

//     if (code) {
//       console.log("Clever returned code:", code);

//       // Send code to backend using Axios
//       axios
//         .post(backendApi, { code })
//         .then((response) => {
//           console.log("Backend response:", response.data);
//           if (response.data.user) {
//             alert(`Logged in as: ${JSON.stringify(response.data.user.data)}`);
//           }
//         })
//         .catch((err) => console.error("Error sending code to backend:", err));
//     }
//   }, []);

//   // useEffect(() => {
//   //   const params = new URLSearchParams(window.location.search);
//   //   const code = params.get("code");

//   //   if (code) {
//   //     console.log("Clever returned code:", code);

//   //     // Send code to backend
//   //     fetch(backendApi, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ code }),
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         console.log("Backend response:", data);
//   //         if (data.user) {
//   //           alert(`Logged in as: ${JSON.stringify(data.user.data)}`);
//   //         }
//   //       })
//   //       .catch((err) => console.error("Error sending code to backend:", err));
//   //   }
//   // }, []);

//   return (
//     <div className="justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 text-center">
//           Welcome to My App
//         </h1>
//         <p className="text-gray-500 text-center">
//           Sign in with your Clever account to continue
//         </p>
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-200 ease-in-out flex items-center space-x-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="white"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m6-6H6"
//             />
//           </svg>
//           <span>Login with Clever</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
//
// default distinc setted
// import axios from "axios";
// import React, { useEffect } from "react";

// function App() {
//   const clientId = "745ce0e4a98fe44a0b1e";
//   const redirectUri = "https://clever-login.vercel.app";
//   const backendApi = "https://pmsclmsadmin.tgastaging.com/api/get-clever-token";
//   const defaultDistrictId = "62bca20aeae1a2c3432128b2"; // Your district ID

//   const handleLogin = () => {
//     window.location.href = `https://clever.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&district_id=${defaultDistrictId}`;
//   };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get("code");

//     if (code) {
//       axios
//         .post(backendApi, { code })
//         .then((response) => {
//           console.log("Backend response:", response.data);
//           if (response.data.user) {
//             alert(`Logged in as: ${JSON.stringify(response.data.user.data)}`);
//           }
//         })
//         .catch((err) => console.error("Error sending code to backend:", err));
//     }
//   }, []);

//   return (
//     <div className="justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 text-center">
//           Welcome to My App
//         </h1>
//         <p className="text-gray-500 text-center">
//           Sign in with your Clever account to continue
//         </p>
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-200 ease-in-out flex items-center space-x-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="white"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m6-6H6"
//             />
//           </svg>
//           <span>Login with Clever</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
//

// //
// import axios from "axios";
// import React, { useEffect } from "react";

// function App() {
//   const clientId = "745ce0e4a98fe44a0b1e";
//   const redirectUri = "https://clever-login.vercel.app";
//   const backendApi = "https://pmsclmsadmin.tgastaging.com/api/get-clever-token";
//   const defaultDistrictId = "62bca20aeae1a2c3432128b2"; // Your district ID

//   // Function to handle the redirect
//   const redirectToClever = () => {
//     window.location.href = `https://clever.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&district_id=${defaultDistrictId}`;
//   };

//   useEffect(() => {
//     // Check if we're returning from Clever with a code
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get("code");

//     if (code) {
//       // If code exists, process it (existing logic)
//       axios
//         .post(backendApi, { code })
//         .then((response) => {
//           console.log("Backend response:", response.data);
//           if (response.data.user) {
//             alert(`Logged in as: ${JSON.stringify(response.data.user.data)}`);
//           }
//         })
//         .catch((err) => console.error("Error sending code to backend:", err));
//     } else {
//       // If no code, auto-redirect to Clever login
//       redirectToClever();
//     }
//   }, []);

//   // Optional: You can keep the button for manual trigger if needed
//   return (
//     <div className="justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 text-center">
//           Welcome to My App
//         </h1>
//         <p className="text-gray-500 text-center">
//           Redirecting to Clever login...
//         </p>
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//         <p className="text-sm text-gray-500 text-center">
//           If you are not redirected automatically, click below:
//         </p>
//         <button
//           onClick={redirectToClever}
//           className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-200 ease-in-out flex items-center space-x-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="white"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m6-6H6"
//             />
//           </svg>
//           <span>Login with Clever</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import React, { useEffect } from "react";

function App() {
  const clientId = "745ce0e4a98fe44a0b1e";
  const redirectUri = "https://clever-login.vercel.app";
  const backendApi = "https://pmsclmsadmin.tgastaging.com/api/get-clever-token";
  const defaultDistrictId = "62bca20aeae1a2c3432128b2";

  const redirectToClever = () => {
    window.location.href = `https://clever.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&district_id=${defaultDistrictId}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Process the authorization code
      axios
        .post(backendApi, { code })
        .then((response) => {
          console.log("Backend response:", response.data);
          if (response.data.user) {
            alert(`Logged in as: ${JSON.stringify(response.data.user.data)}`);
          }
        })
        .catch((err) => console.error("Error sending code to backend:", err));
    } else {
      // Check if this is the first visit (no previous redirect attempt)
      const hasRedirected = sessionStorage.getItem("clever_redirect_attempt");

      if (!hasRedirected) {
        // Mark that we've attempted redirect and then redirect
        sessionStorage.setItem("clever_redirect_attempt", "true");
        redirectToClever();
      }
      // If hasRedirected exists, do nothing (stay on the page)
    }
  }, []);

  // Clear the redirect flag when component unmounts or on page refresh
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("clever_redirect_attempt");
    };
  }, []);

  return (
    <div className="justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to My App
        </h1>
        <p className="text-gray-500 text-center">
          Sign in with your Clever account to continue
        </p>
        <button
          onClick={redirectToClever}
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-200 ease-in-out flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span>Login with Clever</span>
        </button>
      </div>
    </div>
  );
}

export default App;

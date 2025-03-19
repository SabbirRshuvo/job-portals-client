// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./AuthHooks";
// import { useNavigate } from "react-router";

// const axiosIntance = axios.create({
//   baseURL: "http://localhost:3000/",
//   withCredentials: true,
// });

// const UseAxios = () => {
//   const { userSignOut } = useAuth();
//   const navigate = useNavigate();
//   useEffect(() => {
//     axiosIntance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         if (error.status === 401 || error.status === 403) {
//           userSignOut()
//             .then((res) => {
//               console.log(res.data);
//               navigate("/login");
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, []);
//   return axiosIntance;
// };

// export default UseAxios;

import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./AuthHooks";
import { useNavigate } from "react-router";

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

const UseAxios = () => {
  const navigate = useNavigate();
  const { userSignOut } = useAuth();
  useEffect(() => {
    axiosIntance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          console.log("logout");
          userSignOut()
            .then(() => {
              console.log("logout");
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosIntance;
};

export default UseAxios;

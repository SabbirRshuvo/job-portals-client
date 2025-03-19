/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user", currentUser?.email);
      // if (currentUser?.email) {
      //   const user = { email: currentUser.email };
      //   axios
      //     .post("http://localhost:3000/jwt", user, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //       setLoading(false);
      //     });
      // } else {
      //   axios
      //     .post(
      //       "http://localhost:3000/logout",
      //       {},
      //       {
      //         withCredentials: true,
      //       }
      //     )
      //     .then((res) => {
      //       console.log("logout", res.data);
      //     });
      // }
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:3000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "http://localhost:3000/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }

      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleRegister,
    userSignIn,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

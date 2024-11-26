import React, { useContext } from "react";
import { auth, googleProvider } from "../utils/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserProvider.jsx";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/editior"); // Redirect to Editor after successful login
    } catch (error) {
      console.error("Error during Google Login:", error);
    }
  };

  if (user) {
    navigate("/editior"); // Redirect if already logged in
  }

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center text-white flex-col px-4">
    <div className="w-full max-w-sm h-auto shadow-lg bg-black py-6 px-8 justify-center flex items-center flex-col rounded-xl border border-white">
      {/* Signup Heading */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
        Signup via Google
      </h1>

      {/* Google Authentication Button */}
      <button
        onClick={handleGoogleLogin}
        className="flex justify-center items-center py-3 px-4 sm:px-6 bg-black text-[16px] sm:text-[18px] text-white rounded-3xl gap-3 sm:gap-4 shadow-md border transition-transform transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm focus:ring focus:ring-[#ffffff4d] focus:outline-none"
      >
        <FcGoogle size={24} />
        Authenticate with Google
      </button>
    </div>
  </div>
  );
};

export default Signup;

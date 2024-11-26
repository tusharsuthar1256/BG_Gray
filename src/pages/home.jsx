import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import Foooter from "../Components/Foooter";

const Home = () => {
 
  return (
    <main className="h-auto w-full bg-black text-white dark:bg-white dark:text-black">
      <div className="h-auto w-full px-4 sm:px-8 lg:px-12 flex justify-center items-center flex-col">
        {/* Heading Section */}
        <div className="flex justify-center items-center flex-col mt-[100px] text-center">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[55px] leading-tight flex flex-wrap justify-center">
            Create{" "}
            <span className="bg-white text-black px-3 py-1 rounded-xl font-semibold mx-2 dark:bg-black dark:text-white">
              Black & White BG
            </span>{" "}
            designs easily
          </h1>
          <Link
            to="/signup"
            className="py-3 rounded-3xl px-6 bg-white text-black text-[18px] sm:text-[20px] mt-10 dark:bg-black dark:text-white"
          >
            Get started
          </Link>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[80px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732623785/fk8ncwmkf3rotuzbtls5.png"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732624217/qsj2owleftlpsvily0wp.jpg"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732624146/dcz501e2ynze9d7nag8u.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732623858/v3mmldyq4ftluqe8ordz.png"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732623858/spzqzxqyeasiyesckpqc.png"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732623859/dc2b7rppjiux6xynm76o.png"
              alt=""
              className="rounded-2xl"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732624281/cbqbx4lq9dkxxmhh6lju.jpg"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732624280/ltjbtoadc5amn0kbzmw5.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
<Foooter/>
    </main>
  );
};

export default Home;

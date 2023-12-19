import React from "react";
import image from "../assets/3568984.jpg";

const HomeScreen = () => {
  return (
    <div className="flex flex-row items-center justify-between p-[50px]">
      <div className="space-y-5">
        <h1 className="font-bold text-3xl">Selamat Datang di Sistem Pakar</h1>
        <button className="font-normal text-xl border-black border-2 px-5 py-3 rounded-xl text-center">
          Login
        </button>
      </div>
      <img src={image} alt="" className="h-[300px] w-[300px]" />
    </div>
  );
};
t
export default HomeScreen;

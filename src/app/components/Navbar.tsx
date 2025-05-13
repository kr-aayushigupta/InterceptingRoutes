import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-pink-100 my-10" >
      <ul className="flex  justify-around gap-4 rounded-md">
        <Link href={"/"}>
          <li className="text-2xl text-pink-800 hover:text-pink-600">HOME</li>
        </Link>

        <Link href={"/store"}>
          <li className="text-2xl text-pink-800 hover:text-pink-600">STORE</li>
        </Link>

        <Link href={"/about"}>
          <li className="text-2xl text-pink-800 hover:text-pink-600">ABOUT</li>
        </Link>

        <Link href={"/login"}>
          <li className="text-2xl text-pink-800 hover:text-pink-600"> LOGIN</li>
        </Link>


      </ul>
    </div>
  );
};

export default Navbar;

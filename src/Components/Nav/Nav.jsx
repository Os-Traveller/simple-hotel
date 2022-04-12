import React from "react";
import { Button } from "../UI/UI";

const Nav = () => {
  return (
    <section className="py-5 border-b-2">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-mono text-3xl text-[#3BB77E]">Hotel-Finder</h1>
        <ul className="flex gap-5 text-lg">
          <li>Products</li>
          <li>My Cart</li>
        </ul>
        <div>
          <Button className="bg-[#3BB77E] text-white">Log In</Button>
        </div>
      </nav>
    </section>
  );
};
export default Nav;

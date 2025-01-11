"use client";
import { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link , useLocation } from "react-router-dom";
import { AiOutlineSearch ,AiOutlineMenu } from "react-icons/ai"; // Correct import path
import { FaMoon } from "react-icons/fa"; // Correct import path
import { Button } from "flowbite-react";
export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true); // State for managing collapse

  // Toggle collapse state
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <Navbar className="border-b-2 flex items-center justify-between">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 rounded-lg text-white">
          WanderingWord's
        </span>{" "}
        Blog
      </Link>
      <form className="flex items-center px-1 py-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none hidden lg:inline"
          />
          <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400  hidden lg:inline" />
        </div>
      </form>
      <Button
        className="w-12 h-10 lg:hidden flex items-center justify-center"
        color="gray"
        pill
      >
        <AiOutlineSearch className="text-xl" />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 my-2 h-10 hidden sm:inline-flex items-center justify-center rounded-full"
          color="gray"
          pill
          aria-label="Toggle dark mode"
        >
          <FaMoon className="text-xl" />
        </Button>
        <Link to='/sign-in'>
          <Button className="px-2 py-1 my-1 mx-1 bg-gradient-to-r from-violet-700 to-purple-300 rounded-lg text-white"  >Sign In</Button>
        </Link>
       

      </div>
      <button 
        onClick={toggleCollapse} 
        className="lg:hidden flex items-center justify-center"
        aria-label="Toggle menu" // Accessibility label for screen readers
      >
        <AiOutlineMenu className="text-2xl" />
      </button>

      {/* Navbar links that will collapse on smaller screens */}
      <div className={`${isCollapsed ? "hidden" : "flex"} flex-col lg:flex-row gap-8 list-none`}>
        <Navbar.Link as={Link} to="/">Home</Navbar.Link>
        <Navbar.Link as={Link} to="/about">About</Navbar.Link>
        <Navbar.Link as="a" href="https://rahul87654.github.io/Portfolio-Rahul/" target="_blank">
          Portfolio
        </Navbar.Link>
      </div>


    </Navbar>
  );
}

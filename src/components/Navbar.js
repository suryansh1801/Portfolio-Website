import { ArrowRightIcon } from "@heroicons/react/solid";
import { FcPortraitMode } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-row md:justify-end flex-row items-center"> 
      
      <a href="#about">
      <FcPortraitMode  className="w-10 h-10 ml-5"/>
      </a>
      <a rel="noopener noreferrer external" href="https://github.com/suryansh1801" target="_blank">
        <DiGithubBadge className="w-10 h-10 ml-5"/>
        </a>
        <a rel="noopener noreferrer external" href="https://www.linkedin.com/in/suryansh-sahu-93480320a" target="_blank">
          <FaLinkedin className="w-10 h-10 ml-5"/>
        </a>
        <a rel="noopener noreferrer external" href="https://www.leetcode.com/suryanshsahu9049" target="_blank">
          <SiLeetcode className="w-10 h-10 ml-5"/>
        </a>
        <a href="#about" className="m-auto" ></a>
        <nav className="md:mr-4 md:mr-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 p-5 md:flex-row items-center text-xl ">
          <a href="#projects" className="justify-items-end mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education History
          </a>
        
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Connect with Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        </nav>
      </div>
    </header>
  );
}

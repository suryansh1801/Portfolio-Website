import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey, I'm Suryansh Sahu...
            <br className="hidden lg:inline-block" />I am a Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently pursuing my undergraduate degree in Computer Science Engineering from Indian Institute of Information Technology, Nagpur.
            I am looking for an Internship Opportunity to apply my learnings in real-world applications to gain industrial experience.
            
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/suryansh-sahu-93480320a" target="_blank"
              className="inline-flex text-white bg-green-500 border-rounded-lg py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg">
              Connect with Me on LinkedIn!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-rounded-lg py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-lg text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}

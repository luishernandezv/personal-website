import React from "react";

const Me = () => (
  <section id="me" className="flex justify-center flex-wrap md:py-10">
    <div className="flex flex-wrap justify-center w-full sm:w-4/5 lg:w-3/4">
      <img
        className="max-w-xs lg:max-w-md"
        src="/images/luis.jpg"
        alt="Luis' Illustration"
      />
      <div className="text-center p-5 md:text-left md:p-2 md:mt-20 md:w-2/5">
        <h1 className="text-2xl text-black font-bold md:text-3xl">
          Luis Hernandez
        </h1>
        <h2 className="text-sm text-secondary font-light uppercase md:text-lg">
          Software Engineer
        </h2>
        <p className="text-sm font-light mb-1 md:mt-5 md:text-lg">
          I am a Senior Software Engineer based in Vancouver, Canada.
        </p>
        <p className="text-sm font-light mb-1 md:text-lg">
          I like learning new tech, spending time in nature and taking pictures
          of dogs.
        </p>
      </div>
    </div>
  </section>
);

export default Me;

import React from "react";
import { scrollTo } from "../utils";

const About = () => (
  <section
    id="about"
    className="bg-secondary-light py-10 text-center flex justify-center flex-wrap mt-10"
  >
    <div className="w-full md:w-4/5 lg:w-3/5">
      <h1 className="text-sm text-secondary font-bold uppercase text-center mb-5 md:text-lg">
        About me
      </h1>
      <div className="text-black flex flex-col align-center items-center text-left px-10">
        <p className="text-sm font-light mb-2 md:text-lg">
          I'm a Senior Software Engineer with over 10 years of experience in
          building custom performant and scalable solutions.
        </p>
        <p className="text-sm font-light mb-2 md:text-lg">
          I have worked in several Video Game Studios where I contributed to the
          development of their business by designing and implementing backend
          and frontend systems using modern and up-to-date tools and platforms
          such as Unity3d, NodeJS, NoSQL databases and AWS.
        </p>
        <p className="text-sm font-light mb-2 md:text-lg">
          I'm always trying to improve the experience of both end users and
          developers by thinking through the entire workflow of a feature or
          product.
        </p>
        <p className="text-sm font-light md:text-lg">
          I have experience working on many platforms on distinct parts of the
          product. I have taken roles as UI Developer, (...) and backend
          engineer
        </p>
      </div>
      <div
        className="text-secondary font-thin hover:font-light mt-5"
        onClick={() => scrollTo("#top")}
      >
        Back to top
      </div>
    </div>
  </section>
);

export default About;

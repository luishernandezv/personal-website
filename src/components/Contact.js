import React from "react";
import GithubSVG from "../svgs/github.svg";
import InstagramSVG from "../svgs/instagram.svg";
import LinkedinSVG from "../svgs/linkedin.svg";

const Contact = () => (
  <section id="contact" className="py-10 bg-secondary text-white flex flex-col">
    <h1 className="text-sm  font-bold uppercase text-center mb-5">
      Where to find me
    </h1>
    <div className="flex justify-center">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src={GithubSVG} alt="Github Logo" className="w-8 h-8 " />
      </a>
      <a
        href="https://github.com/luishernandezv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={InstagramSVG}
          alt="Instagram Logo"
          className="w-8 h-8 ml-2 mr-2 "
        />
      </a>
      <a
        href="https://www.linkedin.com/in/lhernand/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedinSVG} alt="Linkedin Logo" className="w-8 h-8" />
      </a>
    </div>
  </section>
);

export default Contact;

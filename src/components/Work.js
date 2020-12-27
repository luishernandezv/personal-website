import React from "react";
import { scrollTo } from "../utils";
import data from "../utils/data.json";
import JobItem from "./JobItem";

const Work = () => (
  <section
    id="work"
    className="px-10 text-center flex justify-center flex-wrap pt-10"
  >
    <div className="w-full md:w-4/5 lg:w-3/5">
      <h1 className="text-sm text-secondary font-bold uppercase text-center mb-5 md:text-lg">
        Where and what I've worked on
      </h1>
      {data.jobs &&
        data.jobs.map((job, index) => <JobItem key={index} job={job} />)}
      <div
        className="text-secondary text-center font-thin hover:font-light mt-5"
        onClick={() => scrollTo("#top")}
      >
        Back to top
      </div>
    </div>
  </section>
);

export default Work;

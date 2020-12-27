import React from "react";

const JobItem = ({ job }) => {
  return (
    <div className="mb-5 flex flex-col text-left md:flex-row">
      <div className="md:w-2/5">
        <h2 className="text-2xl md:text-3xl md:font-bold">{job.company}</h2>
        <h3 className="text-sm text-secondary-dark font-light uppercase mb-3 md:text-lg">
          {job.position}
        </h3>
        <h4 className="text-xs text-secondary-dark font-light uppercase mb-3 md:text-md">
          {job.date}
        </h4>
      </div>
      <div className="md:w-3/5 md:pl-4 md:pt-3">
        {job.descriptions.map((description, index) => (
          <JobDescription key={index} description={description} />
        ))}
      </div>
    </div>
  );
};

const JobDescription = ({ description }) => {
  return <p className="text-sm font-light md:text-xl md:pb-2">{description}</p>;
};

export default JobItem;

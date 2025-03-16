import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    _id,
    title,
    company,
    category,
    jobType,
    applicationDeadline,
    description,
  } = jobs;
  return (
    <div className="container mx-auto py-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{company}</p>

          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            <p className="text-gray-700">{category}</p>
            <p className="ml-2"> {jobType}</p>
          </div>

          <p className="text-gray-700 mb-4">{description}</p>

          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-700">{applicationDeadline}</p>
            </div>
            <Link to={`/applyJob/${_id}`} className="btn btn-info">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

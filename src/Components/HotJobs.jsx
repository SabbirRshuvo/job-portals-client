import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="card  bg-gray-400 shadow-xl p-5 flex flex-col justify-between w-full "
        >
          <div className="flex items-center gap-4">
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h2 className="card-title text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-500">{job.company}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">📍 {job.location}</p>
            <p className="text-gray-600">
              🗂 {job.category} | {job.jobType}
            </p>
            <p className="text-gray-600">
              📅 Deadline: {job.applicationDeadline}
            </p>
            <div className="flex text-gray-600 gap-2"></div>
          </div>
          <p className="mt-4 text-gray-700">{job.description}</p>
          <div className="mt-4 flex justify-center">
            <Link to={`/jobs/${job._id}`} className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotJobs;

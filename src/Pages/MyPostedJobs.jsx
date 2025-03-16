import React, { useEffect, useState } from "react";
import useAuth from "../hooks/AuthHooks";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPostedJobs(data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Deadline</th>
            <th>Application Count</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {postedJobs.map((job, index) => (
            <tr key={job._id} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.applicationCount}</td>
              <td>
                <Link to={`/view_application/${job._id}`}>
                  <button className="btn btn-link">View Application</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;

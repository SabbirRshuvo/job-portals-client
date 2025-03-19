import React, { useEffect, useState } from "react";
import useAuth from "../hooks/AuthHooks";
import UseAxios from "../hooks/UseAxios";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  const axiosSecure = UseAxios();

  useEffect(() => {
    // fetch(`http://localhost:3000/job_application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });
    // axios
    //   .get(`http://localhost:3000/job_application?email=${user.email}`)
    //   .then((res) => {
    //     setJobs(res.data);
    //   });
    axiosSecure.get(`/job_application?email=${user.email}`).then((res) => {
      setJobs(res.data);
    });
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyApplication;

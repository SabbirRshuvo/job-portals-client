import React from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../hooks/AuthHooks";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const id = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    fetch("http://localhost:3000/job_application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application is done",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my_application");
        }
      });
  };
  return (
    <div className="container mx-auto max-w-md p-6 bg-white shadow-lg rounded-lg mt-4">
      <h2 className="text-2xl font-bold text-center mb-4">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* LinkedIn URL */}
        <div>
          <label className="label">
            <span className="text-gray-700 font-medium">LinkedIn Profile</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="https://linkedin.com/in/yourprofile"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label className="label">
            <span className="text-gray-700 font-medium">GitHub Profile</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="https://github.com/yourprofile"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Resume URL */}
        <div>
          <label className="label">
            <span className="text-gray-700 font-medium">Resume Link</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="https://your-resume-link.com"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;

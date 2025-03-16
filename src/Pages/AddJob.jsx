import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/AuthHooks";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  // const [formData, setFormData] = useState({
  //   title: "",
  //   location: "",
  //   jobType: "",
  //   category: "",
  //   applicationDeadline: "",
  //   salaryRange: { min: "", max: "", currency: "" },
  //   description: "",
  //   company: "",
  //   requirements: "",
  //   responsibilities: "",
  //   status: "open",
  //   hrEmail: "",
  //   hrName: "",
  //   companyLogo: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name.includes("salaryRange")) {
  //     const key = name.split(".")[1]; // Extract min, max, or currency
  //     setFormData({
  //       ...formData,
  //       salaryRange: { ...formData.salaryRange, [key]: value },
  //     });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initial = Object.fromEntries(formData.entries());
    console.log(initial);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initial),
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Post a Job</h2>

        {/* Title */}
        <div className="form-control">
          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">Job Type</label>
          <select name="jobType" className="select select-bordered">
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">Category</label>
          <input
            type="text"
            name="category"
            placeholder="E.g., Software, Marketing, HR"
            className="input input-bordered"
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered"
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-3 gap-2">
          <div className="form-control">
            <label className="label">Min Salary</label>
            <input
              type="number"
              name="salaryRange.min"
              placeholder="Min"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">Max Salary</label>
            <input
              type="number"
              name="salaryRange.max"
              placeholder="Max"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">Currency</label>
            <select
              name="salaryRange.currency"
              className="select select-bordered"
            >
              <option value="">Select</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="BDT">BDT (৳)</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">Job Description</label>
          <textarea
            name="description"
            placeholder="Describe the job"
            className="textarea textarea-bordered"
          />
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">Requirements</label>
          <textarea
            name="requirements"
            placeholder="List job requirements"
            className="textarea textarea-bordered"
          />
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">Responsibilities</label>
          <textarea
            name="responsibilities"
            placeholder="List responsibilities"
            className="textarea textarea-bordered"
          />
        </div>

        {/* Status */}
        <div className="form-control">
          <label className="label">Job Status</label>
          <select name="status" className="select select-bordered">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">HR Email</label>
          <input
            type="email"
            name="hrEmail"
            defaultValue={user.email}
            placeholder="HR contact email"
            className="input input-bordered"
          />
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hrName"
            placeholder="HR contact name"
            className="input input-bordered"
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">Company Logo (URL)</label>
          <input
            type="text"
            name="companyLogo"
            placeholder="Logo URL"
            className="input input-bordered"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-full">
            Submit Job Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;

import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import ApplyJob from "../Pages/ApplyJob";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplication from "../Pages/viewApplication";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRouter>
            <JobDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/applyJob/:id",
        element: (
          <PrivateRouter>
            <ApplyJob />
          </PrivateRouter>
        ),
      },
      {
        path: "/my_application",
        element: (
          <PrivateRouter>
            <MyApplication />
          </PrivateRouter>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJob />
          </PrivateRouter>
        ),
      },
      {
        path: "/my_posted_jobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs />
          </PrivateRouter>
        ),
      },
      {
        path: "/view_application/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplication />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/job_application/jobs/${params.job_id}`),
      },
    ],
  },
]);

export default routes;

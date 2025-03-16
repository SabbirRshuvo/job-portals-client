import React from "react";
import { useLoaderData } from "react-router";

const ViewApplication = () => {
  const application = useLoaderData();
  return (
    <div>
      viewApplication
      {application.length}
    </div>
  );
};

export default ViewApplication;

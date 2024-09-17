import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { FaLocationArrow } from 'react-icons/fa';

function JobDetails() {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState([]); // Initialize job state as null
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    axios
      .get(`/api/jobSingleDisplay/${id}`)
      .then((response) => {
        setJob(response.data.job); // Set the job data from the response
        toast.success("Job details loaded successfully!");
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (!job) {
    return <div className="text-center justify-center text-8xl m-2 p-2">No job found.</div>; // Display if no job is found
  }

  return (
    <div className="max-w-4xl pt-28 mx-auto bg-white shadow-md rounded-md p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-gray-600">{job.category}</p>
        </div>
        <div className="text-right">
          <p className="text-blue-600 font-semibold"><span><i className="p-1 fa-solid fa-location-dot"></i></span>{job.location}</p>
          <p className="text-gray- font-bold">{job.jobType}</p>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="font-bold">Description</h3>
        <p className="text-gray-700">{job.description}</p>
        <h3 className="font-bold">Require Skills</h3>
        <p className="text-gray-700">{job.keySkill}</p>
        <h4 className="font-bold mt-2">Country</h4>
        <p className="text-gray-700">{job.country}</p>
      </div>
      <div className="mb-4">
        {job.salaryFrom && job.salaryTo ? (
          <p className="text-gray-800"><i className="fa-solid fa-wallet"></i>
            : ₹{job.salaryFrom} - ₹{job.salaryTo}/Month
          </p>
        ) : (
          <p className="text-gray-800">Fixed Salary: ${job.fixedSalary}</p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <Link
          to={`/apply/${job._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Now
        </Link>
        <Link
          to="/job/getall"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Back to Job Listings
        </Link>
      </div>
    </div>
  );
}


export default JobDetails;

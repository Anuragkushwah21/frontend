import React, { useState } from "react";
import { Link } from "react-router-dom";

function Job() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All");

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleJobTypeChange = (e) => setJobType(e.target.value);

  // Dummy data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Software Engineer",
      company: "ABC Company",
      location: "New York, NY",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "XYZ Corp",
      location: "San Francisco, CA",
      type: "Part-Time",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataTech Inc.",
      location: "Boston, MA",
      type: "Remote",
    },
  ];

  

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (jobType === "All" || job.type === jobType)
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Job Listings
          </h1>

          {/* Search and Filters */}
          <div className="mb-6 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={handleSearchChange}
              className="w-full md:w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={handleLocationChange}
              className="w-full md:w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <select
              value={jobType}
              onChange={handleJobTypeChange}
              className="w-full md:w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="All">All Job Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-700 mb-2">{job.company}</p>
                  <p className="text-gray-700 mb-4">{job.location}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="block mt-4 text-blue-600 hover:underline"
                  >
                    View Job
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-center w-full">No jobs found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;

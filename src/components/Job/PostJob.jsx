import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [country, setCountry] = useState("");
  const [keySkill, setKeySkill] = useState("");
  const [location, setLocation] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/jobInsert", {
        title,
        description,
        category,
        jobType,
        country,
        keySkill,
        location,
        fixedSalary,
        salaryFrom,
        salaryTo,
      });
      toast.success(data.message);
      setTitle("");
      setDescription("");
      setCategory("");
      setCountry("");
      setJobType("");
      setKeySkill("");
      setLocation("");
      setFixedSalary("");
      setSalaryFrom("");
      setSalaryTo("");
      // setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  // if(isAuthorized){
  //   return <Navigate to={"/job/post"}/>
  // }
  return (
    <>
      <div className="bgimg min-h-screen flex items-center justify-center p-6 pt-20">
        <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter Your Title"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                 placeholder="Enter Your Description"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                 placeholder="Enter Your Category"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                 placeholder="Enter Your Country"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Job Type</label>
              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose The Job Type</option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Key Skills</label>
              <input
                type="text"
                name="city"
                value={keySkill}
                onChange={(e) => setKeySkill(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                 placeholder="Enter Your City"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                 placeholder="Enter Your Location"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Fixed Salary
              </label>
              <input
                type="number"
                name="fixedSalary"
                value={fixedSalary}
                onChange={(e) => setFixedSalary(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Enter Your Fixed Salary"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Salary From
              </label>
              <input
                type="number"
                name="salaryFrom"
                value={salaryFrom}
                onChange={(e) => setSalaryFrom(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Enter Your Salary From"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Salary To</label>
              <input
                type="number"
                name="salaryTo"
                value={salaryTo}
                onChange={(e) => setSalaryTo(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Enter Your Salary To"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostJob;

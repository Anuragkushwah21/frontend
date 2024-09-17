import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  // console.log(isAuthorized);

  const handleLogout = async () => {
    try {
      const { data } = await axios.post("/api/logoutuser", {
        isOpen,
      });
      navigate("/login");
      toast.success(data.message);
      setIsAuthorized(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-40 bg-white shadow-md ${
          isAuthorized ? "navbarShow" : "navbarHide"
        } `}
      >
        <div className="container  mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Job Portal</div>
          <div className="lg:hidden">
            <button
              className="text-gray-800 focus:outline-none flex items-center p-2 hover:text-blue-600 transition duration-200 fixed top-4 right-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Toggle between hamburger and close icon */}
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="lg:flex lg:space-x-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/job/getall"}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                >
                  All Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/applications/me"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                >
                  {user && user.role === "JobEmployee"
                    ? "Applications"
                    : "My Applications"}
                </Link>
              </li>
              {user && user.role === "JobEmployee" && (
                <>
                  <li>
                    <Link
                      to="/job/post"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                    >
                      Post New Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job/me"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                    >
                      View Your Jobs
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to={"/about"}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

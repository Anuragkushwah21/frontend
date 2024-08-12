import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  console.log(isAuthorized);

  const handleLogout = async () => {
    try {
      const { data } = await axios.post("/api/logoutuser", {
        isOpen,
      });
      toast.success(data.message);
      setIsAuthorized(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (setIsAuthorized == false) {
    return <Navigate to={"/login"} />;
  } else {
    <Navigate to={"/"} />;
  }
  return (
    <>
      <nav
        className={`bg-white shadow-md ${
          isAuthorized ? "navbarShow" : "navbar"
        } `}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Job Portal</div>
          <div className="block lg:hidden">
            <button className="text-gray-800 focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto `}>
            <ul
              className={`lg:flex lg:space-x-6${
                isOpen ? "show-menu menu" : "menu"
              }`}
            >
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
                  All Job
                </Link>
              </li>

              <li>
                <Link
                  to={"/job/me"}
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  MY Job Application
                </Link>
              </li>
              <li>
                <Link
                  to="/applications/me"
                  className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {user && user.role === "Employer"
                    ? "APPLICATIONS"
                    : "MY APPLICATIONS"}
                </Link>
              </li>
              {user && user.role === "Employer" ? (
                <>
                  <li>
                    <Link to={"/job/post"} onClick={setIsOpen(false)}>
                      Post New Job
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/job/me"}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                    >
                      View Your Job
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}

              <Link
                className="block py-2 px-4 text-gray-800 hover:text-blue-600"
                to={"/job/post"}
                onClick={() => setIsOpen(false)}
              >
                {" "}
                <li className="flex items-center lg:ml-6">View Your Jobs </li>
              </Link>

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
            {/* <div className="flex items-center lg:ml-6"  onClick={() => setIsOpen(false)}>
              <Link to={"/register"}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Sign Up
                </button>
              </Link>
              <Link to={"/login"}  onClick={() => setIsOpen(false)}>
                <button className="ml-4 border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white">
                  Login
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

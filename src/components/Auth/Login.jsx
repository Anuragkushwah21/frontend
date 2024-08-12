import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isAuthorized, setIsAuthorized, user, SetUser } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/verifylogin", {
        email,
        password,
      });
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="bgimg min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block font-bold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

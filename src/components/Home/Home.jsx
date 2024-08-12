import React from "react";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <HeroSection/>
        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Wide Range of Jobs</h3>
                <p className="text-gray-700">
                  Access thousands of job listings from top companies in various
                  industries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
                <p className="text-gray-700">
                  Our user-friendly platform makes it easy to search, apply, and
                  get hired.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Secure</h3>
                <p className="text-gray-700">
                  We prioritize your privacy and security in all our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Example Job Listing */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
                <p className="text-gray-700 mb-4">ABC Company</p>
                <p className="text-gray-700">Location: New York, NY</p>
                <Link
                  to="/jobs/1"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  View Job
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Marketing Manager</h3>
                <p className="text-gray-700 mb-4">XYZ Corp</p>
                <p className="text-gray-700">Location: San Francisco, CA</p>
                <Link
                  to="/jobs/2"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  View Job
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Data Scientist</h3>
                <p className="text-gray-700 mb-4">DataTech Inc.</p>
                <p className="text-gray-700">Location: Boston, MA</p>
                <Link
                  to="/jobs/3"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  View Job
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Career?
            </h2>
            <p className="text-xl mb-6">
              Join now and discover the best job opportunities for you.
            </p>
            <Link
              to="/register"
              className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

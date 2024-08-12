import React from "react";

function AboutUs() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Company
            </h2>
            <p className="text-gray-700">
              Welcome to our job portal! We are dedicated to connecting job
              seekers with top companies. Our platform offers a wide range of
              job opportunities across various industries, providing a seamless
              and efficient job search experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to empower individuals to find their dream jobs and
              advance their careers. We strive to provide a comprehensive and
              user-friendly platform that caters to the needs of both job
              seekers and employers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/path/to/team-member-photo1.jpg"
                  alt="Team Member 1"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-gray-700">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/path/to/team-member-photo2.jpg"
                  alt="Team Member 2"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-gray-700">CTO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/path/to/team-member-photo3.jpg"
                  alt="Team Member 3"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Emily Johnson
                </h3>
                <p className="text-gray-700">COO</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or need assistance, feel free to reach
              out to our support team at
              <a
                href="mailto:support@jobportal.com"
                className="text-blue-600 hover:underline"
              >
                {" "}
                support@jobportal.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <img
                className="w-full h-auto rounded -ml-6"
                src="/images/about-1.jpg"
                alt="Group of people"
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full h-auto rounded mt-6 -ml-6"
                src="/images/about-2.jpg"
                alt="Business meeting"
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full h-auto rounded -mt-6"
                src="/images/about-3.jpg"
                alt="Team celebrating"
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full h-auto rounded"
                src="/images/about-4.jpg"
                alt="Business presentation"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="text-lg mb-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <ul className="list-none mb-6 space-y-3">
            <li className="flex items-start">
              <i className="fa fa-check text-green-600 text-lg mr-3"></i>
              <span>Tempor erat elitr rebum at clita</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-check text-green-600 text-lg mr-3"></i>
              <span>Aliqu diam amet diam et eos</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-check text-green-600 text-lg mr-3"></i>
              <span>Clita duo justo magna dolore erat amet</span>
            </li>
          </ul>
          <a
            className="inline-block bg-green-600 text-white font-medium py-3 px-5 rounded hover:bg-green-700 transition"
            href="#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

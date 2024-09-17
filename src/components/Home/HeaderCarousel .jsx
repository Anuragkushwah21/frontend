import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../Layout/AboutUs";

const HeaderCarousel = () => {
  const slides = [
    {
      img: "/images/carousel-1.jpg",
      title: "Find The Perfect Job That You Deserved",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
    {
      img: "/images/carousel-2.jpg",
      title: "Find The Best Startup Job That Fit You",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <div className="relative w-full pt-[4.5rem]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } relative`}
          >
            <img className="w-full h-auto" src={slide.img} alt="" />
            <div className="absolute inset-0 flex items-center bg-[rgba(43,57,64,0.5)]">
              <div className="container mx-auto px-4">
                <div className="flex justify-start">
                  <div className="w-full lg:w-4/5">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-slideInDown">
                      {slide.title}
                    </h1>
                    <p className="text-lg lg:text-xl font-medium text-white mb-4 pb-2">
                      {slide.description}
                    </p>
                    <div>
                      <Link
                        to=""
                        className="bg-[#00b074] text-xl py-3 px-5 mr-3 inline-block animate-slideInLeft"
                      >
                        Search A Job
                      </Link>
                      <Link
                        to=""
                        className="bg-orange-500 text-xl py-3 px-5 inline-block animate-slideInRight"
                      >
                        Find A Talent
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Section */}
      <div
        className="bg-[#00b074] mb-5 p-[35px] wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-5/6 px-2">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2">
                  <input
                    type="text"
                    className="form-control border-0 w-full p-3"
                    placeholder="Keyword"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <select className="form-select border-0 w-full p-3">
                    <option selected>Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <select className="form-select border-0 w-full p-3">
                    <option selected>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2">
              <button className="bg-black text-white bordered w-full py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Search Section Ends */}

      {/* Category Section */}
      <div className="py-12">
        <div className="container mx-auto overflow-hidden">
          <h1
            className="text-center text-5xl font-semibold mb-20 animate-fadeInUp"
            data-wow-delay="0.1s"
          >
            Explore By Category
          </h1>
          <div className="flex flex-wrap -mx-2">
            {[
              { icon: "fa-mail-bulk", label: "Marketing", delay: "0.1s" },
              { icon: "fa-headset", label: "Customer Service", delay: "0.3s" },
              { icon: "fa-user-tie", label: "Human Resource", delay: "0.5s" },
              { icon: "fa-tasks", label: "Project Management", delay: "0.7s" },
              {
                icon: "fa-chart-line",
                label: "Business Development",
                delay: "0.1s",
              },
              {
                icon: "fa-hands-helping",
                label: "Sales & Communication",
                delay: "0.3s",
              },
              {
                icon: "fa-book-reader",
                label: "Teaching & Education",
                delay: "0.5s",
              },
              {
                icon: "fa-drafting-compass",
                label: "Design & Creative",
                delay: "0.7s",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/4 px-2 mb-8 animate-fadeInUp`}
                data-wow-delay={category.delay}
              >
                <a
                  className="block bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  href="#"
                >
                  <i
                    className={`fa fa-3x ${category.icon} text-[#00b074] mb-4`}
                  ></i>
                  <h6 className="mb-3 font-semibold">{category.label}</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <AboutUs/>
    </>
  );
};

export default HeaderCarousel;

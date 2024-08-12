import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  if(isAuthorized){
    true ? "footerShow" : "footerHide"
  }
  return (
    <>
      <footer
        className={
          isAuthorized ? "footerShow" : "footerShow py-8"
        }
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <h4 className="mb-4">Questions? Call 000-800-919-1694</h4>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Investor Relations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Speed Test
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Media Centre
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Help Centre
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Cookie Preferences
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Legal Notices
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Account
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Ways to Watch
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Corporate Information
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Only on Netflix
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <center>
          <div className="mt-3">
            &copy; All Rights Reserved By PNINFOSYS 2024
          </div>
          <div className="flex justify-center gap-2 m-2">
            <Link className="hover:bg-sky-700" to={"#"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link className="hover:bg-red-700" to={"#"} target="_blank">
              <FaYoutube />
            </Link>
            <Link className="hover:bg-sky-700" to={"#"} target="_blank">
              <FaLinkedin />
            </Link>
            <Link className="hover:bg-red-700" to={"#"} target="_blank">
              <RiInstagramFill />
            </Link>
          </div>
        </center>
      </footer>
    </>
  );
}

export default Footer;

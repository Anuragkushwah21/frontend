import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    true ? "footerShow" : "footerHide";
  }
  return (
    <>
      <footer
        className={
          isAuthorized
            ? "footerShow bg-black text-white pt-12"
            : "footerHide py-8 bg-black text-white"
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
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Investor Relations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Speed Test
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Media Centre
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Help Centre
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Jobs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Cookie Preferences
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Legal Notices
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Ways to Watch
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Corporate Information
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Only on Netflix
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
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

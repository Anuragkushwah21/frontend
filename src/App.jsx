import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Home from "./components/Home/Home";
import Job from "./components/Job/Job";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplication from "./components/Application/MyApplication";
import PostJob from "./components/Job/PostJob";
import MyJob from "./components/Job/MyJob";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Layout/Footer";
import AboutUs from "./components/Layout/AboutUs";
import Contact from "./components/Layout/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/job/getall" element={<Job />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/application/:id" element={<Application />} />
            <Route path="/application/me" element={<MyApplication />} />
            <Route path="/job/post" element={<PostJob />} />
            <Route path="/Job/me" element={<MyJob />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Toaster/>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

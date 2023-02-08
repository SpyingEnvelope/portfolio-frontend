import { Route, Routes, useLocation } from "react-router-dom";

import AboutMe from "../pages/AboutMe/AboutMe";
import ContactPage from "../pages/ContactPage/ContactPage";
import NewProject from "../pages/NewProject/NewProject";

import HomePage from "../pages/HomePage/HomePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import { AnimatePresence } from "framer-motion";
import AdminProjects from "../pages/AdminProjects/AdminProject";
import Login from "../pages/Login/Login";
import EditProject from "../pages/EditProject/EditProject";
import SuccessfulMessage from "../pages/SuccessfulMessage/SuccessfulMessage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<ProjectsPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/contact-me/successful" element={<SuccessfulMessage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/admin/new-project" element={<NewProject />} />
        <Route path="/admin/projects" element={<AdminProjects /> } />
        <Route path="/admin/projects/:id" element={<EditProject />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

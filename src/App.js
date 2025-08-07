import React, {lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Eagerly loaded components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialLinks, { MobileSocialList } from "./components/SocialLinks";
import Skeleton from "./components/Skeleton";

// Lazily loaded components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Resume = lazy(() => import("./components/Resume"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));

import "./styles.css";

export default function App() {
  return (
    <div className="App">
     
        <Router>
           {/* Suspense wraps lazy-loaded components */}
        
          <Suspense fallback={ <Skeleton />}>
          <Header />
          <SocialLinks />

       
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <MobileSocialList />
          <Footer />
        </Router>
      
    </div>
  );
}

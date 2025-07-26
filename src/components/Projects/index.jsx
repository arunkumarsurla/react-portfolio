import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchProjects = () => {
  const API_URL =
    "https://668d0469099db4c579f16037.mockapi.io/api/data/projectData";
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const itemsToShow = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(`Failed to fetch projects: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, itemsToShow);

  return (
    <>
      {isLoading && <div class="spinner" id="loading"></div>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="row">
        {visibleProjects.map((project, index) => (
          <a
            key={index}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-12 col-md-6 col-lg-4 project-link"
          >
            <div className="project-section shadow p-4 m-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <i style={{ fontSize: "20px" }} className="fas fa-folder"></i>
                <h1 className="project-title">{project.projectTitle}</h1>
                <i
                  style={{ fontSize: "20px" }}
                  className="fas fa-external-link-alt"
                ></i>
              </div>

              <p className="project-description">
                {project.projectDescription}
              </p>
              <div className="project-image w-100 h-100">
                <img
                  src={project.projectImg}
                  alt="Project Image"
                  className="project-image w-100 h-100"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="m-0 text-muted">
                  Tech-Stack : {project.techStack}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {projects.length > itemsToShow && (
        <div className="text-center mt-3">
          <button onClick={toggleShow} className="default-button">
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <section
      className="portfolio-section pt-5 pb-5 w-100"
      id="portfolioSection"
    >
      <div className="container">
        <div className="section-title">
          <h2 className="section-heading mt-5 d-flex">
            <span className="custom-font-color">03. </span>Some Things I’ve
            Built
          </h2>
          <p className="description1">
            Here you can find My Projects that represent my Expertise.
          </p>
        </div>

        <marquee scrollAmount={15}>
          <p style={{ color: "#ff4533" }}>
            <b>
              This section is currently undergoing updates. I’m working on new
              projects and enhancements to showcase my expertise in web
              development. Please check back soon for the latest projects!
            </b>
          </p>
        </marquee>

        <FetchProjects />
      </div>
    </section>
  );
};

export default Projects;

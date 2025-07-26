const Home = () => {
  return (
    <>
      <div className="bg-line_decorators">
        <div className="vertical-line is-1" />
        <div className="vertical-line is-2" />
        <div className="vertical-line is-3" />
        <div className="vertical-line is-4" />
        <div className="vertical-line is-5" />
      </div>

      <section
        className="template-section section1 pt-5 pb-5 w-100 w-100"
        id="homeSection"
      >
        <div className="template-section">
          <div className="container">
            <h1 className="mt-5" style={{ color: "#ffffff", fontSize: 16 }}>
              Hi, my name is
            </h1>
            <h2 className="big-heading custom-name">Arun Kumar</h2>
            <h3
              className="big-heading"
              style={{ color: "#FFFFFF", fontSize: 48 }}
            >
              I build things for the Web.
            </h3>
            <p>
              I’m a front-end software engineer dedicated to creating intuitive,
              high-performance web applications. With expertise in HTML, CSS,
              JavaScript, and modern frameworks like React, I bring design
              concepts to life with seamless user experiences. I thrive in
              collaborative environments and continuously explore emerging
              technologies to stay ahead in the ever-evolving digital landscape.
            </p>
            <div style={{ transitionDelay: "500ms" }}>
              <a
                className="buttons box-animation"
                href="#aboutSection"
                rel="noreferrer"
              >
                About Me
              </a>
              <a
                className="buttons box-animation"
                href="#contactSection"
                rel="noreferrer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

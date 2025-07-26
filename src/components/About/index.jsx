import logo from "../../assets/ak_new_logo.ico";

const About = () => {
  return (
    <section className="about-section pt-5 pb-5 w-100 w-100" id="aboutSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 order-1 order-md-2 mb-2">
            <div className="text-center">
              <img src={logo} alt="Logo" className="about-section-img" />
            </div>
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1 m-auto">
            <h2 className="section-heading mt-5 d-flex">
              <span className="custom-font-color">01. </span>
              About Arun
            </h2>
            <h3 className="about-section-para">
              Hello! I'm <span style={{ color: "#ff4533" }}>ArunKumar</span>, a
              Software Engineer from Andhra Pradesh, India. I'm passionate about
              #Technology, Science, and everything related to them.
            </h3>
            <p className="description1">
              My journey into web development commenced in 2020, and since then,
              I've honed my expertise in HTML, CSS, and JavaScript, proficiently
              translating design concepts into functional and visually
              captivating websites and applications.
            </p>
            <p className="description1">
              I currently work at{" "}
              <span style={{ color: "#ff4533" }}>Phenom</span>, a global HR tech
              innovator, where I focus on building and optimizing digital
              solutions that enhance the hiring process. My work revolves around
              crafting engaging products and leading innovative projects in the
              realm of web development, while I continue to expand my skills and
              adapt to new technologies.
            </p>
            <p className="description1">
              When I’m not immersed in coding, you’ll find me enjoying quality
              time with friends, playing chess, or exploring the outdoors
              through hiking, biking, or relaxing walks in nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

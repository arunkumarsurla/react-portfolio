const Resume = () => {
  return (
    <>
      <section className="resume-section pt-5 pb-5" id="resumeSection">
        <div className="container">
          <div className="section-title">
            <h2 className="section-heading mt-5 d-flex">
              <span className="custom-font-color">02. </span>Resume
            </h2>
            <p className="description1">
              In this section, you'll find information about my educational
              background, professional experience, and the skills that
              demonstrate my expertise.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>ArunKumar</h4>
                <p>Front-End Developer</p>
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot" /> Andhra Pradesh,
                    India
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" /> 91XXXXXX85
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />{" "}
                    arunkumarsurla1@gmail.com
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>
                  Bachelor of Technology in Electrical and Electronics
                  Engineering
                </h4>
                <h5>2018 - 2021</h5>
                <p>
                  Helapuri Institute Of Technology &amp; Science, Eluru, Andhra
                  Pradesh, India
                </p>
                <p>
                  B.Tech in Electrical and Electronics Engineering with an
                  aggregate of <b>7.2</b>
                  CGPA.
                </p>
              </div>
              <div className="resume-item">
                <h4>
                  State Board Of Technical Education in Electrical and
                  Electronics Engineering
                </h4>
                <h5>2015 - 2018</h5>
                <p>
                  Smt.B.Seetha Polytechnic, Bhimavarm, Andhra Pradesh, India
                </p>
                <p>
                  Electrical and Electronics Engineering with an aggregate of{" "}
                  <b>74</b>
                  percentage.
                </p>
              </div>
              <div className="resume-item">
                <h4>State Board of Secondary Education </h4>
                <h5>2015</h5>
                <p>
                  Rushi Valley Public School, Narsipatnam,Visakhapatnam, Andhra
                  Pradesh, India
                </p>
                <p>
                  Passed with an aggregate of <b>8.7</b> CGPA.
                </p>
              </div>
              <h3 className="resume-title">Certifications</h3>
              <div className="resume-item">
                <h4>Nxtwave Disruptive Technologies</h4>
                <h5>2020</h5>
                <p>
                  Industry Ready Certification in Full-Stack Development through
                  CCBP Tech 4.0 Intensive Program.
                </p>
                <p>Understanding 4.0 Technologies.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Work Experience</h3>
              <div className="resume-item mt-2">
                <h4>Software Engineer</h4>
                <h5>SEP 2023 - Present</h5>
                <p>Phenom, Hyderabad</p>
                <ul>
                  <li>
                    {" "}
                    I'm currently employed at Phenom People, serving as a
                    Software Engineer specializing in UI development.
                  </li>
                  <li>
                    Develop high-performance UI components for HR tech
                    solutions.
                  </li>
                  <li>
                    Optimize front-end performance and improve accessibility.
                  </li>
                  <li>
                    Collaborate with designers &amp; backend teams to enhance
                    product experience.
                  </li>
                </ul>
              </div>
              <div className="resume-item mt-2">
                <h4>Project Engineer</h4>
                <h5>SEP 2021 - SEP 2023</h5>
                <p>Intellect Design Arena Ltd, Delhi</p>
                <ul>
                  <li>
                    Worked in Government E-Commerce platform also known as GeM
                    where common user goods and services can be procured by
                    government buyers.
                  </li>
                  <li>
                    Worked on Production JIRA’s and helped the user for a smooth
                    user experience. Developed and deployed few functionality
                    enhancements on UAT.
                  </li>
                  <li>
                    Developed and Designed UI by using frontend technologies for
                    the GeM portal and Admin panel modules &amp; Worked on UI
                    Bug fixing and improved the system performance.
                  </li>
                  {/*<li>Involved in QA support and participated in daily Stand-up meetings to discuss impediments, clarifications, and status. Used Jira to track, assign and manage work within the team.</li> */}
                </ul>
              </div>
              <h3 className="resume-title">Technologies I've worked with</h3>
              <div className="skill_main" id="skillDataContainer">
                <div className="skills">
                  <div className="skills-skill">HTML</div>
                  <div className="skills-skill">CSS</div>
                  <div className="skills-skill">JavaScript</div>
                  <div className="skills-skill">Bootstrap</div>
                  <div className="skills-skill">React JS</div>
                  <div className="skills-skill">Tailwind CSS</div>
                  <div className="skills-skill">VS Code</div>
                  <div className="skills-skill">SQL</div>
                  <div className="skills-skill">PHP</div>
                  <div className="skills-skill">MongoDB</div>
                  <div className="skills-skill">GIT</div>
                  <div className="skills-skill">Github</div>
                  <div className="skills-skill">Bash</div>
                  <div className="skills-skill">Python</div>
                  <div className="skills-skill">Npm</div>
                  <div className="skills-skill">Node JS</div>
                  <div className="skills-skill">JIRA</div>
                  <div className="skills-skill">Bitbucket</div>
                  <div className="skills-skill">Less</div>
                  <div className="skills-skill">Postman</div>
                  <div className="skills-skill">Dev Tools</div>
                  {/* <div class="skills-skill">SASS</div>
                      <div class="skills-skill">Angular JS</div>
                      <div class="skills-skill">React Native</div>
                      <div class="skills-skill">Next JS</div>
                      <div class="skills-skill">UI & UX Design</div>
                      <div class="skills-skill">Redux</div>
                      <div class="skills-skill">Vue JS</div>
                      <div class="skills-skill">Cypress</div>
                      <div class="skills-skill">Playwright</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

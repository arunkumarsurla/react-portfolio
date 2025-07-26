import React from "react";

const SocialLinks = () => {
  return (
    <>
      <div orientation="left" className="social-media-links">
        <ul className="social-media-sec">
          <li>
            <a
              href="https://github.com/arunkumarsurla"
              id="social-logos"
              aria-label="GitHub"
              target="_blank"
            >
              <title>GitHub</title>
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/arunkumarsurla"
              id="social-logos"
              aria-label="Codepen"
              target="_blank"
            >
              <title>Codepen</title>
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/arunkumar-surla"
              id="social-logos"
              aria-label="Twitter"
              target="_blank"
            >
              <title>Twitter</title>
              <i className="fa-brands fa-x-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/arunkumar-surla"
              id="social-logos"
              aria-label="Linkedin"
              target="_blank"
            >
              <title>linkedin</title>
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=9191XXXXXX85&text&type=phone_number&app_absent=0"
              id="social-logos"
              aria-label="Whatsapp"
              target="_blank"
            >
              <title>Whatsapp</title>
              <i className="fab fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>

      <div orientation="right" className="g-mail">
        <div className="g-mail-sec">
          <a id="mail" href="mailto:arunkumarsurla1@gmail.com">
            arunkumarsurla1@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

// Exported as named export
export const MobileSocialList = () => {
  return (
    <div>
      <ul className="mobile-social-list">
        <li>
          <a
            href="https://github.com/arunkumarsurla"
            className="social-logo"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/arunkumarsurla"
            className="social-logo"
            aria-label="Codepen"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
          >
            <i className="fab fa-codepen" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/arunkumar-surla"
            className="social-logo"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/arunkumar-surla"
            className="social-logo"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=9191XXXXXX85&text&type=phone_number&app_absent=0"
            className="social-logo"
            aria-label="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
};

// Only one default export allowed — export SocialLinks as default
export default SocialLinks;

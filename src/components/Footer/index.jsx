import logo from "../../assets/ak_new_logo.ico";
const Footer = () => {
  return (
    <footer className="footer pt-2 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <a className="navbar-brand" href="#">
              <img src={logo} className="ak_logo_img" alt="logo" />
            </a>
            <div className="footer-group">
              <i className="far fa-copyright copy-icon" />
              <span className="description">
                <span id="year">{new Date().getFullYear()}</span> | ArunKumar |
                Built with ❤️ and React.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const DesktopSkeleton = () => {
  return (
    <>
      <div className="desktop-skeleton">
        <div id="preloader" className="skeleton-loader">
          <div className="navbar fixed-top navbar-expand-lg custom-navbar ">
            <a className="navbar-brand">
              <div className="skeleton skeleton-logo" />
            </a>
            <div className="d-flex">
              <div className="skeleton skeleton-navitem" />
              <div className="skeleton skeleton-navitem" />
              <div className="skeleton skeleton-navitem" />
              <div className="skeleton skeleton-navitem" />
              <div className="skeleton skeleton-navitem" />
              <div className="skeleton skeleton-navitem" />
            </div>
          </div>
          <div orientation="left" className="social-media-links">
            <ul className="skeleton-social-media-sec">
              <li className="skeleton skeleton-social-icon" />
              <li className="skeleton skeleton-social-icon" />
              <li className="skeleton skeleton-social-icon" />
              <li className="skeleton skeleton-social-icon" />
              <li className="skeleton skeleton-social-icon" />
            </ul>
          </div>
          <div orientation="right" className="skeleton g-mail">
            <div style={{ height: "70vh" }} />
          </div>
          <section className="template-section">
            <div className="template-section">
              <div
                className="container text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className="skeleton"
                  style={{
                    width: 200,
                    height: 20,
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: 500,
                    height: 90,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: 650,
                    height: 85,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: 970,
                    height: 100,
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                >
                  <div
                    className="skeleton"
                    style={{
                      width: 120,
                      height: 40,
                      display: "inline-block",
                      borderRadius: 10,
                    }}
                  />
                  <div
                    className="skeleton"
                    style={{
                      width: 120,
                      height: 40,
                      marginLeft: 50,
                      display: "inline-block",
                      borderRadius: 10,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const MobileSkeleton = () => {
  return (
    <>
      <section>
        <div className="mobile-header fixed-top skeleton-loading">
          <div className="mobile-nav-row">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="mobile-nav-item skeleton-item">
                <div className="icon-skeleton" />
                <div className="text-skeleton" />
              </div>
            ))}
            <div className="mobile-nav-item skeleton-item">
              <div className="icon-skeleton" />
            </div>
          </div>
        </div>

        <div className="template-section">
          <div className="container skeleton-container">
            <div className="mobile-skeleton skeleton-text short" />
            <div className="mobile-skeleton skeleton-text medium" />
            <div className="mobile-skeleton skeleton-text large" />
            <div className="mobile-skeleton skeleton-paragraph" />
            <div className="mobile-skeleton-btn-group">
              <div className="mobile-skeleton skeleton-button" />
              <div className="mobile-skeleton skeleton-button" />
            </div>
          </div>
        </div>
        <footer className="footer-skeleton pt-2 pb-2">
          <div className="container text-center">
            <div className="mobile-skeleton skeleton-logo" />
            <div className="mobile-skeleton skeleton-footer-text" />
          </div>
        </footer>
      </section>
    </>
  );
};

const Skeleton = () => {
  return (
    <>
      <DesktopSkeleton />

      <MobileSkeleton />
    </>
  );
};

export default Skeleton;

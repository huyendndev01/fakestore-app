import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="container mt-5 d-lg-flex justify-content-between">
        <div className="col-lg-6 col-12 mb-2 position-relative mx-sm-2">
          <img
            src="https://main--brilliant-malabi-b8b32a.netlify.app/images/main-banner.jpg"
            className="img-fluid rounded-3"
          />
          <div className="main-banner-content position-absolute top-20">
            <h4 className="banner-text-title">SUPERCHARGED FOR PROPS.</h4>
            <h5>IPad S13+ Pro</h5>
            <p>From $999.000 or $40.00/mo</p>
            <a className="btn btn-outline-dark">BUY NOW</a>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative mb-2">
              <img
                src="https://main--brilliant-malabi-b8b32a.netlify.app/images/catbanner-01.jpg"
                className="img-fluid rounded-3 img-main"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>Best Sake</h4>
                <h5>iPad S13+ Pro.</h5>
                <p className="d-none d-sm-block">
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative mb-2">
              <img
                src="https://main--brilliant-malabi-b8b32a.netlify.app/images/catbanner-02.jpg"
                className="img-fluid rounded-3 img-main"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4 className="small-banner-textnote">NEW ARRIVAL</h4>
                <h5 className="small-banner-textname">But IPad Air</h5>
                <p className="d-none d-sm-block">
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative mb-2">
              <img
                src="https://main--brilliant-malabi-b8b32a.netlify.app/images/catbanner-03.jpg"
                className="img-fluid rounded-3 img-main"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p className="d-none d-sm-block">
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img
                src="https://main--brilliant-malabi-b8b32a.netlify.app/images/catbanner-04.jpg"
                className="img-fluid rounded-3 img-main"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p className="d-none d-sm-block">
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-wrapper-2 py-5 mt-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img
                    src="https://main--brilliant-malabi-b8b32a.netlify.app/images/service.png"
                    alt="services"
                  />
                  <div className="d-md-block d-none">
                    <h6>Fee Shipping</h6>
                    <p className="p-0 mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://main--brilliant-malabi-b8b32a.netlify.app/images/service-02.png"
                    alt="services"
                  />
                  <div className="d-md-block d-none">
                    <h6>Daily Surprise Offers</h6>
                    <p className="p-0 mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://main--brilliant-malabi-b8b32a.netlify.app/images/service-03.png"
                    alt="services"
                  />
                  <div className="d-md-block d-none">
                    <h6>Support 24/7</h6>
                    <p className="p-0 mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://main--brilliant-malabi-b8b32a.netlify.app/images/service-04.png"
                    alt="services"
                  />
                  <div className="d-md-block d-none">
                    <h6>Affordable Prices</h6>
                    <p className="p-0 mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://main--brilliant-malabi-b8b32a.netlify.app/images/service-05.png"
                    alt="services"
                  />
                  <div className="d-md-block d-none">
                    <h6>Secure Payments</h6>
                    <p className="p-0 mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="section-heading mb-0">Our Latest News</h3>
            </div>

            <div className="d-sm-flex justify-content-between">
              <div className="wrap-blog-card">
                <div className="blog-card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="https://main--brilliant-malabi-b8b32a.netlify.app/images/blog-1.jpg"
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <p className="date">1 Jun. 2023</p>
                    <h5 className="title">
                      A beautiful sunday morning renaissance
                    </h5>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, asperiores.
                    </p>
                    <a className="btn btn-outline-dark mt-2" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="wrap-blog-card">
                <div className="blog-card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="https://main--brilliant-malabi-b8b32a.netlify.app/images/blog-1.jpg"
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <p className="date">1 Jun. 2023</p>
                    <h5 className="title">
                      A beautiful sunday morning renaissance
                    </h5>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, asperiores.
                    </p>
                    <a className="btn btn-outline-dark mt-2" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="wrap-blog-card">
                <div className="blog-card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="https://main--brilliant-malabi-b8b32a.netlify.app/images/blog-1.jpg"
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <p className="date">1 Jun. 2023</p>
                    <h5 className="title">
                      A beautiful sunday morning renaissance
                    </h5>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, asperiores.
                    </p>
                    <a className="btn btn-outline-dark mt-2" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="wrap-blog-card">
                <div className="blog-card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="https://main--brilliant-malabi-b8b32a.netlify.app/images/blog-1.jpg"
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <p className="date">1 Jun. 2023</p>
                    <h5 className="title">
                      A beautiful sunday morning renaissance
                    </h5>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, asperiores.
                    </p>
                    <a className="btn btn-outline-dark mt-2" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section
      className="banner banner--style2"
      id="home"
      style={{ backgroundImage: "url(images/banner/bg2.png)" }}
    >
      <div className="container">
        <div className="banner__wrapper">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-10">
              <div
                className="banner__content text-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <h1>
                  DGTLS <br /> Your control of the world {" "}
                </h1>
                <p>Buy, stake, farm, sell</p>
                <Link href="/project" className="default-btn">
                  <span>Buy GTL</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

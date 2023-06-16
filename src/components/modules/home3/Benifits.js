import Simple from "@/components/base/Simple";
import React from "react";


function Benifits() {
  return (
    <section className="benifit padding-top">
      <div className="container">
        <div
          className="section-header section-header--middle aos-init"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Benifits" title="What we offer" />
            </div>
          </div>
        </div>
        <div className="benifit__wrapper">
          <div className="row g-5">
            <div className="col-lg-3 col-sm-6">
              <div
                className="benifit__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/benifit/01.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Digitalization</h4>
                    <p>
                    We have digitized all natural resources and transferred them to the blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="benifit__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={100}
              >
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/benifit/02.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Own</h4>
                    <p>
                      Each person owns all the resources of the world.
                      We give you the opportunity to own them
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="benifit__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={200}
              >
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/benifit/03.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Subsoil management</h4>
                    <p>
                      Buy, sell, stake and farm your assets. No restrictions!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="benifit__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/benifit/04.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Profit</h4>
                    <p>
                     Profit at any time and in any quantity. Everything depends on you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits;

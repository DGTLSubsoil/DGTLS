import Simple from "@/components/base/Simple";
import DefaultButton from "@/components/base/DefaultButton";
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap padding-bottom" id="roadmap">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Future" title="Our Roadmap" />
            </div>
          </div>
        </div>
        <div className="roadmap__wrapper2">
          <div className="row gy-4 gy-md-0 gx-5">
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Basic start</h4>
                      <p>Q3 2023</p>
                    </div>
                    <p>
                    Site launch. Opening social networks. Airdrop for early adopters. Token sale GTL. Start of sales on DEX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Progressive development</h4>
                      <p>Q4 2023</p>
                    </div>
                    <p>
                    Staking opening. Opening Farming. Listing on cryptocurrency exchanges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Soon</h4>
                      <p>Q1 2024</p>
                    </div>
                    <p>
                    
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

export default Roadmap;

import React, { useState } from "react";
import Simple from "@/components/base/Simple";
import Accordion from 'react-bootstrap/Accordion';


function FaqCard() {
  const [faqtab, setFaqtab] = useState(1);
  const handelFaq = (id) => {
    setFaqtab(id)
  }

  return (
    <section className="faq padding-top padding-bottom shape-1r" id="faq">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="FAQ" title="Common Queries" />
            </div>
          </div>
        </div>
        <div
          className="faq__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <ul
            className="faq__tab nav nav-pills mb-5"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                onClick={() => handelFaq(1)}
                className={faqtab === 1 ? "nav-link active" : "nav-link"}
                id="pills-general-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-general"
                type="button"
                role="tab"
                aria-controls="pills-general"
                aria-selected="true"
              >
                General Questions
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => handelFaq(2)}
                className={faqtab === 2 ? "nav-link active" : "nav-link"}
                id="pills-token-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-token"
                type="button"
                role="tab"
                aria-controls="pills-token"
                aria-selected="false"
              >
                Token Sales
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => handelFaq(3)}
                className={faqtab === 3 ? "nav-link active" : "nav-link"}
                id="pills-investor-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-investor"
                type="button"
                role="tab"
                aria-controls="pills-investor"
                aria-selected="false"
              >
                Investor Guides
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => handelFaq(4)}
                className={faqtab === 4 ? "nav-link active" : "nav-link"}
                id="pills-security-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-security"
                type="button"
                role="tab"
                aria-controls="pills-security"
                aria-selected="false"
              >
                Security
              </button>
            </li>
          </ul>
          <div className="tab-content faq__content" id="pills-tabContent">
            <div
              className={faqtab === 1 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-general"
              role="tabpanel"
              aria-labelledby="pills-general-tab"
            >
              <div className="row gy-3 gx-5">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What is a DGTLS?</Accordion.Header>
                      <Accordion.Body>
                      Digital subsoil - monetized minerals - natural resources, which, being in the bowels of the earth, already today bring profit to their owner!
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What does our project do?</Accordion.Header>
                      <Accordion.Body>
                      We are a digital project that allows its owners to increase their capital in the green format of Proof of stack without harming the environment and without harming the climate. Each coin is a particle of a mineral resource - the fuel of life! Just as the price of minerals rises around the world, so does the value of the GTL token, as it is a digital piece of minerals!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>What is the main value of the project?</Accordion.Header>
                      <Accordion.Body>
                      The heart of our project is the GTL token. The GTL token is lithium, osmium, ruthenium and hundreds of other minerals, many of which are already becoming rare. The value of GTL - will increase every day as GTL and rare vanishing metals they both have no emission. 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How do I participate inIDOs?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What are the steps of anIDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Can I unstake after eachIDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className={faqtab === 2 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-token"
              role="tabpanel"
              aria-labelledby="pills-token-tab"
            >
              <div className="row gy-3 gx-5">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Do I have to register for each IDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What can I fund my allocation with?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Want to launch your project?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Can I stake after eachIDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What is the payment method of Torkgo?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Is cryptocurrency used for illegal activities?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className={faqtab === 3 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-investor"
              role="tabpanel"
              aria-labelledby="pills-investor-tab"
            >
              <div className="row gy-3 gx-5">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How do I participate in IDOs?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What are the steps of anIDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>who can participate inIDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How to Find IDO Token?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Do I have to register for each IDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>How to start trading in Metaverse?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className={faqtab === 4 ? "tab-pane fade show active" : "tab-pane fade"}
              id="pills-security"
              role="tabpanel"
              aria-labelledby="pills-security-tab"
            >
              <div className="row gy-3 gx-5">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How can I Launch my IDO?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Who is allowed in Torkgo?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>What is the Benifits in Torkgo?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header> How can I Make Money viaIDO</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Is it secure to launch game in Torkgo?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Which Blockchain is used in Torkgo?</Accordion.Header>
                      <Accordion.Body>
                        Fundamentally seller sells their currency to gain cash
                        and a buyer buys expecting hold the currency until
                        value increases in dollar/rupee terms In mid-August
                        202 total market value of all cryptocurrency exceeded
                        $2 trillion, with Bitcoin alone making up 44% of that.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default FaqCard;

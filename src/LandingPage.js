import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import donatenow_cta from "./assets/donatenow_cta.png";
import child1 from "./assets/child1.png";
import child2 from "./assets/child2.png";
import child3 from "./assets/child3.png";
import child4 from "./assets/child4.png";
import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.png";
import banner3 from "./assets/banner3.png";
import banner4 from "./assets/banner4.png";
import slider1 from "./assets/slider1.png";
import slider2 from "./assets/slider2.png";
import slider3 from "./assets/slider3.png";
import slider4 from "./assets/slider4.png";
import sliderHeader1 from "./assets/sliderHeader1.png";
import sliderHeader2 from "./assets/sliderHeader2.png";
import sliderHeader3 from "./assets/sliderHeader3.png";
import sliderHeader4 from "./assets/sliderHeader4.png";
import firstHeader from "./assets/firstHeader.png";
import secondHeader from "./assets/secondHeader.png";
import thirdHeader from "./assets/thirdHeader.png";
import fourthHeader from "./assets/fourthHeader.png";
import fifthHeader from "./assets/fifthHeader.png";
// import unicef_video from "./assets/unicef_video.mp4";
import unicefLogo from "./assets/unicefLogo.png";

const LandingPage = () => {
  const [donationAmount, setDonationAmount] = useState(800);
  const [donationType, setDonationType] = useState("monthly");
  const [paymentMode, setPaymentMode] = useState("bank");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideoPopup = () => {
    setPopupOpen(true);
  };

  // const closeVideoPopup = () => {
  //   setPopupOpen(false);
  //   videoRef.current.pause();
  // };

  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderData = [
    {
      id: 1,
      slideimg: slider1,
      heading: sliderHeader1,
      text: `"I am glad that I got an opportunity to contribute to UNICEF in whatever way I can. Future of our Nation is in the hands of today's children and it's our responsibility to make sure that our children learn grow and sustain whom will empower our nation. I am sure that one day these children will make our nation proud. I humbly request everyone of you to do whatever contribution that you can so that our country can nurture future heroes. Jaihind"
`,
      author: "Vaisakh S",
    },
    {
      id: 2,
      slideimg: slider2,
      heading: sliderHeader2,
      text: `"Children are vulnerable and therefore they need utmost care and above all protection! Let us eradicate exploitation and do whatever it takes to make the lives of our Children beautiful, just like they are! I am glad I donate to UNICEF and have two additional children besides my biological ones. The money donated means nothing absolutely nothing to me, but the well-being of my foster kids means the world to me. I love you, my babies! May you always be protected and nurtured! Keep up the good work Unicef and may you continue to make a positive difference to our Children! I urge all to give whatever you can for it is in GIVING that we RECEIVE!"
`,
      author:
        "Sumita R Almeida, Head- Human Resources, Monedo Financial Services Pvt Ltd",
    },
    {
      id: 3,
      slideimg: slider3,
      heading: sliderHeader3,
      text: `"Being a donor to UNICEF has been one of the most fulfilling experiences of my life. Knowing that my donations are helping to provide financial support to children in need gives me a sense of purpose and satisfaction that is hard to put into words. Through UNICEF's child financial support program, my donations are making a real difference in the lives of children, helping to provide them with access to education, healthcare, clean water, and other basic necessities that are essential for their growth and development."
`,
      author: "Kasiviswanathan Rajasekaran Mangudi",
    },
    {
      id: 4,
      slideimg: slider4,
      heading: sliderHeader4,
      text: `"Being a donor is a rewarding and fulfilling experience for me. Whether its time, money, or resources, the act of giving creates a sense of purpose and satisfaction. Knowing that I am making a small but positive impact on someone else's life is a powerful motivation and it gives me a feeling of personal fulfilment and happiness. Thanks to UNICEF India for letting me be a part of it"
`,
      author: "Mridula Research Scholar|IIT Madras",
    },
  ];

  return (
    <div className="landing-page">
     
      <header className="header">
        <div align="right">
          <img src={unicefLogo} alt="UNICEF Logo" width="300" />
        </div>
      </header>
      <section className="donation-section">
        <div className="donation-container">
            <form className="donation-form">
              <div className="donation-flex-image">
                <img src={firstHeader} alt="Donate for children" />
              </div>
              <div className="donation-type-container">
                <div className="donation-type">
                  <button
                    type="button"
                    className={`donation-btn-tab ${
                      donationType === "monthly" ? "active" : ""
                    }`}
                    onClick={() => handleDonationTypeChange("monthly")}
                  >
                    Give Monthly
                  </button>
                  <button
                    type="button"
                    className={`donation-btn-tab ${
                      donationType === "once" ? "active" : ""
                    }`}
                    onClick={() => handleDonationTypeChange("once")}
                  >
                    Give Once
                  </button>
                </div>

                <div className="donation-amount">
                  <button
                    type="button"
                    className={donationAmount === 800 ? "active" : ""}
                    onClick={() => handleDonationAmountChange(800)}
                  >
                    ₹800
                  </button>
                  <button
                    type="button"
                    className={donationAmount === 1000 ? "active" : ""}
                    onClick={() => handleDonationAmountChange(1000)}
                  >
                    ₹1000
                  </button>
                  <button
                    type="button"
                    className={donationAmount === 1500 ? "active" : ""}
                    onClick={() => handleDonationAmountChange(1500)}
                  >
                    ₹1500
                  </button>
                  <button
                    type="button"
                    className={donationAmount === "other" ? "active" : ""}
                    onClick={() => handleDonationAmountChange("other")}
                  >
                    OTHER
                  </button>
                </div>

                <div className="selected-amount">
                  <h2>
                    ₹ {donationAmount}{" "}
                    {donationType === "monthly" ? "PER MONTH" : ""}
                  </h2>
                </div>

                {donationType === "monthly" && (
                  <div className="payment-mode">
                    <h4>Mode of donation</h4>
                    <div className="payment-mode-radio">
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          value="bank"
                          checked={paymentMode === "bank"}
                          onChange={() => handlePaymentModeChange("bank")}
                        />
                        Bank Account
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          value="upi"
                          checked={paymentMode === "upi"}
                          onChange={() => handlePaymentModeChange("upi")}
                        />
                        UPI
                      </label>
                    </div>
                  </div>
                )}

                <button className="next-button">NEXT</button>
              </div>
            </form>
          <div className="donation-flex-image">
            <div className="donation-image">
              <img src={child1} alt="Donate for children"/>
            </div>
          </div>
        </div>
      </section>

      <div className="video-second-section">
        <div className="donation-second-flex-image">
          <img src={secondHeader} alt="Donate for children" />
        </div>
        <div className="donation-flex-image">
          <div className="donation-image">
            <img src={child2} alt="Donate for children" />
          </div>
        </div>
      </div>

      <div className="video-section">
        <div className="donation-flex-image">
          <img src={thirdHeader} alt="Donate for children" />
        </div>
        <div className="video-poster" onClick={openVideoPopup}>
          <div className="donation-image">
            <img src={child3} alt="Donate for children" />
          </div>
        </div>

        {/* {isPopupOpen && (
          <div className={`video-popup ${isPopupOpen ? "active" : ""}`}>
            <span className="close" onClick={closeVideoPopup}>
              &times;
            </span>
            <video ref={videoRef} controls>
              <source src={unicef_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )} */}
      </div>

      <div className="video-second-section">
        <div className="donation-second-flex-image">
          <img src={child4} alt="Donate for children" />
        </div>
        <div className="donation-flex-image">
          <div className="donation-image">
            <img src={fourthHeader} alt="Donate for children" />
          </div>
        </div>
      </div>

      <div className="donation-second-flex-image-fifth">
        <img
          src={fifthHeader}
          alt="Donate for children"
          style={{ maxWidth: "40%" }}
        />
      </div>
      <div className="donation-second-flex-banner">
        {[banner1, banner2, banner3, banner4].map((item, index) => (
          <div key={index} className="banner-image">
            <img src={item} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>

      <section className="slider-section">
        <Slider {...sliderSettings}>
          {sliderData.map((item) => (
            <div key={item.id} className="slider-item">
              <img
                src={item.slideimg}
                alt={`Slide ${item.id}`}
                className="slider-image"
              />
              <div className="slider-content">
                <img
                  src={item.heading}
                  alt={`Heading ${item.id}`}
                  className="slider-heading"
                />
                <p>{item.text}</p>
                <p className="slider-content-author">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <footer className="footer">
        <div align="left">
          <img src={unicefLogo} alt="UNICEF Logo" width="300" />
        </div>
        <p>&copy; 2023 UNICEF - All rights reserved</p>
        <div className="privacy">
          <a href="https://www.unicef.org/legal#privacy-policy">
            Privacy Policy
          </a>
          <p
            className="cursor"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Legal
          </p>
          <p
            className="cursor"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contact Us
          </p>
        </div>
      </footer>
      <img
        src={donatenow_cta}
        className="donate-cta"
        alt="donate_cta"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></img>
    </div>
  );
};

export default LandingPage;

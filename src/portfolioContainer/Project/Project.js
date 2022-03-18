import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import modelSis from "../../../src/assets/Projects/modelSis.png";
import bst  from "../../../src/assets/Projects/bst.png";
import snSoftware from "../../../src/assets/Projects/snsoftware.jfif";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import me from "../../../src/assets/Projects/seydou_ba_idphoto.jpg";



export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"My Projects Details"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="" />
                      This application allows to manage the stocks of Itoc Shipping.<br/>
                      It is developed with the use of Angular and Jhipster technologies.
                              
                     
                    </p>
                  
                  </div>
                  <div className="client-info">
                    <img src={modelSis} alt="no internet connection"></img>
                    <h5>Itoc Shipping</h5>
                    <p>Inventory management App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      Finao app allows to manage the call center of Finao.<br/>
                      It is developed with the use of Angular, SpringBoot and Asterisk technologies.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={bst} alt="no internet connection"></img>
                    <h5>FINAO</h5>
                    <p>Call Center App</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                     
                    C'perf App allows companies to monitor their performance.<br/>
                    It is developed with the use of Thymeleaf Template and SpringBoot technologies.

                   
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={snSoftware} alt="no internet connection"></img>
                    <h5>C'Perf</h5>
                    <p>performance tool App</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      This project allows to detect disease on a cassava leaf.<br/>
                      it is developed with the use of python and TensorFlow.
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Cassava App</h5>
                    <p>Disease detection on cassava leaf</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    Foutanke App is a retail management application developed using Laravel technology.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Sales management application</h5>
                    <p>Foutanke Shop App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    PAF App is a  mobile application developed with Android.<br/>
                    This application allows the public to recruit a guard in an agency.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Managing a security agency</h5>
                    <p>PAF App</p>
                  </div>
                </div>
              </div>

              
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
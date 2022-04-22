import React from "react";
import "./carousel.css";

function Tutorial(props){
  return (
    <div className="tutorial_block">
      <div className="center_block_carousel">
        <div className="discription_tutorial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          possimus vel similique vero provident, assumenda maxime laborum modi
          temporibus repellendus excepturi saepe earum doloribus sequi veniam,
          beatae hic reiciendis distinctio.
        </div>
        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper">
                {/* <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a> */}
                {/* <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a> */}
              </div>
            </li>
            <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper"></div>
              {/* <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a> */}
              {/* <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a> */}
            </li>
            <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper"></div>
              {/* <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a> */}
              {/* <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a> */}
            </li>
            <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper"></div>
              {/* <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a> */}
              {/* <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a> */}
            </li>
          </ol>
          <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide1"
                  className="carousel__navigation-button"
                >
                  Go to slide 1
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide2"
                  className="carousel__navigation-button"
                >
                  Go to slide 2
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide3"
                  className="carousel__navigation-button"
                >
                  Go to slide 3
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide4"
                  className="carousel__navigation-button"
                >
                  Go to slide 4
                </a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;

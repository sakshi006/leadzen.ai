import React, { Component } from 'react';
import "./Middle3.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel  responsive={responsive} transitionDuration={300} arrows={false} autoPlay={true} infinite={true}  showThumbs={false} showIndicators={false}>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2856.png" alt="" />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2716.png" alt=""  />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2717.png" alt=""  />
                </div>


                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2718.png" alt="" />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2719.png" alt=""  />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2721.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2722.png" alt="" />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2851.png" alt=""  />
                </div>
                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2852.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2853.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2854.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2855.png" alt=""  />
                </div>
                {/* <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/09/Group-2827.png" alt=""  />
                </div> */}

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2711.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src=" https://leadzen.ai/wp-content/uploads/2021/10/Group-2712.png" alt=""  />
                </div>
                <div>
                    <img className="trusted-img" src=" https://leadzen.ai/wp-content/uploads/2021/10/Group-2714.png" alt=""  />
                </div>

                <div>
                    <img className="trusted-img" src="https://leadzen.ai/wp-content/uploads/2021/10/Group-2715.png" alt=""  />
                </div>
               

            </Carousel>
        );
    }
};

export default DemoCarousel
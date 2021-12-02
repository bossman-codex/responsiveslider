
import React, { useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import {Fab} from "@material-ui/core";
// import testlefticon from "../assets/pictures/testlefticon.svg"
// import testrightiicon from "../assets/pictures/testrightiicon.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.css";
import { Slide } from "./testimonial.js";
// import pic1 from "../assets/pictures/our-clients/pic1.png"
// import pic2 from "../assets/pictures/our-clients/pic2.png"
// import pic3 from "../assets/pictures/our-clients/pic3.png"
// import pic4 from "../assets/pictures/our-clients/pic4.png"



const data = [
  {
    image :"https://picsum.photos/200/300?random=1" ,
    text: "Blue Advisory’s excellence is unmatched. They were key to mapping out our global impact strategy in 2020. We have received numerous awards thanks to their impact strategy for Africa."
  },
  {
    image:"https://picsum.photos/200/300?random=1" ,
    text: "Blue Advisory’s excellence is unmatched. They were key to mapping out our global impact strategy in 2020. We have received numerous awards thanks to their impact strategy for Africa."
  },
  {
    image: "https://picsum.photos/200/300?random=1" ,
    text: "Blue Advisory’s excellence is unmatched. They were key to mapping out our global impact strategy in 2020. We have received numerous awards thanks to their impact strategy for Africa."
  },
  {
    image:"https://picsum.photos/200/300?random=1" ,
    text: "Blue Advisory’s excellence is unmatched. They were key to mapping out our global impact strategy in 2020. We have received numerous awards thanks to their impact strategy for Africa."
  },
  {
    image: "https://picsum.photos/200/300?random=1" ,
    text: "Blue Advisory’s excellence is unmatched. They were key to mapping out our global impact strategy in 2020. We have received numerous awards thanks to their impact strategy for Africa."
  }
];

const Testimonial = () => {
  const ref = React.useRef(StackedCarousel);
  useEffect(() => {
    setInterval(stuff, 200000);
    console.log("i fire once");
  }, []);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <div className="card card-carrier">
      <div style={{ position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            let currentVisibleSlide = 5;
            if (width <= 1280) currentVisibleSlide = 3;
            if (width <= 720) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                currentVisibleSlide={currentVisibleSlide}
              />
            );
          }}
        />
        <Fab
          className="card-button testimonial-left-button"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <img src={ArrowBackIcon} />
        </Fab>
        <Fab
          className="card-button testimonial-right-button"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
         <img src={ArrowForwardIcon} />
        </Fab>
      </div>
    </div>
  );
};

export default Testimonial;
// import react icons
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

// Import Owl Carousel CSS
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import useRef
import { useRef, useEffect, useState } from "react";

// import css file
import "./carousel.css";
const Carousel = () => {
  const carouselRef = useRef();
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const [posts, setPosts] = useState([]);
   // ⬇️ Fetch posts from backend when component mounts
    useEffect(() => {
      const getData = async () => {
        const res = await fetch('http://localhost:3000/api/rating');
        const data = await res.json();
        setPosts(data);
      }
      getData();
      
    }, [])

  return (
    <div className=" relative w-[50%] m-auto pb-[50px] mt-[50px] ">
      {/* Custom Nav Buttons */}
      <div className=" flex justify-between mb-[-65px]">
        <button
          onClick={() => carouselRef.current.prev()}
          className=" text-2xl z-50  ml-[-60px]"
        >
          <FaArrowAltCircleLeft />
        </button>

        <button
          onClick={() => carouselRef.current.next()}
          className=" text-2xl  z-50 mr-[-60px] "
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      <OwlCarousel ref={carouselRef} className="owl-theme" {...options}>
        
      </OwlCarousel>
    </div>
  );
};

export default Carousel;

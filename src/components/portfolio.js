import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../Assests/styles.css";
import { EffectCube, Pagination } from "swiper/modules";
import Home from "./Home";
import Expertise from "./Expertise";
import Projects from "./Skills";
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import WebhookIcon from '@mui/icons-material/Webhook';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Contact from "./Contact";

const sidebarItems = [
  {
    title: "Home",
    icon: HomeIcon,
  },
  {
    title: "Expertise",
    icon: ConstructionIcon,
  },
  {
    title: "Projects",
    icon: WebhookIcon,
  },
  {
    title: "Contact",
    icon: RecentActorsIcon,
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", function () {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, []);

  const Navigate = (index) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index, 1000, true);
  };


  return (
    <div style={{ display: "flex" }}>
      <aside>
       
        <ul className="Links">
          {sidebarItems.map(
            (text, index) => (
              <li
                key={index}
                onClick={() => Navigate(index)}
                className={activeIndex === index ? "activeLink" : ""}
              >
                {text.icon && <text.icon />}
                <p>{text.title}</p>
              </li>
            )
          )}
        </ul>
      </aside>
      <Swiper
     ref={swiperRef}
        effect={"cube"}
        grabCursor={false}
        allowTouchMove={false}
        cubeEffect={{
          // shadow: true,
          // slideShadows: true,
          // shadowOffset: 20,
          // shadowScale: 0.94,
        }}
        // pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
         <Expertise />
        </SwiperSlide>
        <SwiperSlide>
          <Projects/>
        </SwiperSlide>
       
        <SwiperSlide>
          <Contact/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

// Import images for swiper component
import Unn from "../assets/UNN logoo 1.png"
import Harvard from "../assets/Harvard University - png 0.png"
import Oregon from "../assets/Oregon State University - png.png"

const SlideShow = () => {
  return (
    <Swiper
      spaceBetween={60}
      speed={5000}
      centeredSlides={true}
      autoplay={{
        delay: 200,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      <SwiperSlide><img src={Unn} alt="University of Nigeria Nsukka Logo" /></SwiperSlide>
      <SwiperSlide><img src={Oregon} alt="Oregon State university Logo" /></SwiperSlide>
      <SwiperSlide><img src={Harvard} alt="Harvard University Logo" /></SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
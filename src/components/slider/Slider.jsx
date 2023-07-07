import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
 import {SliderProducts} from '../../data/products'
 import './Slider.css'

 //import swiper style
 import 'swiper/css'
 import 'swiper/css/pagination'
 import 'swiper/css/navigation'



const Slider = () => {
  return (
    <div className="s-container">
       <Swiper
       breakpoints={{
        856:{
          slidesPerView:3
        },
         640:{
       slidesPerView:2
         },
         0:{
            slidesPerView:1
         }
       }}
       modules={[Pagination, Navigation]}
       className='mySwiper'
       navigation={true}
       loopFillGroupWithBlank={true}
      
       slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
     
        {SliderProducts.map((slide, i) =>
         <SwiperSlide>
         <div className="left-s">
            <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
            </div>
            <span>{slide.price}$</span>
            <div>shop now</div>
         </div>
         <img src={slide.img} alt="products" className="img-p" />
            </SwiperSlide>
        )}
      
       </Swiper>
    </div>
  )
}

export default Slider

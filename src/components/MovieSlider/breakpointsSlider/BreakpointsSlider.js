import {Swiper, SwiperSlide} from "swiper/react";
import {Col, Row} from "antd";
import imgSrc from "../../../helper/image";
import {Link} from "react-router-dom";


function BreakpointSlider({movies}) {
    return (
                <Swiper slidesPerView={8} spaceBetween={10} breakpoints={{
                    "640": {
                        "slidesPerView": 8,
                        "spaceBetween": 10
                    },
                    "768": {
                        "slidesPerView": 8,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 8,
                        "spaceBetween": 10
                    }
                }} className="mySwiper">
                    {movies.map(item =>
                        <SwiperSlide key={item.id}>
                            <Link to={`movie/${item.id}`}>
                                <SwiperSlide><img alt='' src={imgSrc(item.poster_path)}/></SwiperSlide>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
    )
}

export default BreakpointSlider
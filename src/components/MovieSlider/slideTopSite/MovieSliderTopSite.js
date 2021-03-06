import {Swiper, SwiperSlide} from 'swiper/react';
import imgSrc from "../../../helper/image";
import "./MovieSliderTopSite.scss";
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import {Col, Row} from "antd";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

SwiperCore.use([EffectCoverflow, Pagination])

function MovieSliderTopSite({movies}) {
    return (
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={false} slidesPerView={'auto'}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }} className="mySwiper">
                    {movies.slice(0, 11).map(item =>
                        <SwiperSlide key={item.id}>
                            <Link to={`movie/${item.id}`}>
                                <SwiperSlide><img alt='' src={imgSrc(item.poster_path)}/></SwiperSlide>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
    )
}

export default MovieSliderTopSite


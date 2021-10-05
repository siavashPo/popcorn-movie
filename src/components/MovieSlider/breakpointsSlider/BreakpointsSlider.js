import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Pagination
} from 'swiper';
import {Card, Col, Row} from "antd";
import imgSrc from "../../../helper/image";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";

SwiperCore.use([Pagination]);

function BreakpointSlider({movies}) {
    return (
        <Row>
            <Col span={16} offset={4}>
                <Swiper slidesPerView={8} spaceBetween={10} pagination={{
                    "clickable": true
                }} breakpoints={{
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
            </Col>
        </Row>
    )
}

export default BreakpointSlider
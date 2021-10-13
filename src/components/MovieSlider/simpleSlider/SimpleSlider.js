import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Navigation, Scrollbar
} from 'swiper';
import {Card, Col, Row} from "antd";
import imgSrc from "../../../helper/image";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";
SwiperCore.use([Pagination,Navigation]);


function SimpleSlider({movies}) {
    return (
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={5}
                    scrollbar={{ draggable: true }}
                >
                    {movies.map(item =>
                            <SwiperSlide key={item.id}>
                                <Link to={`movie/${item.id}`}>
                                    <Card
                                        hoverable
                                        style={{width: 240}}
                                        cover={<img alt='' src={imgSrc(item.backdrop_path)} />}
                                    >
                                        <Meta title={item.title}/>
                                    </Card>
                                </Link>
                            </SwiperSlide>
                    )}
                </Swiper>
    )
}

export default SimpleSlider



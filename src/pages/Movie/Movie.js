import {useParams} from "react-router-dom";import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useMovieDB from "../../hooks/useMovieDB";
import { Card, Row, Spinner, Col } from "react-bootstrap";
import classes from "./movie.module.scss";
import imgSrc from "../../helper/image";

export default function Movie() {
    const { id } = useParams();
    const { data, loading } = useMovieDB(`movie/${id}`);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return (
        <div>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                <div
                    className={classes.contain}
                    style={{
                        background: `url(${imgSrc(data.backdrop_path)})`,
                    }}
                >
                    <div className={classes.card}>
                        <Row>
                            <Col xs={12} md={3}>
                                <Card className={classes.poster}>
                                    <Card.Img
                                        src ={imgSrc(data.poster_path)}
                                    />
                                </Card>
                            </Col>
                            <Col xs={12} md={9} className={classes.title}>
                                <h1>{data.original_title}</h1>
                                <p>
                                    {data.genres?.map(genre => <span style={{color:'yellow'}} key={genre.id}> {genre.name}- </span>)}
                                </p>
                                <p style={{fontSize:'22px'}}>{data.release_date}</p>
                                <div className={classes.vote}>
                                    {data.vote_average * 10}
                                    <span style={{ fontSize: 15, color:"powderblue" }}>%</span>
                                </div>
                                <p style={{
                                    fontSize: '1.1em',
                                    fontWeight: '400',
                                    fontStyle: 'italic',
                                    opacity: '0.7',}} >
                                    {data.tagline}
                                </p>
                                <h4>overview :</h4>
                                <p style={{fontSize:'15px'}}>{data.overview}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </div>
    );
}
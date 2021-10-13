import {useParams} from "react-router-dom";
import {Spin, Tooltip, Progress} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import useMovieDB from "../../hooks/useMovieDB";
import {Card, Row, Col} from "react-bootstrap";
import classes from "./movie.module.scss";
import imgSrc from "../../helper/image";

export default function Movie() {
    const {id} = useParams();
    const {data, loading} = useMovieDB(`movie/${id}`);
    console.log(data)
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>

    return (
        <div>
            {loading ? (
                <Spin indicator={antIcon}/>
            ) : (
                <Row>
                    <Col span={24}>
                        <div
                            className={classes.contain}
                            style={{
                                background: `url(${imgSrc(data.backdrop_path, 'original')})`,
                            }}
                        >
                            <div className={classes.card}>
                                <Row>
                                    <Col xs={12} md={3}>
                                        <Card className={classes.poster}>
                                            <Card.Img
                                                src={imgSrc(data.poster_path)}
                                            />
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={9} className={classes.title}>
                                        <h1>{data.original_title}</h1>
                                        <p>
                                            {data.genres?.map(genre => <span style={{color: 'yellow'}}
                                                                             key={genre.id}> {genre.name}- </span>)}
                                        </p>
                                        <p style={{fontSize: '22px'}}>{data.release_date}</p>
                                        <Progress strokeLinecap="square" type="circle"
                                                  strokeColor={{
                                                      '0%': 'red',
                                                      '100%': 'green'
                                                  }}
                                                  percent={data.vote_average * 10}
                                                  strokeWidth={6}
                                                  width={100}
                                        />
                                        <p style={{
                                            fontSize: '1.1em',
                                            fontWeight: '400',
                                            fontStyle: 'italic',
                                            opacity: '0.7',
                                        }}>
                                            {data.tagline}
                                        </p>
                                        <h4>overview :</h4>
                                        <p style={{fontSize: '15px'}}>{data.overview}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
}
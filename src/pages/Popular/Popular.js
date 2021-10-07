import React, {useEffect, useState} from "react";
import useMovieDB from "../../hooks/useMovieDB";
import {Card, Col, Layout, Pagination, Row} from 'antd';
import imgSrc from "../../helper/image";
import {Link} from "react-router-dom";
import {Content, Header} from "antd/es/layout/layout";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import classes from "../Movie/movie.module.scss";

const {Meta} = Card;

function Popular() {
    const {data} = useMovieDB('movie/popular')
    const [page, setPage] = useState({pageNumber: 1, range: 12})
    const [state, setState] = useState({collapsed: false})
    console.log(data)
    return (
        <Layout>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Row className="site-layout-content">{data?.results?.map(movie =>
                        <Col xs={24} sm={12} md={6} key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <Card
                                    hoverable
                                    style={{maxWidth: '68%'}}
                                    cover={<img alt="example" src={imgSrc(movie.backdrop_path)}/>}
                                >
                                    <div className={classes.vote} style={{
                                        width: 40,
                                        height: 40,
                                        fontSize: '1em',
                                        marginBottom: 10
                                    }}>
                                        {movie.vote_average * 10}
                                        <span style={{ fontSize: 10, color:"powderblue" }}>%</span>
                                    </div>
                                    <Meta title={movie.title}/>
                                </Card>
                            </Link>
                        </Col>
                    )}
                        {/*<Col span={24}>*/}
                        {/*    <Pagination current={data?.page} total={data?.total_pages}*/}
                        {/*                onChange={(pageNumber, range) => setPage({pageNumber, range})}/>*/}
                        {/*</Col>*/}
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Popular
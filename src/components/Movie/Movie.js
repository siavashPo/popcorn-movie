import {useParams} from "react-router-dom";
import useMovieDB from "../../hooks/useMovieDB";
import imgSrc from '../../helper/image'
import {Card, Col, Row} from "antd";
import { Typography } from 'antd';
const {Meta} = Card;
const { Title } = Typography;

function Movie() {
    const {id} = useParams()
    const {data} = useMovieDB(`movie/${id}`)
    return (
        <Row style={{color: 'white'}}>
            <Col span={3}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src={imgSrc(data.poster_path)}/>}>
                    <Meta style={{color: "white"}} title={data.title}/>
                </Card>
            </Col>
            <Col span={21}>
                <div style={{color: "white"}}>
                    <Title>{data.title}</Title>
                </div>
            </Col>
        </Row>
    )
}

export default Movie
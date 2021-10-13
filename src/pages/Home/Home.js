import {Col, Row, Typography} from 'antd';
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSlider from "../../components/MovieSlider/simpleSlider/SimpleSlider";
import MovieSliderTopSite from "../../components/MovieSlider/slideTopSite/MovieSliderTopSite";
import useTrendMovieDB from "../../hooks/useTrendMovieDB";
import BreakpointSlider from "../../components/MovieSlider/breakpointsSlider/BreakpointsSlider";

const {Title} = Typography;

function Home() {
    const {data: popular} = useMovieDB('movie/popular')
    const {data: topRated} = useMovieDB('movie/top_rated')
    const {data: nowPlaying} = useMovieDB('movie/now_playing')
    const {data: trend} = useTrendMovieDB('movie', 'day')

    return (
        <Row>
            <Col offset={4} span={16} offset={4}>
                <MovieSliderTopSite movies={popular.results || []}/>
                <Title level={2}>Top Rated</Title>
                <SimpleSlider movies={topRated.results || []}/>
                <Title level={2}>Now Playing</Title>
                <SimpleSlider movies={nowPlaying.results || []}/>
                <Title level={2}>Trending</Title>
                <BreakpointSlider movies={trend.results || []}/>
            </Col>
        </Row>
    )
}

export default Home
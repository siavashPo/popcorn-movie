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
    function img() {
        if (nowPlaying.results) {
            return nowPlaying.results[0].still_sizes
        }
    }

    return (
        <>
            <MovieSliderTopSite movies={popular.results || []}/>
            <Col span={6} offset={4}>
                <Title level={2}>Top Rated</Title>
            </Col>
            <SimpleSlider movies={topRated.results || []}/>
            <Col span={6} offset={4}>
                <Title level={2}>Now Playing</Title>
            </Col>
            <SimpleSlider movies={nowPlaying.results || []}/>
            <Col span={6} offset={4}>
                <Title level={2}>Trending</Title>
            </Col>
            <BreakpointSlider movies={trend.results || []}/>
        </>
    )
}

export default Home
import {useEffect, useState} from "react";

export default function useTrendMovieDB(media_type, time_window, options) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=6fbe12673424b0186041f9a7aabfd814&${new URLSearchParams(
                options?.query
            ).toString()}`
        )
            .then(r => r.json())
            .then(setData)
            .finally(() => {
                setLoading(false)
            })
    }, [media_type, time_window, options])
    return {data, loading}
}
import {useEffect, useState} from "react";

export default function useMovieDB(endpoint, options) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=6fbe12673424b0186041f9a7aabfd814&${new URLSearchParams(
                options?.query
            ).toString()}`
        )
            .then(r => r.json())
            .then(setData)
            .finally(() => {
                setLoading(false)
            })
    }, [endpoint, options])
    return {data, loading}
}
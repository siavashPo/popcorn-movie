export default function imgSrc(path, size = 'original') {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
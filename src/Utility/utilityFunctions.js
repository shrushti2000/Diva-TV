export const getSortedVideos = (videos, sortByLatest) => {
    if (sortByLatest === true) {
        return [...videos].sort((a, b) => {
            return new Date(b['uploaded']) - new Date(a['uploaded'])
        })
    }
    return videos
}

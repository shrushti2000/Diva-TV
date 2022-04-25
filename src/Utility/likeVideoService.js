import axios from "axios"
export const addVideoToLikedVideos = async (token, videoItem, dispatch, navigate) => {
    console.log(token)
    if (token) {
        try {
            const res = await axios.post('/api/user/likes',
                { video: videoItem },
                {
                    headers: {
                        authorization: token
                    }
                },
            )
            dispatch({ type: 'ADD_VIDEO_TO_LIKED_VIDEOS', payload: res.data.likes })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    } else {
        navigate('/signin')
    }
}
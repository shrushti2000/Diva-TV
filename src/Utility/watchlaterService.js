import axios from "axios"

export const addToWatchLater = async (token, dispatch, videoItem) => {
    if (token) {
        try {
            const res = await axios.post('/api/user/watchlater',
                { video: videoItem },
                {
                    headers: {
                        authorization: token
                    }
                },
            )
            dispatch({ type: 'ADD_TO_WATCH_LATER', dispatch: res.data.watchlater })
        } catch (error) {
            console.log(error)
        }
    }
}
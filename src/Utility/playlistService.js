import axios from "axios"

export const addNewPlayList = async (playlistName, dispatch, token) => {
    try {
        const res = await axios.post('/api/user/playlists', {
            playlist: { title: playlistName, description: "" }
        },
            {
                headers: {
                    authorization: token,
                },
            })
        dispatch({ type: 'SET_PLAY_LIST', payload: res.data.playlists })

    } catch (error) {
        console.log(error)
    }
}
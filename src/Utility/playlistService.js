import axios from "axios"
import { Navigate } from "react-router-dom"

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

export const addVideoToPlayList = async (playlistId, dispatch, token, currentVideo) => {
    console.log(currentVideo)
  
    try {
        const res = await axios.post(
            `/api/user/playlists/${playlistId}`,
            {
                video: { ...currentVideo }
            },
            {
                headers: {
                    authorization: token,
                },
            }
        );
        dispatch({type:'UPDATE_PLAY_LIST',payload:res.data.playlist})
    } catch (error) {
        console.log(error)
    }
   
}
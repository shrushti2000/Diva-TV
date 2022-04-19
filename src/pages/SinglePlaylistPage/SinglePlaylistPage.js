import React from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar, VideoCard } from '../../components'
import { useData } from '../../Context/Context'

const SinglePlaylistPage = () => {
    const { playlists } = useData()
    const playlistId = useParams('playlistId').playlistId
    const playlist = playlists.find(item => item._id === playlistId)

    return (
        <>
            <div className='main-page-container'>
                <Sidebar />
                <div className='main-page flex-hz'>
                    {playlist.videos.map(item => { return (<VideoCard videoItem={item} />) })}
                </div>
            </div>
        </>
    )
}

export { SinglePlaylistPage }
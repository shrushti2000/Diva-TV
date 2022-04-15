import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './VideoPage.css'
import { Sidebar } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const VideoPage = () => {
    const { videoId } = useParams()
    const [video, setVideo] = useState({})
    console.log(video)
    useEffect(() => {
        async function fetchVideo() {
            try {
                const res = await axios.get(`/api/video/${videoId}`)
                setVideo(res.data.video)
            } catch (e) {
                console.log(e)
            }
        }
        fetchVideo()
    }, [videoId])
    return (
        <div className='main-page-container'>
            <Sidebar />
            <div className='main-page flex-vt'>
                <iframe className='video-container' width="100%"
                    height="100%" src={`https://www.youtube.com/embed/${video.videoId}`}>
                </iframe>
                <p className='video-page-title'>{video.title}</p>
                <div className='video-page-action-container flex-hz'>
                    <div className='video-page-action flex-hz' ><FontAwesomeIcon className='video-page-action-icon' icon={faThumbsUp}></FontAwesomeIcon> <p className='video-page-action-text'>Like</p></div>
                    <div className='video-page-action flex-hz'><FontAwesomeIcon className='video-page-action-icon' icon={faClock}></FontAwesomeIcon> <p className='video-page-action-text'>Watch later</p></div>
                    <div className='video-page-action flex-hz'><FontAwesomeIcon className='video-page-action-icon' icon={faCirclePlay}></FontAwesomeIcon> <p className='video-page-action-text'>Save</p></div>
                </div>
                <p className='page-subtitle'>Description</p>
                <p className='video-page-desc'>{video.description}</p>
            </div>
        </div>
    )
}
export { VideoPage }
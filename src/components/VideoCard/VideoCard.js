import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Videocard.css'

const VideoCard = ({ videoItem }) => {
    const navigate = useNavigate()
    const openVideoPage = () => {
        navigate(`/video/${videoItem._id}`)
    }

    return (
        <div className='video-item-container flex-vt' onClick={openVideoPage}>
            <div className='video-img-container'>
                <img className="video-img"
                    src={`http://i1.ytimg.com/vi/${videoItem.videoId}/0.jpg`}
                    alt="video-thumbnail"

                ></img>
            </div>

            <div className='video-item-footer flex-hz'>
                <div className='video-item-footer-1 flex-vt'>
                    <p className='video-title'>{videoItem.title}</p>
                    <p className='video-category'>{videoItem.category}</p>
                </div>
                <div className='video-item-footer-2'>
                    <FontAwesomeIcon className="cta-icon" icon={faEllipsisVertical}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export { VideoCard }
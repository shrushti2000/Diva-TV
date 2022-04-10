import React from 'react'
import { Sidebar } from '../../components'
import './VideoListingpage.css'
const VideoListingpage = () => {
    return (
        <div className='main-page-container'>
            <Sidebar />
            <div className='main-page'>
                <h1>video listing</h1>
            </div>
        </div>
    )
}

export { VideoListingpage }
import { faCirclePlay, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sidebar } from '../../components'
import { useData } from '../../Context/Context'
import './Playlistpage.css'

const Playlistpage = () => {
    const { playlists } = useData()
    console.log(playlists)
    return (
        <div className='main-page-container'>
            <Sidebar />
            <div className='main-page flex-hz'>
                {playlists.map(playlist => {
                    return (<>
                        <div className='playlist-preview-container flex-vt'>
                            <div className='playlist-preview-container-col1'>
                                <img src={`http://i1.ytimg.com/vi/${playlist.videos[0].videoId}/0.jpg`} className="playlist-preview-img" />
                                <div className='video-count-overlay flex-hz'>
                                    <FontAwesomeIcon className='preview-icons circle-play' icon={faCirclePlay}></FontAwesomeIcon>
                                    <p className='playlist-item-count'>{playlist.videos.length}+</p>
                                </div>
                            </div>
                            <div className='playlist-preview-container-col2 flex-hz'>
                                <p className='playlist-title'>{playlist.title}</p>
                                <FontAwesomeIcon className='preview-icons' icon={faEllipsisVertical} />
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}
export { Playlistpage }
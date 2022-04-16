import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../Context/AuthProvider'
import { useData } from '../../Context/Context'
import { addNewPlayList } from '../../Utility/playlistService'
import './PlayListModal.css'

const PlayListModal = () => {
    const { dispatch, playlists, showPlaylistModal } = useData()
    const { token } = useAuth()
    const [showInputBox, setShowInputBox] = useState(false)
    const [playlistName, setPlayListName] = useState('')

    const createPlayListHandler = () => {
        addNewPlayList(playlistName, dispatch, token)
        setPlayListName('')
    }

    return (
        <>
            <div class="modal-overlay flex-vt">
                <div class="modal-box  flex-vt">
                    <div class="modal-header flex-hz">
                        <h4>Save To</h4>
                        <i class="fa fa-times modal-close-btn" onClick={() => dispatch({ type: 'SHOW_PLAYLIST_MODAL', payload: !showPlaylistModal })}></i>
                    </div>
                    <div class="modal-content">
                        <div className='playlist-selection-container flex-vt'>
                            {playlists.map(playlist => <><span className=' flex-hz'><input className='playlist-selection-item-checkbox' type="checkbox" /><label className='playlist-selection-item-label'>{playlist.title}</label></span></>)}
                        </div>
                    </div>
                    {showInputBox && <div className='flex-hz'><label className='playlist-label'>Name</label><input value={playlistName} onChange={(e) => setPlayListName(e.target.value)} className='playlist-input' type="text" placeholder='enter playlist name' /></div>}
                    {playlistName === '' ? <> <button className='btn btn-secondary' onClick={(e) => setShowInputBox(!showInputBox)} >Create new PlayList</button></> : <> <button className='btn btn-secondary' onClick={createPlayListHandler}>Add to PlayList</button></>}
                </div>
            </div>
        </>
    )
}
export { PlayListModal }
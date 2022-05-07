import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/Context";
import {
  addNewPlayList,
  addVideoToPlayList,
} from "../../Utility/playlistService";
import "./UploadVideoModal.css";

const UploadVideoModal = ({showVideoModal,setShowVideoModal}) => {
  const { dispatch } = useData();
  const { token } = useAuth();
  const {categories}=useData()
  const navigate = useNavigate();
 const [playlistName, setPlayListName] = useState("");
const [videoDetails,setVideoDetails]=useState({
  _id:uuidv4(),
  videoId:'',
  title:'',
  category:'',
  description:'',
uploaded:new Date()
})
  
const uploadNewVideo=()=>{
  dispatch({type:'ADD_NEW_VIDEO',payload:videoDetails})
  dispatch({type:'SET_NEW_VIDEOS',payload:videoDetails})
  setShowVideoModal(!showVideoModal)
}

  return (
    <>
      <div class="modal-overlay flex-vt">
        <div class="modal-box  flex-vt">
           <div className="row1 flex-hz">
           <p className="upload-video-title text-md">Upload Video</p>
            <i
              class="fa fa-times modal-close-btn"
              onClick={() =>
                setShowVideoModal(!showVideoModal)
              }
            ></i>
           </div>
         <div className="flex-hz">
             <p className="label">Enter YouTube Video URl</p>
             <input type="text" className="upload-video-input" placeholder="enter YT video URL" onChange={(e)=>setVideoDetails({
               ...videoDetails,
               videoId:e.target.value.split('v=')[1]
             })}/>
         </div>
         <div className="flex-hz">
             <p className="label">Enter Title</p>
             <input type="text" className="upload-video-input" placeholder="enter title" onChange={(e)=>setVideoDetails({
               ...videoDetails,
               title:e.target.value
             })}/>
         </div>
         <div className="flex-hz">
             <p className="label">Enter category</p>
            <select onChange={(e)=>setVideoDetails({
               ...videoDetails,
               category:e.target.value
             })} className="upload-video-select-category">{categories.map(category=><option>{category.categoryName}</option>)}</select>
         </div>
         <div className="flex-hz">
             <p className="label">Enter description</p>
             <textarea placeholder="enter description..." type="text" className="upload-video-input" onChange={(e)=>setVideoDetails({
               ...videoDetails,
               description:e.target.value
             })}/>
         </div>
         <button className="btn btn-secondary" onClick={()=>uploadNewVideo(videoDetails)}>Upload Video</button>
        </div>
      </div>
    </>
  );
};
export { UploadVideoModal };

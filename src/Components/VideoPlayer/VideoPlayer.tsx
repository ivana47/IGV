import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

interface VideoPlayerProps {
    playState: boolean;
    setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  }

const VideoPlayer: React.FC<VideoPlayerProps> = ({playState,setPlayState}) => {

    const player= useRef(null);
    
    const closePlayer =(e : React.MouseEvent<HTMLDivElement>)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
    <video src={video} autoPlay={playState} muted controls></video>
</div>
)
}

export default VideoPlayer
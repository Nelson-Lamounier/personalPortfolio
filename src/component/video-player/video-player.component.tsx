import { FC } from "react";
import {VideoWrapper, Controls, VideoBarWrapper, VideoBar, Button, Video,} from "./video-player.style"

import { FaPlayCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


interface VideoPlayerProps {
  src: string; // Require `src` as a prop
}

const VideoPlayer: FC<VideoPlayerProps>  = ({ src }) => {
    return (
        <VideoWrapper>
        <Video src={src} controls></Video>
        <Controls>
          <VideoBarWrapper>
            <VideoBar />
          </VideoBarWrapper>
          <Button>
            <FaPlayCircle />
          </Button>
        </Controls>
      </VideoWrapper>
    )
}

export default VideoPlayer;
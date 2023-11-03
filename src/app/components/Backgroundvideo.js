
import ReactPlayer from "react-player";
import video from "../assests/images/backgroundvideo.mp4"
import React, { useEffect, useState } from "react";

const BackgroundVideo = () => {
  const videoUrl = "video"; 

  const videoStyle = {
    // position: "relative",
    top: 0,
    left: 0,
    width: "250vh",
    // height: "auto",
    zIndex: -1,
  };

  return (
    <>
      
      <div style={videoStyle}>
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width="250vh"
          height="auto"
          
        />
      </div>
     
    </>
  );
};

export default BackgroundVideo;


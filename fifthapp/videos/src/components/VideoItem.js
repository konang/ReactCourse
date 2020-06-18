import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      className="video-item item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img
        className="ui image"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="headder">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

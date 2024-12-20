import React from 'react';
import './VideoList.css';

const VideoList = ({ videos }) => {
  if (!videos.length) {
    return <div className="no-videos">Aucune vidéo trouvée</div>;
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <div className="video-thumbnail">
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} 
            />
            <div className="play-button">▶</div>
          </div>
          <div className="video-info">
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <div className="video-meta">
              <span className="channel-name">{video.snippet.channelTitle}</span>
              <span className="publish-date">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
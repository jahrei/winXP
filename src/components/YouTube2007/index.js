import React, { useState } from 'react';
import styled from 'styled-components';

function YouTube2007() {
  const [rating, setRating] = useState(4);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // The specific video requested
  const currentVideo = {
    id: 'rvYZRskNV3w',
    title: 'This is Sparta Remix',
    uploader: 'SpartaRemixGuy',
    uploadDate: 'March 8, 2007',
    views: '5,847,291',
    duration: '0:31',
    description: 'The original Sparta remix! King Leonidas kicks the Persian messenger into the pit with some epic remix magic. THIS IS SPARTAAAAA! Original scene from 300 movie remixed with epic effects and sound distortion.',
    tags: ['sparta', 'remix', '300', 'leonidas', 'this', 'is', 'sparta', 'meme', 'ytmnd', 'classic']
  };

  const relatedVideos = [
    { title: 'Epic Leonidas Scream', uploader: 'MovieClipMaster', views: '2,394,582', duration: '0:15', thumb: '⚔️' },
    { title: '300 THIS IS SPARTA Original Scene', uploader: 'MovieBuffs2007', views: '8,472,103', duration: '1:23', thumb: '🏛️' },
    { title: 'Sparta Remix Extended Version', uploader: 'RemixKing', views: '1,847,392', duration: '2:14', thumb: '🎵' },
    { title: 'YTMND: This is SPARTA!', uploader: 'YTMNDCollector', views: '934,847', duration: '0:45', thumb: '💥' },
    { title: 'Leonidas vs Xerxes Epic Battle', uploader: 'EpicMovieMoments', views: '4,238,194', duration: '3:27', thumb: '⚔️' },
    { title: 'Sparta Techno Remix Dance', uploader: 'TechnoMixer2007', views: '1,523,847', duration: '2:56', thumb: '🕺' },
    { title: '300 Movie Trailer HD', uploader: 'WarnerBrosOfficial', views: '12,847,593', duration: '2:31', thumb: '🎬' },
    { title: 'Best Sparta Remixes Compilation', uploader: 'MemeMaster', views: '847,291', duration: '5:42', thumb: '📺' }
  ];

  const comments = [
    { user: 'YouTube', comment: 'Featured on our homepage! This remix is taking the internet by storm.', time: '2 months ago' },
    { user: 'moviefan2007', comment: 'ROFL!!! THIS IS SPARTAAAAA! Best remix ever!!!', time: '2 months ago' },
    { user: 'remixlover', comment: 'dude this is so epic!! the sound effects are perfect', time: '1 month ago' },
    { user: '300FAN', comment: 'Leonidas would be proud. TONIGHT WE DINE IN HELL!', time: '1 month ago' },
    { user: 'ytmndkid', comment: 'This started on YTMND and now its everywhere lol', time: '3 weeks ago' },
    { user: 'spartanwarrior', comment: 'ive watched this like 50 times and its still funny', time: '2 weeks ago' },
    { user: 'internetmeme', comment: 'THIS IS THE BIRTH OF A MEME RIGHT HERE', time: '1 week ago' },
    { user: 'epicfail2007', comment: 'Persian messenger got PWNED!!!!! XD', time: '3 days ago' }
  ];

  return (
    <StyledDiv>
      {/* YouTube Header */}
      <div className="youtube-header">
        <div className="youtube-logo">
          <span className="you">You</span><span className="tube">Tube</span>
        </div>
        <div className="header-nav">
          <a href="#">Home</a>
          <a href="#">Videos</a>
          <a href="#">Channels</a>
          <a href="#">Community</a>
        </div>
        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="user-links">
            <a href="#">Sign Up</a> | <a href="#">Log In</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column - Video Player */}
        <div className="video-column">
          <div className="video-player">
            <div className="player-container">
              <div className="fake-video">
                <div className="play-button">▶</div>
                <div className="video-title-overlay">{currentVideo.title}</div>
                <div className="duration-overlay">{currentVideo.duration}</div>
              </div>
            </div>
          </div>

          <div className="video-info">
            <h2>{currentVideo.title}</h2>
            <div className="video-meta">
              <div className="meta-left">
                <span>From: <a href="#">{currentVideo.uploader}</a></span>
                <span>Added: {currentVideo.uploadDate}</span>
                <span>Views: {currentVideo.views}</span>
              </div>
              <div className="meta-right">
                <div className="rating">
                  <span>Rate: </span>
                  {[1,2,3,4,5].map(star => (
                    <span 
                      key={star}
                      className={`star ${star <= rating ? 'filled' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                  <span className="rating-text">({rating}/5)</span>
                </div>
              </div>
            </div>

            <div className="video-actions">
              <button 
                className={`subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
              <button>Add to Favorites</button>
              <button>Share Video</button>
              <button>Flag as Inappropriate</button>
            </div>

            <div className="video-description">
              <h3>Description:</h3>
              <p>{currentVideo.description}</p>
              <div className="tags">
                <strong>Tags:</strong> {currentVideo.tags.join(', ')}
              </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments & Responses</h3>
              <div className="comment-form">
                <textarea placeholder="Comment on this video..."></textarea>
                <button>Post Comment</button>
              </div>
              
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <div className="comment-header">
                      <strong>{comment.user}</strong> <span className="comment-time">({comment.time})</span>
                    </div>
                    <div className="comment-text">{comment.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Related Videos */}
        <div className="sidebar">
          <div className="related-videos">
            <h3>Related Videos</h3>
            {relatedVideos.map((video, index) => (
              <div key={index} className="related-item">
                <div className="related-thumb">{video.thumb}</div>
                <div className="related-info">
                  <div className="related-title">{video.title}</div>
                  <div className="related-meta">
                    <div>From: {video.uploader}</div>
                    <div>Views: {video.views}</div>
                    <div>{video.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="promote-box">
            <h4>Promote Your Video</h4>
            <p>Get more views for your videos!</p>
            <button>Learn More</button>
          </div>

          <div className="featured-videos">
            <h4>Featured Videos</h4>
            <div className="featured-item">
              <div className="featured-thumb">🎬</div>
              <div>
                <div>Amazing Skateboard Tricks</div>
                <div>Views: 2,847,392</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <a href="#">About</a> |
          <a href="#">Contact</a> |
          <a href="#">Terms of Use</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Copyright</a> |
          <a href="#">Developers</a>
        </div>
        <div className="footer-text">
          © 2007 YouTube, LLC
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  background: white;
  font-family: Arial, sans-serif;
  font-size: 11px;
  overflow-y: auto;

  .youtube-header {
    background: white;
    border-bottom: 1px solid #ccc;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .youtube-logo {
      font-size: 28px;
      font-weight: bold;
      
      .you {
        color: #000;
      }
      
      .tube {
        color: #c00;
        background: #c00;
        color: white;
        padding: 2px 4px;
        border-radius: 3px;
      }
    }

    .header-nav {
      display: flex;
      gap: 20px;
      
      a {
        color: #0066cc;
        text-decoration: none;
        font-size: 13px;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;

      .search-box {
        display: flex;
        
        input {
          padding: 4px;
          border: 1px solid #ccc;
          font-size: 11px;
          width: 200px;
        }
        
        button {
          padding: 4px 8px;
          background: #f0f0f0;
          border: 1px solid #ccc;
          border-left: none;
          font-size: 11px;
          cursor: pointer;
        }
      }

      .user-links {
        font-size: 11px;
        
        a {
          color: #0066cc;
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .main-content {
    display: flex;
    gap: 15px;
    padding: 15px;
    max-width: 1000px;
  }

  .video-column {
    flex: 2;
  }

  .video-player {
    margin-bottom: 15px;

    .player-container {
      position: relative;
      background: #000;
      width: 100%;
      height: 350px;
      border: 1px solid #ccc;

      .fake-video {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #333, #666);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .play-button {
          font-size: 60px;
          color: white;
          cursor: pointer;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }

        .video-title-overlay {
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          font-size: 12px;
          background: rgba(0,0,0,0.7);
          padding: 4px 8px;
          border-radius: 3px;
        }

        .duration-overlay {
          position: absolute;
          bottom: 10px;
          right: 10px;
          color: white;
          font-size: 11px;
          background: rgba(0,0,0,0.7);
          padding: 2px 6px;
          border-radius: 3px;
        }
      }
    }
  }

  .video-info {
    h2 {
      font-size: 18px;
      margin: 0 0 10px 0;
      color: #333;
    }

    .video-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;

      .meta-left {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 11px;
        color: #666;

        a {
          color: #0066cc;
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .meta-right {
        .rating {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 11px;

          .star {
            color: #ccc;
            cursor: pointer;
            font-size: 16px;
            
            &.filled {
              color: #ffcc00;
            }
            
            &:hover {
              color: #ffcc00;
            }
          }

          .rating-text {
            margin-left: 5px;
            color: #666;
          }
        }
      }
    }

    .video-actions {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;

      button {
        padding: 4px 8px;
        background: #f0f0f0;
        border: 1px solid #ccc;
        font-size: 11px;
        cursor: pointer;
        
        &:hover {
          background: #e0e0e0;
        }

        &.subscribe-btn {
          background: #ffcc00;
          border-color: #ff9900;
          font-weight: bold;
          
          &.subscribed {
            background: #00cc00;
            border-color: #009900;
            color: white;
          }
        }
      }
    }

    .video-description {
      margin-bottom: 20px;
      padding: 10px;
      background: #f9f9f9;
      border: 1px solid #eee;

      h3 {
        margin: 0 0 8px 0;
        font-size: 13px;
      }

      p {
        margin: 0 0 10px 0;
        line-height: 1.4;
        font-size: 11px;
      }

      .tags {
        font-size: 11px;
        color: #666;
      }
    }
  }

  .comments-section {
    h3 {
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    .comment-form {
      margin-bottom: 15px;

      textarea {
        width: 100%;
        height: 60px;
        padding: 5px;
        border: 1px solid #ccc;
        font-size: 11px;
        resize: vertical;
        margin-bottom: 5px;
      }

      button {
        padding: 4px 12px;
        background: #0066cc;
        color: white;
        border: none;
        font-size: 11px;
        cursor: pointer;
        
        &:hover {
          background: #0055aa;
        }
      }
    }

    .comments-list {
      .comment {
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;

        .comment-header {
          font-size: 11px;
          margin-bottom: 3px;

          strong {
            color: #0066cc;
          }

          .comment-time {
            color: #666;
          }
        }

        .comment-text {
          font-size: 11px;
          line-height: 1.4;
        }
      }
    }
  }

  .sidebar {
    flex: 1;
    
    .related-videos {
      margin-bottom: 20px;

      h3 {
        font-size: 13px;
        margin: 0 0 10px 0;
        color: #c00;
      }

      .related-item {
        display: flex;
        gap: 8px;
        margin-bottom: 10px;
        cursor: pointer;
        
        &:hover {
          background: #f9f9f9;
        }

        .related-thumb {
          width: 60px;
          height: 45px;
          background: #f0f0f0;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .related-info {
          flex: 1;

          .related-title {
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 3px;
            color: #0066cc;
          }

          .related-meta {
            font-size: 10px;
            color: #666;
            line-height: 1.2;
          }
        }
      }
    }

    .promote-box, .featured-videos {
      background: #f9f9f9;
      border: 1px solid #eee;
      padding: 10px;
      margin-bottom: 15px;

      h4 {
        margin: 0 0 8px 0;
        font-size: 12px;
        color: #c00;
      }

      p {
        margin: 0 0 8px 0;
        font-size: 11px;
      }

      button {
        padding: 3px 8px;
        background: #0066cc;
        color: white;
        border: none;
        font-size: 10px;
        cursor: pointer;
      }

      .featured-item {
        display: flex;
        gap: 8px;
        align-items: center;

        .featured-thumb {
          width: 40px;
          height: 30px;
          background: #f0f0f0;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        div div {
          font-size: 10px;
          line-height: 1.2;
        }
      }
    }
  }

  .footer {
    background: #f9f9f9;
    border-top: 1px solid #ccc;
    padding: 10px 15px;
    font-size: 10px;
    color: #666;
    text-align: center;

    .footer-links {
      margin-bottom: 5px;
      
      a {
        color: #0066cc;
        text-decoration: none;
        margin: 0 3px;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default YouTube2007; 
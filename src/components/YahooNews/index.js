import React from 'react';
import styled from 'styled-components';

function YahooNews({ goMain, goJahreiLabs }) {
  return (
    <StyledDiv>
      <div className="yahoo-header">
        <div className="yahoo-logo">Yahoo!</div>
        <div className="yahoo-nav">
          <a href="#home" onClick={goMain}>Home</a>
          <a href="#mail">Mail</a>
          <a href="#news" className="active">News</a>
          <a href="#finance">Finance</a>
          <a href="#sports">Sports</a>
          <a href="#entertainment">Entertainment</a>
          <a href="#weather">Weather</a>
          <a href="#games">Games</a>
          <a href="#jahrei" onClick={goJahreiLabs}>jahrei labs</a>
        </div>
      </div>

      <div className="yahoo-banner-ad">
        <div className="ad-content">🎮 Play Mahjong - FREE! Click Here! 🎮</div>
      </div>

      <div className="content-wrapper">
        <div className="main-content">
          <div className="news-header">
            <h1>Yahoo! News</h1>
            <div className="date">Monday, January 1, 2000 - 12:00 AM PST</div>
          </div>

          <div className="breaking-news">
            <div className="breaking-label">BREAKING NEWS</div>
            <div className="breaking-text">Y2K Bug Fails to Materialize - World Continues to Function</div>
          </div>

          <div className="main-story">
            <h2><a href="#story1">Millennium Celebrations Around the Globe End Without Major Computer Failures</a></h2>
            <p>
              NEW YORK (Reuters) - As the last time zones on Earth welcomed the year 2000, 
              the feared Y2K computer bug appeared to be more of a whimper than the bang 
              many had predicted. Reports from around the world indicate minimal disruptions...
            </p>
            <div className="story-meta">
              <span>Reuters - 2 hours ago</span> | 
              <a href="#related">Related Stories</a> | 
              <a href="#email">Email this story</a>
            </div>
          </div>

          <div className="news-columns">
            <div className="left-column">
              <h3>Top Stories</h3>
              <ul className="news-list">
                <li><a href="#story2">Internet Stock Prices Continue Meteoric Rise</a></li>
                <li><a href="#story3">AOL Instant Messenger Reaches 50 Million Users</a></li>
                <li><a href="#story4">Napster Usage Explodes as Music Industry Fights Back</a></li>
                <li><a href="#story5">PlayStation 2 Launch Expected This Year</a></li>
                <li><a href="#story6">Nokia Unveils New Mobile Phone with Built-in Camera</a></li>
                <li><a href="#story7">Microsoft Windows 2000 Released to Businesses</a></li>
                <li><a href="#story8">Pets.com Super Bowl Ad Campaign Launches</a></li>
                <li><a href="#story9">DVD Players Becoming More Affordable</a></li>
              </ul>

              <h3>Technology</h3>
              <ul className="news-list">
                <li><a href="#tech1">Web Portals Battle for Homepage Dominance</a></li>
                <li><a href="#tech2">Broadband Internet May Replace Dial-up "Soon"</a></li>
                <li><a href="#tech3">E-commerce Sites Struggle with Security Concerns</a></li>
                <li><a href="#tech4">Palm Pilot Sales Surge in Business Market</a></li>
              </ul>
            </div>

            <div className="right-column">
              <div className="yahoo-box">
                <h3>Yahoo! Services</h3>
                <ul>
                  <li><a href="#mail">📧 Yahoo! Mail - FREE!</a></li>
                  <li><a href="#messenger">💬 Yahoo! Messenger</a></li>
                  <li><a href="#games">🎮 Yahoo! Games</a></li>
                  <li><a href="#shopping">🛒 Yahoo! Shopping</a></li>
                  <li><a href="#auctions">🔨 Yahoo! Auctions</a></li>
                </ul>
              </div>

              <div className="ad-box">
                <div className="ad-header">Advertisement</div>
                <div className="ad-content">
                  <div style={{background: 'linear-gradient(45deg, #ff0000, #ffff00)', padding: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
                    💾 BURN YOUR OWN CDs! 💾<br/>
                    CD-R Drives Starting at $99!<br/>
                    <small>Click Here for Amazing Deals!</small>
                  </div>
                </div>
              </div>

              <div className="weather-box">
                <h3>Weather</h3>
                <div className="weather-content">
                  <div>🌤️ San Francisco: 62°F</div>
                  <div>☀️ Los Angeles: 75°F</div>
                  <div>🌨️ New York: 34°F</div>
                  <div>⛅ Chicago: 28°F</div>
                </div>
              </div>

              <div className="stock-box">
                <h3>Stocks</h3>
                <div className="stock-content">
                  <div>📈 NASDAQ: 4,069.31 (+85.6)</div>
                  <div>📈 Yahoo!: $432.68 (+12.4)</div>
                  <div>📈 Amazon: $76.12 (+3.2)</div>
                  <div>📈 AOL: $73.06 (+1.8)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="yahoo-footer">
        <div className="footer-links">
          <a href="#about">About Yahoo!</a> |
          <a href="#jobs">Jobs</a> |
          <a href="#privacy">Privacy Policy</a> |
          <a href="#terms">Terms of Service</a> |
          <a href="#feedback">Feedback</a>
        </div>
        <div className="copyright">
          Copyright © 2000 Yahoo! Inc. All rights reserved.
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background: white;
  font-family: Arial, sans-serif;
  font-size: 13px;
  min-height: 100vh;

  .yahoo-header {
    background: linear-gradient(to bottom, #7B1FA2, #4A148C);
    color: white;
    padding: 8px 0;
    border-bottom: 2px solid #333;
  }

  .yahoo-logo {
    font-size: 24px;
    font-weight: bold;
    color: #FFEB3B;
    text-align: center;
    margin-bottom: 8px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }

  .yahoo-nav {
    text-align: center;
    
    a {
      color: white;
      text-decoration: none;
      margin: 0 8px;
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 12px;
      
      &:hover {
        background: rgba(255,255,255,0.2);
        text-decoration: underline;
      }
      
      &.active {
        background: rgba(255,255,255,0.3);
        font-weight: bold;
      }
    }
  }

  .yahoo-banner-ad {
    background: linear-gradient(45deg, #FF5722, #FF9800);
    color: white;
    text-align: center;
    padding: 8px;
    font-weight: bold;
    animation: blink 2s linear infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.7; }
  }

  .content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
  }

  .news-header {
    border-bottom: 2px solid #7B1FA2;
    margin-bottom: 15px;
    
    h1 {
      color: #7B1FA2;
      margin: 0;
      font-size: 24px;
    }
    
    .date {
      color: #666;
      font-size: 11px;
      margin-top: 4px;
    }
  }

  .breaking-news {
    background: #FF0000;
    color: white;
    padding: 8px;
    margin-bottom: 15px;
    border: 2px solid #CC0000;
    
    .breaking-label {
      font-weight: bold;
      font-size: 12px;
    }
    
    .breaking-text {
      font-size: 14px;
      margin-top: 4px;
    }
  }

  .main-story {
    background: #f5f5f5;
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 20px;
    
    h2 {
      margin: 0 0 10px 0;
      
      a {
        color: #0000EE;
        text-decoration: none;
        font-size: 18px;
        
        &:visited {
          color: #551A8B;
        }
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
    
    p {
      line-height: 1.4;
      margin-bottom: 10px;
    }
    
    .story-meta {
      font-size: 11px;
      color: #666;
      
      a {
        color: #0000EE;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .news-columns {
    display: flex;
    gap: 20px;
  }

  .left-column {
    flex: 2;
    
    h3 {
      color: #7B1FA2;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;
      margin-bottom: 10px;
    }
    
    .news-list {
      margin: 0 0 20px 0;
      padding: 0;
      
      li {
        list-style: none;
        margin: 6px 0;
        padding-left: 12px;
        position: relative;
        
        &:before {
          content: "•";
          color: #7B1FA2;
          position: absolute;
          left: 0;
        }
        
        a {
          color: #0000EE;
          text-decoration: none;
          
          &:visited {
            color: #551A8B;
          }
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .right-column {
    flex: 1;
  }

  .yahoo-box, .ad-box, .weather-box, .stock-box {
    border: 1px solid #ccc;
    margin-bottom: 15px;
    background: #f9f9f9;
    
    h3 {
      background: #7B1FA2;
      color: white;
      margin: 0;
      padding: 6px 10px;
      font-size: 12px;
    }
    
    ul, .weather-content, .stock-content {
      margin: 0;
      padding: 10px;
      
      li {
        list-style: none;
        margin: 4px 0;
        
        a {
          color: #0000EE;
          text-decoration: none;
          font-size: 11px;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    
    .weather-content div, .stock-content div {
      margin: 4px 0;
      font-size: 11px;
    }
  }

  .ad-box {
    .ad-header {
      background: #666;
      color: white;
      padding: 4px 8px;
      font-size: 10px;
      text-align: center;
    }
    
    .ad-content {
      padding: 8px;
      text-align: center;
      
      small {
        font-size: 9px;
      }
    }
  }

  .yahoo-footer {
    background: #f0f0f0;
    border-top: 1px solid #ccc;
    padding: 15px;
    margin-top: 30px;
    text-align: center;
    
    .footer-links {
      margin-bottom: 8px;
      
      a {
        color: #0000EE;
        text-decoration: none;
        font-size: 11px;
        margin: 0 4px;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
    
    .copyright {
      font-size: 10px;
      color: #666;
    }
  }
`;

export default YahooNews; 
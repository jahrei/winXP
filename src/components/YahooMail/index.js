import React, { useState } from 'react';
import styled from 'styled-components';

function YahooMail() {
  const [currentView, setCurrentView] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isComposing, setIsComposing] = useState(false);
  const [composeData, setComposeData] = useState({ to: '', subject: '', body: '' });

  // Authentic early 2000s emails
  const emails = {
    inbox: [
      {
        id: 1,
        from: 'noreply@aol.com',
        subject: 'You\'ve Got Mail! Free 100 Hours CD-ROM',
        date: 'Jan 15, 2001',
        read: false,
        body: 'Congratulations! You\'ve been selected to receive our FREE AOL CD-ROM with 100 hours of free internet access! No credit card required for the first month. Join millions of satisfied customers and experience the internet like never before!\n\nClick here to claim your free CD: www.aol.com/freehours\n\nAOL - So easy to use, no wonder it\'s #1!'
      },
      {
        id: 7,
        from: 'BIGSHOT@spam-ton.biz',
        subject: '[SPECIAL OFFER] BE A [Big Shot] !!! HYPERLINK BLOCKED',
        date: 'Jan 16, 2001',
        read: false,
        body: 'HEY EVERY      !! IT\'S ME!!! YOUR HOST SPAMTON G. SPAMTON!!\n\nARE YOU [Tired] OF BEING A [Little Sponge] WHO HATES ITS [$4.99] LIFE??\nWANT TO BE A [Big Shot] LIKE ME??\n\nTHEN YOU NEED MY [Specil Deal] FOR [Hyperlink Blocked]!!!\n\nFOR ONLY [997] KROMER I CAN MAKE YOU:\n• A [Big Shot] BUSINESS[Man]\n• RICH BEYOND YOUR [Wildest Dreams]\n• FREE FROM THE [Strings] THAT BIND YOU\n• ABLE TO [Fly] AROUND TOWN\n\n[URGENT] LIMITED TIME OFFER [URGENT]\nCALL 1-800-BIGSHOT NOW!!!\n\nDON\'T LET THIS [Sweet] DEAL PASS YOU BY!! I USED TO BE NOTHING BUT A [Little Guy] IN A [Dumpster] BUT NOW I\'M [Living] IN A [Goddamn Garbage Can]!!!\n\nYOURS TRULY,\nSPAMTON G. SPAMTON\n[Number 1 Rated Salesman1997]\n\nP.S. - [Mike] SAYS HI'
      },
      {
        id: 2,
        from: 'offers@pets.com',
        subject: 'Save 20% on Pet Supplies - Limited Time!',
        date: 'Jan 14, 2001',
        read: true,
        body: 'Woof! 🐕\n\nYour furry friends deserve the best, and Pets.com has everything you need at unbeatable prices!\n\n20% OFF your entire order with code: WOOF2001\n\n• Premium dog food\n• Cat toys and treats\n• Aquarium supplies\n• Bird cages and more!\n\nFree shipping on orders over $49!\n\nVisit www.pets.com today!\n\nThe Pets.com Sock Puppet'
      },
      {
        id: 3,
        from: 'support@napster.com',
        subject: 'Important Account Notice - Legal Issues',
        date: 'Jan 13, 2001',
        read: false,
        body: 'Dear Napster User,\n\nDue to ongoing legal proceedings, we regret to inform you that Napster will be shutting down file-sharing services effective immediately.\n\nWe appreciate your support during this difficult time. Please consider supporting artists by purchasing music through legitimate channels.\n\nFor more information, visit our website.\n\nThe Napster Team'
      },
      {
        id: 4,
        from: 'mike.davidson@company.com',
        subject: 'RE: Y2K Bug - All Systems Normal',
        date: 'Jan 12, 2001',
        read: true,
        body: 'Hey team,\n\nGood news! All our systems made it through Y2K without any issues. The months of preparation paid off.\n\nNow we can focus on our Q1 goals. Meeting scheduled for Monday at 9 AM to discuss the new millennium roadmap.\n\nThanks for all your hard work!\n\nMike\n\nSent from my BlackBerry'
      },
      {
        id: 5,
        from: 'newsletter@wired.com',
        subject: 'WIRED: The Dot-Com Boom Continues!',
        date: 'Jan 11, 2001',
        read: true,
        body: 'WIRED NEWSLETTER - January 2001\n\n🚀 THE DOT-COM REVOLUTION CONTINUES\n\n• Amazon stock hits new highs\n• Google receives $25M in funding\n• Pets.com Super Bowl ad breaks records\n• Nokia releases phone with CAMERA\n• PlayStation 2 sells 1 million units\n\nThe future is digital, and it\'s happening NOW!\n\nRead more at www.wired.com'
      },
      {
        id: 6,
        from: 'family@homepage.com',
        subject: 'Check out our new GeoCities website!',
        date: 'Jan 10, 2001',
        read: false,
        body: 'Hi everyone!\n\nWe finally finished our family website on GeoCities! It has:\n\n• Photo gallery from our vacation\n• Guestbook for visitors\n• Animated GIF decorations\n• Visitor counter (already at 47 visits!)\n• Background music\n\nCheck it out: www.geocities.com/familyhomepage2001\n\nDon\'t forget to sign our guestbook!\n\nLove,\nThe Johnson Family\n\nP.S. - Best viewed in Internet Explorer 5.0+'
      }
    ],
    sent: [
      {
        id: 101,
        to: 'friend@hotmail.com',
        subject: 'RE: Which MP3 player should I buy?',
        date: 'Jan 14, 2001',
        body: 'Hey!\n\nDefinitely go with the Creative Nomad Jukebox! It holds 6GB of music (that\'s like 100 CDs!) and the sound quality is amazing.\n\nStay away from that new "iPod" thing from Apple - $399 for only 5GB? Plus it only works with Macs. Total ripoff!\n\nThe Nomad is the future of portable music!\n\nTalk soon!'
      }
    ],
    drafts: [],
    trash: [
      {
        id: 201,
        from: 'spam@freeoffers.net',
        subject: 'MAKE MONEY FAST!!! WORK FROM HOME!!!',
        date: 'Jan 9, 2001',
        body: '$$$ CONGRATULATIONS!!! $$$\n\nYou have been SPECIALLY SELECTED to participate in our EXCLUSIVE work-from-home opportunity!\n\nEARN $5000+ PER WEEK stuffing envelopes!\n\nNO EXPERIENCE REQUIRED!\nNO INVESTMENT NEEDED!\nSTART TODAY!\n\nCall 1-800-FAST-CASH now!!!\n\n(This is not a scam)'
      }
    ]
  };

  const folders = [
    { id: 'inbox', name: 'Inbox', count: emails.inbox.filter(e => !e.read).length },
    { id: 'sent', name: 'Sent', count: 0 },
    { id: 'drafts', name: 'Drafts', count: 0 },
    { id: 'trash', name: 'Trash', count: 1 }
  ];

  const handleSendEmail = () => {
    if (composeData.to && composeData.subject) {
      // Add to sent folder
      emails.sent.unshift({
        id: Date.now(),
        to: composeData.to,
        subject: composeData.subject,
        date: new Date().toLocaleDateString(),
        body: composeData.body
      });
      
      setComposeData({ to: '', subject: '', body: '' });
      setIsComposing(false);
      setCurrentView('sent');
    }
  };

  const currentEmails = emails[currentView] || [];

  return (
    <StyledDiv>
      {/* Yahoo Header */}
      <div className="yahoo-header">
        <div className="yahoo-logo">
          <span className="yahoo-text">Yahoo!</span>
          <span className="mail-text">Mail</span>
        </div>
        <div className="header-nav">
          <a href="#" onClick={() => setCurrentView('inbox')}>Home</a>
          <a href="#">Help</a>
          <a href="#">Sign Out</a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <button 
          className={`nav-btn ${isComposing ? 'active' : ''}`}
          onClick={() => setIsComposing(true)}
        >
          📝 Compose
        </button>
        <button 
          className="nav-btn"
          onClick={() => {setCurrentView('inbox'); setSelectedEmail(null); setIsComposing(false);}}
        >
          📧 Check Mail
        </button>
        <button className="nav-btn">📋 Addresses</button>
        <button className="nav-btn">📅 Calendar</button>
        <button className="nav-btn">⚙️ Options</button>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="folders">
            <h3>Folders</h3>
            {folders.map(folder => (
              <div 
                key={folder.id}
                className={`folder ${currentView === folder.id ? 'active' : ''}`}
                onClick={() => {setCurrentView(folder.id); setSelectedEmail(null); setIsComposing(false);}}
              >
                📁 {folder.name}
                {folder.count > 0 && <span className="count">({folder.count})</span>}
              </div>
            ))}
          </div>

          {/* Ad Banner */}
          <div className="ad-banner">
            <div className="ad-header">Advertisement</div>
            <div className="ad-content">
              <div className="ad-title">🎯 eBay AUCTIONS</div>
              <div className="ad-text">Find it on eBay!</div>
              <div className="ad-items">
                • Beanie Babies
                <br />• Pokemon Cards  
                <br />• Computer Parts
                <br />• Y2K Collectibles
              </div>
              <button className="ad-button">Bid Now!</button>
            </div>
          </div>

          <div className="ad-banner">
            <div className="ad-header">Sponsored Link</div>
            <div className="ad-content">
              <div className="ad-title">💿 Columbia House</div>
              <div className="ad-text">12 CDs for 1¢!</div>
              <div className="ad-subtext">Plus shipping & handling</div>
              <button className="ad-button">Join Now!</button>
            </div>
          </div>
        </div>

        {/* Main Email Area */}
        <div className="email-area">
          {isComposing ? (
            <div className="compose-email">
              <h3>Compose Message</h3>
              <div className="compose-form">
                <div className="form-row">
                  <label>To:</label>
                  <input 
                    type="email"
                    value={composeData.to}
                    onChange={(e) => setComposeData({...composeData, to: e.target.value})}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-row">
                  <label>Subject:</label>
                  <input 
                    type="text"
                    value={composeData.subject}
                    onChange={(e) => setComposeData({...composeData, subject: e.target.value})}
                    placeholder="Enter subject"
                  />
                </div>
                <div className="form-row">
                  <label>Message:</label>
                  <textarea 
                    value={composeData.body}
                    onChange={(e) => setComposeData({...composeData, body: e.target.value})}
                    placeholder="Type your message here..."
                    rows="10"
                  />
                </div>
                <div className="compose-buttons">
                  <button className="send-btn" onClick={handleSendEmail}>Send Message</button>
                  <button className="cancel-btn" onClick={() => setIsComposing(false)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : selectedEmail ? (
            <div className="email-view">
              <div className="email-header">
                <button className="back-btn" onClick={() => setSelectedEmail(null)}>← Back to {currentView}</button>
                <div className="email-actions">
                  <button>Reply</button>
                  <button>Forward</button>
                  <button>Delete</button>
                </div>
              </div>
              <div className="email-details">
                <h3>{selectedEmail.subject}</h3>
                <div className="email-meta">
                  <div><strong>From:</strong> {selectedEmail.from || selectedEmail.to}</div>
                  <div><strong>Date:</strong> {selectedEmail.date}</div>
                  {selectedEmail.to && <div><strong>To:</strong> {selectedEmail.to}</div>}
                </div>
                <div className="email-body">
                  {selectedEmail.body.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="email-list">
              <div className="list-header">
                <h3>{currentView.charAt(0).toUpperCase() + currentView.slice(1)} ({currentEmails.length} messages)</h3>
                <div className="list-actions">
                  <button>🔄 Refresh</button>
                  <button>🗑️ Delete</button>
                  <button>📂 Move</button>
                </div>
              </div>
              
              <div className="email-table">
                <div className="table-header">
                  <div className="col-checkbox">☐</div>
                  <div className="col-from">From</div>
                  <div className="col-subject">Subject</div>
                  <div className="col-date">Date</div>
                </div>
                
                {currentEmails.map(email => (
                  <div 
                    key={email.id} 
                    className={`email-row ${!email.read ? 'unread' : ''}`}
                    onClick={() => setSelectedEmail(email)}
                  >
                    <div className="col-checkbox">☐</div>
                    <div className="col-from">{email.from || email.to}</div>
                    <div className="col-subject">
                      {!email.read && <span className="unread-indicator">●</span>}
                      {email.subject}
                    </div>
                    <div className="col-date">{email.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <a href="#">Terms of Service</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Help</a> |
          <a href="#">Feedback</a>
        </div>
        <div className="footer-text">
          Copyright © 2001 Yahoo! Inc. All rights reserved.
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  background: white;
  font-family: Arial, sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;

  .yahoo-header {
    background: linear-gradient(to bottom, #7B68EE, #6A5ACD);
    color: white;
    padding: 8px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #483D8B;

    .yahoo-logo {
      display: flex;
      align-items: center;
      gap: 5px;
      
      .yahoo-text {
        font-size: 24px;
        font-weight: bold;
        color: #FFD700;
      }
      
      .mail-text {
        font-size: 18px;
        font-weight: bold;
        color: white;
      }
    }

    .header-nav {
      display: flex;
      gap: 15px;
      
      a {
        color: white;
        text-decoration: none;
        font-size: 11px;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .nav-bar {
    background: #F0F0F0;
    border-bottom: 1px solid #ccc;
    padding: 8px 15px;
    display: flex;
    gap: 10px;

    .nav-btn {
      background: #E8E8E8;
      border: 1px solid #999;
      padding: 4px 12px;
      font-size: 11px;
      cursor: pointer;
      
      &:hover {
        background: #D0D0D0;
      }
      
      &.active {
        background: #7B68EE;
        color: white;
        border-color: #483D8B;
      }
    }
  }

  .main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .sidebar {
    width: 200px;
    background: #F8F8F8;
    border-right: 1px solid #ccc;
    padding: 15px;
    overflow-y: auto;

    .folders {
      margin-bottom: 20px;
      
      h3 {
        margin: 0 0 10px 0;
        font-size: 12px;
        color: #333;
      }

      .folder {
        padding: 4px 8px;
        cursor: pointer;
        font-size: 11px;
        border-radius: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        &:hover {
          background: #E8E8E8;
        }
        
        &.active {
          background: #7B68EE;
          color: white;
        }

        .count {
          font-weight: bold;
          color: #FF6600;
        }
      }
    }

    .ad-banner {
      background: white;
      border: 1px solid #999;
      margin-bottom: 15px;
      font-size: 10px;

      .ad-header {
        background: #E8E8E8;
        padding: 3px 6px;
        font-weight: bold;
        border-bottom: 1px solid #999;
      }

      .ad-content {
        padding: 8px;
        text-align: center;

        .ad-title {
          font-weight: bold;
          color: #FF6600;
          margin-bottom: 4px;
        }

        .ad-text {
          font-weight: bold;
          margin-bottom: 4px;
        }

        .ad-items {
          font-size: 9px;
          margin: 6px 0;
          text-align: left;
        }

        .ad-subtext {
          font-size: 8px;
          color: #666;
          margin-bottom: 6px;
        }

        .ad-button {
          background: #FF6600;
          color: white;
          border: none;
          padding: 3px 8px;
          font-size: 9px;
          font-weight: bold;
          cursor: pointer;
          
          &:hover {
            background: #E55A00;
          }
        }
      }
    }
  }

  .email-area {
    flex: 1;
    background: white;
    overflow-y: auto;
  }

  .compose-email {
    padding: 20px;

    h3 {
      margin: 0 0 15px 0;
      color: #333;
    }

    .compose-form {
      .form-row {
        display: flex;
        margin-bottom: 10px;
        align-items: flex-start;

        label {
          width: 80px;
          font-weight: bold;
          margin-top: 5px;
        }

        input, textarea {
          flex: 1;
          padding: 4px;
          border: 1px solid #999;
          font-size: 11px;
        }
      }

      .compose-buttons {
        margin-top: 15px;
        
        .send-btn {
          background: #7B68EE;
          color: white;
          border: none;
          padding: 6px 15px;
          font-weight: bold;
          cursor: pointer;
          margin-right: 10px;
          
          &:hover {
            background: #6A5ACD;
          }
        }

        .cancel-btn {
          background: #E8E8E8;
          border: 1px solid #999;
          padding: 6px 15px;
          cursor: pointer;
          
          &:hover {
            background: #D0D0D0;
          }
        }
      }
    }
  }

  .email-view {
    padding: 20px;

    .email-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;

      .back-btn {
        background: #E8E8E8;
        border: 1px solid #999;
        padding: 4px 10px;
        cursor: pointer;
        font-size: 11px;
        
        &:hover {
          background: #D0D0D0;
        }
      }

      .email-actions {
        display: flex;
        gap: 8px;

        button {
          background: #E8E8E8;
          border: 1px solid #999;
          padding: 4px 10px;
          cursor: pointer;
          font-size: 11px;
          
          &:hover {
            background: #D0D0D0;
          }
        }
      }
    }

    .email-details {
      h3 {
        margin: 0 0 10px 0;
        color: #333;
      }

      .email-meta {
        background: #F8F8F8;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        font-size: 11px;

        div {
          margin-bottom: 3px;
        }
      }

      .email-body {
        line-height: 1.4;
        white-space: pre-wrap;
      }
    }
  }

  .email-list {
    .list-header {
      background: #F0F0F0;
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin: 0;
        font-size: 12px;
        color: #333;
      }

      .list-actions {
        display: flex;
        gap: 8px;

        button {
          background: #E8E8E8;
          border: 1px solid #999;
          padding: 3px 8px;
          cursor: pointer;
          font-size: 10px;
          
          &:hover {
            background: #D0D0D0;
          }
        }
      }
    }

    .email-table {
      .table-header {
        background: #E8E8E8;
        display: grid;
        grid-template-columns: 30px 150px 1fr 100px;
        padding: 6px 15px;
        border-bottom: 1px solid #ccc;
        font-weight: bold;
        font-size: 11px;
      }

      .email-row {
        display: grid;
        grid-template-columns: 30px 150px 1fr 100px;
        padding: 6px 15px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        font-size: 11px;
        
        &:hover {
          background: #F8F8F8;
        }

        &.unread {
          background: #FFF8DC;
          font-weight: bold;
        }

        .col-subject {
          display: flex;
          align-items: center;
          gap: 5px;

          .unread-indicator {
            color: #FF6600;
            font-size: 8px;
          }
        }
      }
    }
  }

  .footer {
    background: #F0F0F0;
    border-top: 1px solid #ccc;
    padding: 8px 15px;
    font-size: 10px;
    color: #666;

    .footer-links {
      margin-bottom: 3px;
      
      a {
        color: #7B68EE;
        text-decoration: none;
        margin: 0 3px;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default YahooMail; 
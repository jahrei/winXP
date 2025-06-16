import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function LimeWire({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [downloads, setDownloads] = useState([
    // Some files already "downloading" when LimeWire opens
    {
      id: 1,
      name: 'Eminem - Without Me.mp3',
      size: '4.1 MB',
      progress: 67,
      status: 'Downloading',
      speed: '156 KB/s',
      timeLeft: '2 min',
      host: 'RapKing2001'
    },
    {
      id: 2,
      name: 'WINRAR_FULL_VERSION_CRACKED.exe',
      size: '1.2 MB',
      progress: 23,
      status: 'Connecting...',
      speed: '0 KB/s',
      timeLeft: 'Calculating...',
      host: 'CrackMaster'
    },
    {
      id: 3,
      name: 'The_Sims_Hot_Date_EXPANSION.zip',
      size: '234 MB',
      progress: 89,
      status: 'Almost done...',
      speed: '423 KB/s',
      timeLeft: '1 min',
      host: 'GameCollector'
    },
    {
      id: 4,
      name: 'definitely_not_a_virus.mp3.exe',
      size: '156 KB',
      progress: 100,
      status: 'Complete',
      speed: 'Finished',
      timeLeft: 'Done',
      host: 'TotallyLegit'
    },
    {
      id: 5,
      name: 'Avril Lavigne - Sk8er Boi.mp3',
      size: '3.8 MB',
      progress: 45,
      status: 'Downloading',
      speed: '12 KB/s',
      timeLeft: '18 min',
      host: 'PunkPrincess'
    },
    {
      id: 6,
      name: 'PHOTOSHOP_7_KEYGEN_WORKING.exe',
      size: '445 KB',
      progress: 8,
      status: 'Connection Lost',
      speed: '0 KB/s',
      timeLeft: 'Retrying...',
      host: 'DesignPro'
    },
    {
      id: 7,
      name: 'Lord_of_the_Rings_Fellowship_FULL_MOVIE.avi',
      size: '23 KB',
      progress: 99,
      status: 'Almost done...',
      speed: '2 KB/s',
      timeLeft: '30 sec',
      host: 'MovieMaster'
    }
  ]);
  const [activeTab, setActiveTab] = useState('search');
  const [isSearching, setIsSearching] = useState(false);

  // Fake search results with authentic early 2000s content
  const fakeResults = [
    { name: 'Linkin Park - In The End.mp3', size: '4.2 MB', quality: '★★★★☆', host: 'DJ_Mike2000', type: 'Audio' },
    { name: 'Eminem - The Real Slim Shady.mp3', size: '3.8 MB', quality: '★★★★★', host: 'MusicLover99', type: 'Audio' },
    { name: 'System of a Down - Chop Suey.mp3', size: '3.5 MB', quality: '★★★☆☆', host: 'RockFan2K', type: 'Audio' },
    { name: 'Britney Spears - ...Baby One More Time.mp3', size: '3.9 MB', quality: '★★★★☆', host: 'PopPrincess', type: 'Audio' },
    { name: 'Napster_Clone_v2.0.exe', size: '12.3 MB', quality: '★☆☆☆☆', host: 'h4ck3r1337', type: 'Program' },
    { name: 'Blink-182 - All The Small Things.mp3', size: '3.1 MB', quality: '★★★★★', host: 'PunkRocker', type: 'Audio' },
    { name: 'Metallica - Enter Sandman.mp3', size: '5.2 MB', quality: '★★★★☆', host: 'MetalHead666', type: 'Audio' },
    { name: 'definitely_not_a_virus.mp3.exe', size: '156 KB', quality: '★☆☆☆☆', host: 'TotallyLegit', type: 'Unknown' },
    { name: 'The Matrix Reloaded DVDRIP.avi', size: '699 MB', quality: '★★☆☆☆', host: 'MoviePirate', type: 'Video' },
    { name: 'Kazaa_Lite_FULL_NO_SPYWARE.zip', size: '8.9 MB', quality: '★★★☆☆', host: 'SafeDownloads', type: 'Program' },
    
    // The really funny stuff starts here...
    { name: 'Britney_Spears_NAKED_HOT_PICS.exe', size: '2.3 MB', quality: '★☆☆☆☆', host: 'NotAVirus2001', type: 'Unknown' },
    { name: 'How_to_hack_into_anyones_email.txt.exe', size: '45 KB', quality: '★☆☆☆☆', host: 'UberHacker', type: 'Unknown' },
    { name: 'FREE_MONEY_GENERATOR.scr', size: '1.1 MB', quality: '★☆☆☆☆', host: 'MoneyMaker123', type: 'Unknown' },
    { name: 'Lord of the Rings - Two Towers FULL MOVIE.avi', size: '23 KB', quality: '★☆☆☆☆', host: 'MovieMaster', type: 'Video' },
    { name: 'Eminem - Stan.mp3', size: '15.6 MB', quality: '★☆☆☆☆', host: 'RapFan', type: 'Audio' },
    { name: 'Christina_Aguilera_Genie_In_A_Bottle_UNCENSORED.wmv', size: '800 MB', quality: '★★☆☆☆', host: 'VideoCollector', type: 'Video' },
    { name: 'Pokemon_Season_1_ALL_EPISODES.zip', size: '45 MB', quality: '★☆☆☆☆', host: 'PokeMaster', type: 'Video' },
    { name: 'AOL_PASSWORD_STEALER_2001.exe', size: '234 KB', quality: '★☆☆☆☆', host: 'PWNmaster', type: 'Program' },
    { name: 'Red Hot Chili Peppers - Californication.mp3', size: '128 KB', quality: '★☆☆☆☆', host: 'AudioGuy', type: 'Audio' },
    { name: 'Windows_XP_KEYGEN_WORKING_100%.exe', size: '567 KB', quality: '★★☆☆☆', host: 'CrackMaster', type: 'Program' },
    { name: 'Shrek.avi', size: '1.4 GB', quality: '★★★★☆', host: 'MovieNight', type: 'Video' },
    { name: 'Backstreet Boys - I Want It That Way.mp3', size: '67 MB', quality: '★☆☆☆☆', host: 'BSBFan4Ever', type: 'Audio' },
    { name: 'SUPER_MARIO_WORLD_ROM_WORKING.smc', size: '512 KB', quality: '★★★☆☆', host: 'RetroGamer', type: 'Program' },
    { name: 'Pamela_Anderson_EXCLUSIVE_VIDEO.mpg.exe', size: '2.8 MB', quality: '★☆☆☆☆', host: 'AdultContent18', type: 'Unknown' },
    { name: 'The_Sims_FULL_GAME_NO_CD_CRACK.zip', size: '156 MB', quality: '★★★☆☆', host: 'GamePirate', type: 'Program' },
    { name: 'Limp Bizkit - Break Stuff.mp3', size: '4.1 MB', quality: '★★★★☆', host: 'NuMetalFan', type: 'Audio' },
    { name: 'MATRIX_SCREENSAVER_COOL.scr', size: '89 KB', quality: '★★☆☆☆', host: 'MatrixFan', type: 'Program' },
    { name: 'Scooby Doo - Whats New Complete Series.avi', size: '12 KB', quality: '★☆☆☆☆', host: 'CartoonLover', type: 'Video' },
    { name: 'PHOTOSHOP_7_FULL_VERSION_CRACKED.exe', size: '234 MB', quality: '★★☆☆☆', host: 'DesignPro', type: 'Program' },
    { name: 'Will Smith - Gettin Jiggy Wit It.mp3', size: '3.7 MB', quality: '★★★☆☆', host: 'HipHopHead', type: 'Audio' },
    { name: 'Grand_Theft_Auto_3_SAVEGAME_ALL_MISSIONS.dat', size: '45 KB', quality: '★★★☆☆', host: 'GTAMaster', type: 'Program' },
    { name: 'ICQ_BOMBER_SPAM_TOOL.exe', size: '123 KB', quality: '★☆☆☆☆', host: 'PrankKing', type: 'Unknown' },
    { name: 'Foo Fighters - Everlong.mp3', size: '5.6 MB', quality: '★★★★★', host: 'RockGod', type: 'Audio' },
    { name: 'Pokemon_Red_Blue_Yellow_ROMS.zip', size: '3.4 MB', quality: '★★★☆☆', host: 'GameBoyFan', type: 'Program' },
    { name: 'SEXY_WEBCAM_GIRLS_LIVE.exe', size: '445 KB', quality: '★☆☆☆☆', host: 'WebcamGuy', type: 'Unknown' },
    { name: 'Half Life 2 BETA LEAKED VERSION.rar', size: '1.2 GB', quality: '★★★☆☆', host: 'BetaTester', type: 'Program' },
    { name: 'NSYNC - Bye Bye Bye.mp3', size: '4.3 MB', quality: '★★★☆☆', host: 'PopMusic2000', type: 'Audio' },
    { name: 'WINAMP_SKINS_PACK_ULTIMATE.wsz', size: '23 MB', quality: '★★★☆☆', host: 'SkinCollector', type: 'Program' },
    { name: 'Dragon Ball Z - Episode 1-291 COMPLETE.torrent', size: '4 KB', quality: '★☆☆☆☆', host: 'AnimeFan', type: 'Unknown' },
    { name: 'Nelly - Hot in Herre.mp3', size: '3.2 MB', quality: '★★★★☆', host: 'RapDownloads', type: 'Audio' },
    { name: 'KAZAA_TURBO_ACCELERATION.exe', size: '234 KB', quality: '★☆☆☆☆', host: 'SpeedHacker', type: 'Unknown' },
    { name: 'Office_XP_SERIAL_NUMBERS.txt', size: '12 KB', quality: '★★☆☆☆', host: 'OfficeUser', type: 'Program' },
    { name: 'South Park - Bigger Longer Uncut.avi', size: '2.1 MB', quality: '★☆☆☆☆', host: 'SouthParkFan', type: 'Video' },
    { name: 'Avril Lavigne - Complicated.mp3', size: '3.9 MB', quality: '★★★★☆', host: 'SkaterGirl', type: 'Audio' },
    { name: 'LIMEWIRE_PRO_UNLIMITED_DOWNLOADS.exe', size: '2.3 MB', quality: '★☆☆☆☆', host: 'ProUpgrade', type: 'Unknown' },
    { name: 'Final Fantasy X PERFECT SAVEGAME.ps2', size: '128 KB', quality: '★★★☆☆', host: 'RPGMaster', type: 'Program' },
    { name: 'Janet Jackson - All For You.mp3', size: '4.1 MB', quality: '★★★☆☆', host: 'RnBLover', type: 'Audio' },
    { name: 'NUDE_CELEBRITIES_COLLECTION.zip.exe', size: '5.6 MB', quality: '★☆☆☆☆', host: 'CelebHunter', type: 'Unknown' },
    { name: 'The Fast and the Furious CAM.avi', size: '89 MB', quality: '★★☆☆☆', host: 'CarMovies', type: 'Video' },
    { name: 'Outkast - Ms Jackson.mp3', size: '4.5 MB', quality: '★★★★☆', host: 'SouthernRap', type: 'Audio' },
    { name: 'STARCRAFT_BROODWAR_NO_CD_PATCH.exe', size: '456 KB', quality: '★★★☆☆', host: 'RTSGamer', type: 'Program' },
    { name: 'Family Guy Season 1 COMPLETE.rar', size: '234 MB', quality: '★★★☆☆', host: 'ComedyFan', type: 'Video' },
    { name: 'Missy Elliott - Work It.mp3', size: '3.8 MB', quality: '★★★★☆', host: 'HipHopQueen', type: 'Audio' },
    { name: 'COUNTER_STRIKE_WALLHACK_AIMBOT.exe', size: '678 KB', quality: '★☆☆☆☆', host: 'CSCheater', type: 'Unknown' },
    { name: 'Shrek_2_UNRELEASED_DELETED_SCENES.wmv', size: '45 MB', quality: '★★☆☆☆', host: 'AnimationFan', type: 'Video' }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setActiveTab('search');
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = fakeResults.filter(result => 
        result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.host.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.length > 0 ? filtered : fakeResults.slice(0, 5));
      setIsSearching(false);
    }, 1500);
  };

  const handleDownload = (file) => {
    const download = {
      ...file,
      id: Date.now(),
      progress: 0,
      status: 'Connecting...',
      speed: '0 KB/s',
      timeLeft: 'Calculating...'
    };
    
    setDownloads(prev => [...prev, download]);
    setActiveTab('downloads');
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloads(prev => prev.map(d => {
        if (d.id === download.id) {
          const newProgress = Math.min(d.progress + Math.random() * 15, 100);
          const speeds = ['12 KB/s', '156 KB/s', '2.3 KB/s', '45 KB/s', '1.2 MB/s', 'Connection Lost', '78 KB/s'];
          const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
          
          return {
            ...d,
            progress: newProgress,
            status: newProgress === 100 ? 'Complete' : newProgress > 80 ? 'Almost done...' : 'Downloading',
            speed: newProgress === 100 ? 'Finished' : randomSpeed,
            timeLeft: newProgress === 100 ? 'Done' : `${Math.floor(Math.random() * 30) + 1} min`
          };
        }
        return d;
      }));
    }, 2000);

    setTimeout(() => clearInterval(interval), 30000);
  };

  return (
    <StyledDiv>
      <div className="limewire-header">
        <div className="limewire-logo">
          <span className="logo-text">LimeWire</span>
          <span className="logo-version">4.18.8</span>
        </div>
        <div className="header-info">
          <span>🟢 Connected to Gnutella Network</span>
          <span>Users: 2,847,391</span>
        </div>
      </div>

      <div className="toolbar">
        <div className="toolbar-section">
          <button className={activeTab === 'search' ? 'active' : ''} onClick={() => setActiveTab('search')}>
            🔍 Search
          </button>
          <button className={activeTab === 'downloads' ? 'active' : ''} onClick={() => setActiveTab('downloads')}>
            📥 Downloads ({downloads.length})
          </button>
          <button className={activeTab === 'library' ? 'active' : ''} onClick={() => setActiveTab('library')}>
            📚 Library
          </button>
        </div>
        <div className="connection-info">
          <span>Upload: 0 KB/s</span>
          <span>Download: {downloads.filter(d => d.status === 'Downloading').length * 45} KB/s</span>
        </div>
      </div>

      {activeTab === 'search' && (
        <div className="search-tab">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>

          <div className="search-filters">
            <label><input type="checkbox" defaultChecked /> Audio</label>
            <label><input type="checkbox" defaultChecked /> Video</label>
            <label><input type="checkbox" /> Images</label>
            <label><input type="checkbox" /> Documents</label>
            <label><input type="checkbox" /> Programs</label>
          </div>

          <div className="results-header">
            <div>File Name</div>
            <div>Size</div>
            <div>Quality</div>
            <div>Host</div>
            <div>Action</div>
          </div>

          <div className="results-list">
            {isSearching ? (
              <div className="searching">
                <div className="spinner"></div>
                <p>Searching Gnutella network...</p>
              </div>
            ) : (
              searchResults.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="file-name">
                    <span className={`file-icon ${result.type.toLowerCase()}`}>
                      {result.type === 'Audio' ? '🎵' : result.type === 'Video' ? '🎬' : result.type === 'Program' ? '💾' : '📄'}
                    </span>
                    {result.name}
                  </div>
                  <div className="file-size">{result.size}</div>
                  <div className="file-quality">{result.quality}</div>
                  <div className="file-host">{result.host}</div>
                  <div className="file-action">
                    <button onClick={() => handleDownload(result)}>Download</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {activeTab === 'downloads' && (
        <div className="downloads-tab">
          <div className="downloads-header">
            <div>File Name</div>
            <div>Progress</div>
            <div>Status</div>
            <div>Speed</div>
            <div>Time Left</div>
          </div>

          <div className="downloads-list">
            {downloads.length === 0 ? (
              <div className="no-downloads">
                <p>No downloads yet. Start searching for files!</p>
              </div>
            ) : (
              downloads.map((download) => (
                <div key={download.id} className="download-item">
                  <div className="download-name">
                    <span className="file-icon">🎵</span>
                    {download.name}
                  </div>
                  <div className="download-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${download.progress}%` }}
                      ></div>
                    </div>
                    <span>{Math.floor(download.progress)}%</span>
                  </div>
                  <div className="download-status">{download.status}</div>
                  <div className="download-speed">{download.speed}</div>
                  <div className="download-time">{download.timeLeft}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {activeTab === 'library' && (
        <div className="library-tab">
          <div className="library-content">
            <h3>My Files</h3>
            <div className="library-stats">
              <p>📁 Shared Folders: 3</p>
              <p>🎵 Audio Files: 47</p>
              <p>🎬 Video Files: 12</p>
              <p>📄 Other Files: 8</p>
            </div>
            <div className="sharing-warning">
              ⚠️ Remember: Only share files you have the legal right to distribute!
            </div>
          </div>
        </div>
      )}

      <div className="status-bar">
        <div className="status-left">
          <span>🌐 Gnutella Network</span>
          <span>Connections: 4</span>
        </div>
        <div className="status-right">
          <span>Shared: 67 files</span>
          <span>Uptime: 2:34:17</span>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #2d5a2d, #1a4d1a);
  color: #ffffff;
  font-family: 'Tahoma', sans-serif;
  font-size: 11px;
  display: flex;
  flex-direction: column;

  .limewire-header {
    background: linear-gradient(to bottom, #4a8a4a, #2d5a2d);
    padding: 8px 12px;
    border-bottom: 2px solid #1a4d1a;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .limewire-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      
      .logo-text {
        font-size: 18px;
        font-weight: bold;
        color: #90EE90;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
      
      .logo-version {
        font-size: 10px;
        color: #cccccc;
      }
    }

    .header-info {
      display: flex;
      gap: 15px;
      font-size: 10px;
      color: #cccccc;
    }
  }

  .toolbar {
    background: #3d6a3d;
    padding: 6px 12px;
    border-bottom: 1px solid #1a4d1a;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toolbar-section {
      display: flex;
      gap: 4px;

      button {
        background: #2d5a2d;
        color: white;
        border: 1px solid #4a8a4a;
        padding: 4px 12px;
        font-size: 11px;
        cursor: pointer;
        
        &:hover {
          background: #4a8a4a;
        }
        
        &.active {
          background: #90EE90;
          color: #1a4d1a;
          font-weight: bold;
        }
      }
    }

    .connection-info {
      display: flex;
      gap: 10px;
      font-size: 10px;
      color: #cccccc;
    }
  }

  .search-tab, .downloads-tab, .library-tab {
    flex: 1;
    padding: 12px;
    overflow-y: auto;
  }

  .search-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;

    input {
      flex: 1;
      padding: 6px;
      border: 1px solid #4a8a4a;
      background: #1a4d1a;
      color: white;
      font-size: 11px;
      
      &::placeholder {
        color: #cccccc;
      }
    }

    button {
      padding: 6px 16px;
      background: #90EE90;
      color: #1a4d1a;
      border: none;
      font-weight: bold;
      cursor: pointer;
      
      &:disabled {
        background: #666;
        color: #999;
      }
    }
  }

  .search-filters {
    display: flex;
    gap: 15px;
    margin-bottom: 12px;

    label {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      color: #cccccc;
      cursor: pointer;

      input[type="checkbox"] {
        margin: 0;
      }
    }
  }

  .results-header, .downloads-header {
    display: grid;
    grid-template-columns: 2fr 80px 100px 120px 80px;
    gap: 8px;
    padding: 8px;
    background: #1a4d1a;
    border: 1px solid #4a8a4a;
    font-weight: bold;
    font-size: 10px;
    color: #90EE90;
  }

  .results-list, .downloads-list {
    border: 1px solid #4a8a4a;
    border-top: none;
    max-height: 300px;
    overflow-y: auto;
  }

  .result-item, .download-item {
    display: grid;
    grid-template-columns: 2fr 80px 100px 120px 80px;
    gap: 8px;
    padding: 6px 8px;
    border-bottom: 1px solid #2d5a2d;
    align-items: center;
    
    &:hover {
      background: rgba(144, 238, 144, 0.1);
    }

    .file-name, .download-name {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      
      .file-icon {
        font-size: 14px;
      }
    }

    .file-size, .file-quality, .file-host, .file-action,
    .download-status, .download-speed, .download-time {
      font-size: 10px;
      text-align: center;
    }

    .file-action button {
      background: #90EE90;
      color: #1a4d1a;
      border: none;
      padding: 2px 8px;
      font-size: 9px;
      font-weight: bold;
      cursor: pointer;
      
      &:hover {
        background: #7FDD7F;
      }
    }
  }

  .download-progress {
    display: flex;
    align-items: center;
    gap: 6px;

    .progress-bar {
      flex: 1;
      height: 12px;
      background: #1a4d1a;
      border: 1px solid #4a8a4a;
      position: relative;

      .progress-fill {
        height: 100%;
        background: linear-gradient(to right, #90EE90, #7FDD7F);
        transition: width 0.3s ease;
      }
    }

    span {
      font-size: 9px;
      min-width: 30px;
    }
  }

  .searching {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    
    .spinner {
      width: 30px;
      height: 30px;
      border: 3px solid #2d5a2d;
      border-top: 3px solid #90EE90;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 12px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }

  .no-downloads {
    padding: 40px;
    text-align: center;
    color: #cccccc;
  }

  .library-content {
    padding: 20px;
    
    h3 {
      color: #90EE90;
      margin-bottom: 15px;
    }

    .library-stats {
      margin-bottom: 20px;
      
      p {
        margin: 8px 0;
        color: #cccccc;
      }
    }

    .sharing-warning {
      background: rgba(255, 255, 0, 0.1);
      border: 1px solid #ffff00;
      padding: 10px;
      color: #ffff99;
      font-size: 10px;
    }
  }

  .status-bar {
    background: #1a4d1a;
    border-top: 1px solid #4a8a4a;
    padding: 4px 12px;
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    color: #cccccc;

    .status-left, .status-right {
      display: flex;
      gap: 12px;
    }
  }
`;

export default LimeWire; 
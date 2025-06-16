import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function JahreiLabsY2K({ onSearch, goMain }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const matrix = "JAHREI LABS Y2K MILLENNIUM EDITION 01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()";
    const matrixArray = matrix.split("");
    const fontSize = 8;
    const columns = canvas.width / fontSize;
    const drops = [];

    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FF00';
      ctx.font = fontSize + 'px monospace';

      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledDiv>
      <canvas ref={canvasRef} className="matrix-rain" />
      
      <div className="ie-bar">
        📄 jahrei labs - Y2K Edition - Microsoft Internet Explorer 6.0
      </div>

      <div className="container">
        <div className="header">
          <div className="title" onClick={goMain}>
            ✨ jahrei labs ✨
          </div>
          <div className="subtitle">Y2K Millennium Edition - Compatible with Internet Explorer 6.0</div>
        </div>

        <div className="bookmarks">
          <h3>📁 Favorites - Bookmarks</h3>
          <div className="bookmark-links">
            <a href="#hardware" onClick={(e) => {e.preventDefault(); alert('Hardware Section - Coming Soon!');}}>
              <span className="icon"></span>🔧 Hardware Lab
            </a>
            <a href="#software" onClick={(e) => {e.preventDefault(); alert('Software Section - Coming Soon!');}}>
              <span className="icon"></span>💾 Software Depot
            </a>
            <a href="#embedded" onClick={(e) => {e.preventDefault(); alert('Embedded Section - Coming Soon!');}}>
              <span className="icon"></span>🤖 Embedded Systems
            </a>
            <a href="#archive" onClick={(e) => {e.preventDefault(); alert('Archive Section - Coming Soon!');}}>
              <span className="icon"></span>📦 Digital Archive
            </a>
            <a href="#projects" onClick={(e) => {e.preventDefault(); alert('Projects Section - Coming Soon!');}}>
              <span className="icon"></span>📋 Project Gallery
            </a>
            <a href="#webring" onClick={(e) => {e.preventDefault(); alert('Web Ring - Coming Soon!');}}>
              <span className="icon"></span>🔗 Web Ring
            </a>
            <a href="#email" onClick={(e) => {e.preventDefault(); alert('Email: contact@jahreilabs.com');}}>
              <span className="icon"></span>📧 Email Portal
            </a>
            <a href="#google" onClick={goMain}>
              <span className="icon"></span>🌐 Back to Google
            </a>
          </div>
        </div>

        <marquee className="marquee">
          🎉 WELCOME TO THE MILLENNIUM! 🎉 This site is Y2K compliant! 🎉 Best viewed in 1024x768 resolution! 🎉
        </marquee>

        <div className="main-content">
          <h2>🌐 Welcome to the Cyber Future!</h2>
          <p>
            Greetings, digital explorer! You have entered the <span className="cyber-text">MILLENNIUM EDITION</span> 
            of jahrei labs, your premier destination for cutting-edge technology in the year 2000 and beyond!
          </p>
          
          <div className="visitor-counter">
            👁️ VISITORS: 001337 | LAST UPDATED: 01/01/2000 | Y2K STATUS: ✅ COMPLIANT
          </div>

          <div className="project-section">
            <h3>🔧 Hardware Division</h3>
            <p>
              Enter the realm of silicon and circuits! Our hardware laboratory features the latest in 
              millennium technology - from Pentium III workstations to cutting-edge CD-ROM drives. 
              Witness the power of 128MB RAM and explore our custom PC builds!
            </p>
          </div>

          <div className="project-section">
            <h3>💾 Software Development</h3>
            <p>
              Discover revolutionary software solutions for the new millennium! Our development team 
              creates applications using Visual Basic 6.0, C++, and the latest HTML 4.0 standards. 
              Compatible with Windows 98, ME, and the upcoming Windows XP!
            </p>
          </div>

          <div className="project-section">
            <h3>🤖 Embedded Systems</h3>
            <p>
              Journey into the world of microcontrollers and embedded programming! From 8051 
              microprocessors to the revolutionary Arduino platform. Interface with parallel ports, 
              serial communications, and real-time sensor data acquisition.
            </p>
          </div>

          <div className="construction">
            <p>🚧 This site is under construction! 🚧</p>
            <p>Some features may require Internet Explorer 5.5+ and Flash Player 6.0</p>
          </div>

          <h2>📨 Contact Information</h2>
          <p>
            Connect with us through the information superhighway:<br/>
            📧 Email: contact@jahreilabs.com<br/>
            💬 ICQ: 12345678<br/>
            📟 AIM: jahreilabs2000<br/>
            🌐 Homepage: www.jahreilabs.com
          </p>
        </div>

        <div className="footer">
          <p>
            © 2000 jahrei labs | Designed for Internet Explorer | 
            <span onClick={goMain} className="back-link">Return to Google</span> | 
            Webmaster: jahrei@millennium.net
          </p>
          <p>Best viewed at 1024x768 resolution with 16-bit color</p>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: "MS Sans Serif", sans-serif;
  background: linear-gradient(45deg, #000080, #800080, #008080);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  color: #00FF00;
  overflow-y: auto;
  overflow-x: hidden;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .matrix-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.1;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
  }

  .ie-bar {
    background: linear-gradient(to bottom, #F0F0F0, #D0D0D0);
    border: 1px solid #808080;
    padding: 5px 10px;
    font-size: 11px;
    margin-bottom: 10px;
    font-family: "MS Sans Serif", sans-serif;
    color: #000000;
  }

  .header {
    background: linear-gradient(to bottom, #C0C0C0, #808080);
    border: 2px inset #C0C0C0;
    padding: 10px;
    margin-bottom: 15px;
    position: relative;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: #000080;
    text-shadow: 2px 2px 4px #FFFFFF;
    animation: blink 2s linear infinite;
    cursor: pointer;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.7; }
  }

  .subtitle {
    text-align: center;
    font-size: 12px;
    color: #800080;
    font-style: italic;
    margin-top: 8px;
  }

  .bookmarks {
    background: linear-gradient(to bottom, #F0F0F0, #E0E0E0);
    border: 2px inset #C0C0C0;
    padding: 8px;
    margin-bottom: 15px;
  }

  .bookmarks h3 {
    margin: 0 0 8px 0;
    color: #000080;
    font-size: 12px;
  }

  .bookmark-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 8px;
  }

  .bookmark-links a {
    color: #0000FF;
    text-decoration: underline;
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }

  .bookmark-links a:visited {
    color: #800080;
  }

  .bookmark-links a:hover {
    background-color: #FFFF00;
    color: #000000;
  }

  .icon {
    width: 12px;
    height: 12px;
    background: #C0C0C0;
    border: 1px solid #808080;
    display: inline-block;
  }

  .marquee {
    background: #FFFF00;
    color: #FF0000;
    font-weight: bold;
    border: 2px solid #FF0000;
    padding: 4px;
    margin: 10px 0;
    font-size: 11px;
  }

  .main-content {
    background: #FFFFFF;
    border: 2px inset #C0C0C0;
    padding: 15px;
    margin-bottom: 15px;
  }

  .main-content h2 {
    color: #000080;
    font-size: 16px;
    border-bottom: 2px solid #C0C0C0;
    padding-bottom: 4px;
  }

  .main-content p {
    color: #000000;
    line-height: 1.4;
    font-size: 11px;
  }

  .project-section {
    background: linear-gradient(to right, #E0E0FF, #F0F0FF);
    border: 2px outset #C0C0C0;
    padding: 10px;
    margin: 10px 0;
  }

  .project-section h3 {
    color: #800080;
    margin-top: 0;
    font-size: 14px;
  }

  .cyber-text {
    background: linear-gradient(45deg, #FF0000, #00FF00, #0000FF, #FFFF00);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 3s ease infinite;
    font-weight: bold;
  }

  .footer {
    background: linear-gradient(to bottom, #C0C0C0, #808080);
    border: 2px inset #C0C0C0;
    padding: 8px;
    text-align: center;
    color: #000080;
    font-size: 10px;
  }

  .back-link {
    color: #000080;
    cursor: pointer;
    text-decoration: underline;
  }

  .back-link:hover {
    background-color: #FFFF00;
  }

  .construction {
    text-align: center;
    margin: 15px 0;
    font-size: 11px;
  }

  .visitor-counter {
    background: #000000;
    color: #00FF00;
    padding: 4px 8px;
    border: 1px solid #808080;
    font-family: "Courier New", monospace;
    font-size: 10px;
    margin: 8px 0;
    text-align: center;
  }
`;

export default JahreiLabsY2K; 
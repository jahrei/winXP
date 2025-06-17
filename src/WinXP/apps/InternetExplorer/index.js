import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns, Google } from 'components';
import dropDownData from './dropDownData';
import ie from 'assets/windowsIcons/ie-paper.png';
import printer from 'assets/windowsIcons/17(32x32).png';
import go from 'assets/windowsIcons/290.png';
import links from 'assets/windowsIcons/links.png';
import search from 'assets/windowsIcons/299(32x32).png';
import favorite from 'assets/windowsIcons/744(32x32).png';
import back from 'assets/windowsIcons/back.png';
import earth from 'assets/windowsIcons/earth.png';
import edit from 'assets/windowsIcons/edit.png';
import forward from 'assets/windowsIcons/forward.png';
import history from 'assets/windowsIcons/history.png';
import home from 'assets/windowsIcons/home.png';
import mail from 'assets/windowsIcons/mail.png';
import msn from 'assets/windowsIcons/msn.png';
import refresh from 'assets/windowsIcons/refresh.png';
import stop from 'assets/windowsIcons/stop.png';
import windows from 'assets/windowsIcons/windows.png';
import dropdown from 'assets/windowsIcons/dropdown.png';

function InternetExplorer({ onClose }) {
  const [state, setState] = useState({
    route: 'jahreilabs',
    query: '',
  });
  function onSearch(str) {
    if (str.length) {
      setState({
        route: 'search',
        query: str,
      });
    }
  }
  function goMain() {
    setState({
      route: 'main',
      query: '',
    });
  }
  function goJahreiLabs() {
    setState({
      route: 'jahreilabs',
      query: '',
    });
  }
  function goYahooNews() {
    setState({
      route: 'yahoonews',
      query: '',
    });
  }
  function goYahooMail() {
    setState({
      route: 'yahoomail',
      query: '',
    });
  }
  function goYouTube() {
    setState({
      route: 'youtube',
      query: '',
    });
  }
  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      case 'Home Page':
      case 'Back':
        goMain();
        break;
      case 'jahrei labs - Y2K Edition':
        goJahreiLabs();
        break;
      default:
    }
  }
  return (
    <Div>
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
        <img className="ie__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="ie__function_bar">
        <div
          onClick={goMain}
          className={`ie__function_bar__button${
            state.route === 'main' ? '--disable' : ''
          }`}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1"
            src={refresh}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button" onClick={goMain}>
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize "
            src={search}
            alt=""
          />
          <span className="ie__function_bar__text">Search</span>
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={favorite}
            alt=""
          />
          <span className="ie__function_bar__text">Favorites</span>
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={mail} alt="" />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin12"
            src={printer}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={edit} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={msn} alt="" />
        </div>
      </section>
      
      {/* Yahoo Toolbar */}
      <section className="ie__toolbar__yahoo">
        <div className="ie__toolbar__yahoo__logo">Yahoo! Toolbar</div>
        <div className="ie__toolbar__yahoo__search">
          <input placeholder="Yahoo! Search" disabled />
          <button>Search</button>
        </div>
        <div className="ie__toolbar__yahoo__buttons">
          <button onClick={goYahooMail}>Mail</button>
          <button onClick={goYahooNews}>News</button>
          <button onClick={goYouTube}>YouTube</button>
          <button>Finance</button>
          <button>Games</button>
          <button>Shopping</button>
        </div>
      </section>

      {/* Ask Jeeves Toolbar */}
      <section className="ie__toolbar__ask">
        <div className="ie__toolbar__ask__logo">🎩 Ask Jeeves Toolbar</div>
        <div className="ie__toolbar__ask__search">
          <input placeholder="Ask Jeeves anything..." disabled />
          <button>Ask!</button>
        </div>
        <div className="ie__toolbar__ask__buttons">
          <button>Pictures</button>
          <button>News</button>
          <button>Shopping</button>
          <button>Yellow Pages</button>
        </div>
      </section>

      {/* McAfee Toolbar */}
      <section className="ie__toolbar__mcafee">
        <div className="ie__toolbar__mcafee__logo">McAfee® SiteAdvisor™</div>
        <div className="ie__toolbar__mcafee__status">
          <span className="ie__toolbar__mcafee__light green"></span>
          <span>Site is SAFE</span>
        </div>
        <div className="ie__toolbar__mcafee__buttons">
          <button>Scan for Viruses</button>
          <button>Privacy Report</button>
          <button>Security Center</button>
        </div>
      </section>

      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">
            {state.route === 'jahreilabs' 
              ? 'https://www.jahreilabs.com/y2k/'
              : state.route === 'yahoonews'
              ? 'https://news.yahoo.com/'
              : state.route === 'yahoomail'
              ? 'https://mail.yahoo.com/'
              : state.route === 'youtube'
              ? 'https://www.youtube.com/watch?v=rvYZRskNV3w'
              : `https://www.google.com.tw${
                  state.route === 'search'
                    ? `/search?q=${encodeURIComponent(state.query)}`
                    : ''
                }`
            }
          </div>
          <img
            src={dropdown}
            alt="dropdown"
            className="ie__address_bar__content__img"
          />
        </div>
        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
        <div className="ie__address_bar__separate" />
        <div className="ie__address_bar__links">
          <span className="ie__address_bar__links__text">Links</span>
          <img
            className="ie__address_bar__links__img"
            src={links}
            alt="links"
          />
        </div>
      </section>
      <div className="ie__content">
        <div className="ie__content__inner">
          <Google
            route={state.route}
            query={state.query}
            onSearch={onSearch}
            goMain={goMain}
            goJahreiLabs={goJahreiLabs}
          />
        </div>
      </div>
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__right">
          <img className="ie__footer__right__img" src={earth} alt="" />
          <span className="ie__footer__right__text">Internet</span>
          <div className="ie__footer__right__dots" />
        </div>
      </footer>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__img:last-child:hover {
      filter: brightness(1.1);
    }
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
      overflow: hidden;
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
  .ie__content__inner {
    position: relative;
    min-height: 800px;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    width: 150px;
    height: 80%;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
    padding-left: 5px;
    position: relative;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
    &__dots {
      position: absolute;
      right: 11px;
      bottom: -1px;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0px rgba(0, 0, 0, 0.25), 5.5px 0px rgba(0, 0, 0, 0.25),
        9px 0px rgba(0, 0, 0, 0.25), 5.5px -3.5px rgba(0, 0, 0, 0.25),
        9px -3.5px rgba(0, 0, 0, 0.25), 9px -7px rgba(0, 0, 0, 0.25),
        3px 1px rgba(255, 255, 255, 1), 6.5px 1px rgba(255, 255, 255, 1),
        10px 1px rgba(255, 255, 255, 1), 10px -2.5px rgba(255, 255, 255, 1),
        10px -6px rgba(255, 255, 255, 1);
    }
  }

  /* Yahoo Toolbar */
  .ie__toolbar__yahoo {
    height: 28px;
    background: linear-gradient(to bottom, #6D1B7B, #4A148C);
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid #333;
    font-size: 11px;
    color: white;
    
    &__logo {
      font-weight: bold;
      font-size: 13px;
      color: #FFEB3B;
      margin-right: 12px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      font-family: Arial, sans-serif;
      letter-spacing: 0.5px;
    }
    
    &__search {
      display: flex;
      align-items: center;
      margin-right: 12px;
      
      input {
        padding: 2px 4px;
        border: 1px solid #ccc;
        font-size: 11px;
        width: 110px;
        margin-right: 4px;
      }
      
      button {
        padding: 2px 8px;
        background: #FF5722;
        color: white;
        border: 1px solid #D84315;
        font-size: 11px;
        cursor: pointer;
        font-weight: bold;
      }
    }
    
    &__buttons {
      display: flex;
      gap: 6px;
      flex: 1;
      
      button {
        padding: 2px 6px;
        background: rgba(255,255,255,0.15);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        font-size: 10px;
        cursor: pointer;
        
        &:hover {
          background: rgba(255,255,255,0.25);
        }
      }
    }
  }

  /* Ask Jeeves Toolbar */
  .ie__toolbar__ask {
    height: 26px;
    background: linear-gradient(to bottom, #1565C0, #0D47A1);
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid #333;
    font-size: 11px;
    color: white;
    
    &__logo {
      font-weight: bold;
      font-size: 12px;
      color: #FFF;
      margin-right: 12px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      font-family: Georgia, serif;
    }
    
    &__search {
      display: flex;
      align-items: center;
      margin-right: 12px;
      
      input {
        padding: 2px 4px;
        border: 1px solid #ccc;
        font-size: 11px;
        width: 130px;
        margin-right: 4px;
        font-style: italic;
      }
      
      button {
        padding: 2px 8px;
        background: #FF9800;
        color: white;
        border: 1px solid #F57C00;
        font-size: 11px;
        cursor: pointer;
        font-weight: bold;
      }
    }
    
    &__buttons {
      display: flex;
      gap: 6px;
      flex: 1;
      
      button {
        padding: 2px 6px;
        background: rgba(255,255,255,0.15);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        font-size: 10px;
        cursor: pointer;
        
        &:hover {
          background: rgba(255,255,255,0.25);
        }
      }
    }
  }

  /* McAfee Toolbar */
  .ie__toolbar__mcafee {
    height: 30px;
    background: linear-gradient(to bottom, #D32F2F, #B71C1C);
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid #333;
    font-size: 11px;
    color: white;
    
    &__logo {
      font-weight: bold;
      font-size: 11px;
      color: #FFF;
      margin-right: 12px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      font-family: Arial, sans-serif;
    }
    
    &__status {
      display: flex;
      align-items: center;
      margin-right: 12px;
      background: rgba(0,0,0,0.3);
      padding: 2px 6px;
      border-radius: 3px;
      border: 1px solid rgba(255,255,255,0.2);
      
      span:not(.ie__toolbar__mcafee__light) {
        margin-left: 4px;
        font-size: 10px;
        font-weight: bold;
      }
    }
    
    &__light {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      
      &.green {
        background: #4CAF50;
        box-shadow: 0 0 4px #4CAF50;
        border: 1px solid #2E7D32;
      }
    }
    
    &__buttons {
      display: flex;
      gap: 6px;
      flex: 1;
      
      button {
        padding: 2px 6px;
        background: rgba(255,255,255,0.15);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        font-size: 10px;
        cursor: pointer;
        
        &:hover {
          background: rgba(255,255,255,0.25);
        }
      }
    }
  }
`;

export default InternetExplorer;

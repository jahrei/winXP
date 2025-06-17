import React from 'react';
import Search from './Search';
import Main from './Main';
import JahreiLabsY2K from '../JahreiLabsY2K';
import YahooNews from '../YahooNews';
import YahooMail from '../YahooMail';
import YouTube2007 from '../YouTube2007';

export function Google({ route = 'main', query = '', onSearch, goMain, goJahreiLabs }) {
  if (route === 'main') return <Main onSearch={onSearch} />;
  else if (route === 'jahreilabs') return <JahreiLabsY2K onSearch={onSearch} goMain={goMain} />;
  else if (route === 'yahoonews') return <YahooNews goMain={goMain} goJahreiLabs={goJahreiLabs} />;
  else if (route === 'yahoomail') return <YahooMail />;
  else if (route === 'youtube') return <YouTube2007 />;
  else return <Search goMain={goMain} onSearch={onSearch} query={query} />;
}

export default Google;

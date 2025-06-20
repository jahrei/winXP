import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import GreetzNotepad from './Notepad/GreetzNotepad';
import Winamp from './Winamp';
import Paint from './Paint';
import LimeWire from './LimeWire';
import BonziBuddy from './BonziBuddy';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import gameIcon from 'assets/windowsIcons/894(16x16).png';
import bonziIcon from 'assets/windowsIcons/887(32x32).png';
import bonziIconSmall from 'assets/windowsIcons/887(16x16).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  // No apps open by default - clean desktop startup
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 2,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 4,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 5,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
  {
    id: 6,
    icon: notepad,
    title: 'greetz.txt',
    component: GreetzNotepad,
    isFocus: false,
  },
  {
    id: 7,
    icon: 'https://img.apponic.com/218/93/d4f85cd73c372d92e0e48e66c2073292.png',
    title: 'LimeWire',
    component: LimeWire,
    isFocus: false,
  },
  {
    id: 8,
    icon: gameIcon,
    title: 'Counter-Strike 1.6',
    component: 'CS_FAKE',
    isFocus: false,
  },
  {
    id: 9,
    icon: bonziIcon,
    title: 'BonziBuddy',
    component: BonziBuddy,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'greetz.txt': {
    header: {
      icon: notepad,
      title: 'greetz.txt - Notepad',
    },
    component: GreetzNotepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 290,
      y: 80,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  LimeWire: {
    header: {
      icon: 'https://img.apponic.com/218/93/d4f85cd73c372d92e0e48e66c2073292.png',
      title: 'LimeWire',
    },
    component: LimeWire,
    defaultSize: {
      width: 750,
      height: 550,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  CS_FAKE: {
    header: {
      icon: error,
      title: 'Counter-Strike 1.6',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
    injectProps: { message: 'PWNED LOL' },
  },
  BonziBuddy: {
    header: {
      icon: bonziIconSmall,
      title: 'BonziBuddy - Your Desktop Companion',
    },
    component: BonziBuddy,
    defaultSize: {
      width: 500,
      height: 600,
    },
    defaultOffset: {
      x: 200,
      y: 100,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox, MyComputer, Notepad, Winamp, GreetzNotepad, LimeWire, BonziBuddy };

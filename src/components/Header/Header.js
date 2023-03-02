import { useState, useEffect } from 'react';
import typeText from '../../scripts/typeText';
import './Header.scss';

const Header = () => {
  const [loaderArr, setLoaderArr] = useState('......'.split(''))
  const [loader, setLoader] = useState('Loading.')
  const [asciiArr, setAsciiArr] = useState(`   _____                   _             _      _        _   _           
  |_   _|__ _ __ _ __ ___ (_)_ __   __ _| |    / \\   ___| |_(_)_   _____ 
    | |/ _ \\ '__| '_ ' _ \\| | '_ \\ / _' | |   / _ \\ / __| __| \\ \\ / / _ \\
    | |  __/ |  | | | | | | | | | | (_| | |  / ___ \\ (__| |_| |\\ V /  __/
    |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_| /_/   \\_\\___|\\__|_| \\_/ \\___|
 `.split(''))
  const [welcomeArr, setWelcomeArr] = useState('Welcome to Terminal Landing (TM) Termlink'.split(''));
  const [welcome, setWelcome] = useState('');
  const [ascii1, setAscii1] = useState('')

  useEffect(() => {
    typeText(loader, setLoader, loaderArr, setLoaderArr, 300)
    
    if (loaderArr.length === 0) {
      setLoader('')
      typeText(welcome, setWelcome, welcomeArr, setWelcomeArr, 5)
    }

    if (welcomeArr.length === 0) {
      typeText(ascii1, setAscii1, asciiArr, setAsciiArr, 0.5)
    }
  })

  return (
    <header className="App-header">
      <div>{loader}</div>
      <div className="crt-on">{welcome}</div>
      <div className="ascii-art">
        <pre className="crt-on">{ascii1}</pre>
      </div>
    </header>
  );
}

export default Header;
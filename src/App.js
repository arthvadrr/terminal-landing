import { useState, useRef } from 'react';
import Nav from './components/Nav/Nav'
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import About from './routes/About/About';
import HackingGame from './routes/HackingGame/HackingGame';
import terms from './assets/terms';
import './App.scss';

const App = () => {  
const hackingGameInit = (
  gameBoardSettings, 
  decAttempt,
  resetAttempts
) => {
  const { 
    rows, 
    rowLength, 
    minWords, 
    minDuds,
    wordOdds,
    dudOdds
  } = gameBoardSettings;

  let result = {
    password: '',
    rows: []
  }

  let usedWords = [];
  let usedDuds  = [];
  let nbspKey   = 0;

  const createMemoryAddr = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let result = ['0', 'x', Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), alphabet[Math.floor(Math.random() * alphabet.length)], Math.floor(Math.random() * 9), <span key={`nbsp-${nbspKey}`}>&nbsp;&nbsp;</span>];

    nbspKey++;

    return result;
  }

  const getPassword = () => {
    const index = Math.floor(Math.random() * usedWords.length);
    return usedWords[index];
  }

  const shuffleArr = arr => {
    let index = arr.length;
    let random;

    while (index > 0) {
        random = Math.floor(Math.random() * index);
        index--;
        
        [arr[index], arr[random]] = [arr[random], arr[index]];
    }

    return arr;
  }

  const createRow = length => {
    const result = [];

    let word = '';
    let dud  = '';

    const hasWord = 1 === Math.floor(Math.random() * wordOdds);
    const hasDud  = hasWord ? false : 1 === Math.floor(Math.random() * dudOdds);

    if (hasWord) {
        word = terms.words[Math.floor(Math.random() * terms.words.length)];
        length -= word.length;
        usedWords.push(word);
        result.push(
            <button 
                className="hacking-word" 
                key={`word-${usedWords.length}`}
                onClick={() => decAttempt()}
            >{word}</button>
        );
    }

    if (hasDud) {
        dud = terms.duds[Math.floor(Math.random() * terms.duds.length)];
        length -= dud.length;
        usedDuds.push(dud);
        result.push(
        <button 
            className="hacking-dud" 
            key={`dud-${usedDuds.length}`}
            onClick={() => resetAttempts()}
        >{dud}</button>);
    }

    while (length > 0) {
        result.push(`${terms.fillers[Math.floor(Math.random() * terms.fillers.length)]}`);
        length--;
    }

    return [createMemoryAddr(), ...shuffleArr(result)];
  }

  let amount = rows;
  const meetsRequirements = false;

  while (!meetsRequirements) {
    const row = createRow(rowLength);
    result.rows.push(row);
    amount--;

    if (amount === 0) {
        if (
            usedWords.length < minWords ||
            usedDuds.length < minDuds
        ) {
            amount      = rows;
            usedWords   = [];
            usedDuds    = [];
            result.rows = [];

        } else {
            result.password = getPassword();
            return result;
        }
      }
    }
  }

  const gameBoardSettings = {
    rows:          10,
    rowLength:     30,
    minWords:      5,
    minDuds:       2,
    wordOdds:      3,
    dudOdds:       5
}
    
  const decAttempt = () => {
    const shadow = attemptsLeft;
    shadow.pop();
    setAttemptsLeft(() => [...shadow]);
  }

  const resetAttempts = () => setAttemptsLeft([1, 1, 1, 1]);
  
  const [attemptsLeft, setAttemptsLeft] = useState([1, 1, 1, 1]);
  const [screen, setScreen] = useState('Home');
  const [gameBoard, setGameBoard] = useState(hackingGameInit(gameBoardSettings, decAttempt, resetAttempts))

  return (
    <div className="App">
      {screen === 'Home' &&
      <> 
        <Home />
        <Nav 
          screen={screen}
          setScreen={setScreen}
        />
      </>
      }
      {screen === 'Projects' && <Projects screen={screen} setScreen={setScreen}/>}
      {screen === 'About' && <About screen={screen} setScreen={setScreen} />}
      {screen === 'HackingGame' && <HackingGame 
        screen={screen} 
        setScreen={setScreen}
        gameBoard={gameBoard}
        attemptsLeft={attemptsLeft}
      />}
    </div>
  );
}

export default App;

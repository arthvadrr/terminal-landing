import { 
  useState, 
  useEffect 
}                   from 'react';
import Nav          from './components/Nav/Nav'
import Home         from './routes/Home/Home';
import Projects     from './routes/Projects/Projects';
import About        from './routes/About/About';
import HackingGame  from './routes/HackingGame/HackingGame';
import AccessDenied from './routes/AccessDenied/AccessDenied';
import DirView      from './routes/DirView/DirView'
import terms        from './assets/terms';
import                   './App.scss';

const App = () => {  

  const directories = [
    {
      name: 'root',
      type: 'dir',
      contents: [
        {
          name: 'passwords',
          type: 'file',
          extension: 'txt'
        },
        {
          name: 'cat-pics',
          type: 'dir',
          contents: [
            {
              name: 'old-leo',
              type: 'file',
              extension: 'jpg'
            },
            {
              name: 'bonkers-the-cat',
              type: 'file',
              extension: 'jpg'
            },
          ]
        },
      ]
    },
    {
      name: 'trash',
      type: 'dir',
      contents: [
        {
          name: 'important-email',
          type: 'file',
          extension: 'txt'
        },
      ]
    }
  ]

  const hackingGameInit = (gameBoardSettings) => {
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
                  onMouseOver={(e) => handleOnMouseOver(e)}
                  onMouseOut={() => setHoveredWord('')}
                  onClick={(e) => handleWordSelect(e.target.innerHTML)}
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
              onMouseOver={(e) => handleOnMouseOver(e)}
              onMouseOut={() => setHoveredWord('')}
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
    rows:          20,
    rowLength:     35,
    minWords:      12,
    minDuds:       3,
    wordOdds:      3,
    dudOdds:       5
}
    
  const decAttempt = () => {
    const shadow = attemptsLeft;
    shadow.pop();
    setAttemptsLeft(() => [...shadow]);
  }

  const resetAttempts = () => {
    const shadow = attemptsLeft;
      while (shadow.length !== 6) {
        shadow.push(1);
      }
    setAttemptsLeft(() => [...shadow]);
  }

  const clearLikenessCol = () => {
    while (likenessCol.length) {
      likenessCol.pop();
    }
  }

  const handleOnMouseOver = (e) => {
    setHoveredWord(e.target.innerHTML);
  }

  let likenessKey = 0;

  const handleWordSelect = (word) => {
    if (word !== gameBoard.password) {
      decAttempt();

      let counter = 0;

      const wordArr = word.split('');
      const passwordArr = gameBoard.password.split('');

      for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === passwordArr[i]) counter++;
      }

      const likenessShadow = likenessCol;

      likenessShadow.push(
        <div className="likeness-result" key={`likeness-blah-${likenessKey}`}>
          <div>&gt; {word}</div>
          <div>&gt; Entry denied.</div>
          <div>{`>`} Likeness = {`${counter}`}</div>
        </div>
      )
      setLikenessCol([...likenessShadow]);
      likenessKey++;

    } else {
      setIsPassword(true)
    }
  }

  const resetHackingGame = () => {
    resetAttempts();
    clearLikenessCol();
    setScreen('HackingGame');
    setHoveredWord('');
    setGameBoard(hackingGameInit(gameBoardSettings, decAttempt));
  }
  
  const [attemptsLeft, setAttemptsLeft] = useState([1, 1, 1, 1, 1, 1]);
  const [screen, setScreen] = useState('Home');
  const [gameBoard, setGameBoard] = useState(hackingGameInit(gameBoardSettings, decAttempt));
  const [hoveredWord, setHoveredWord] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [likenessCol, setLikenessCol] = useState([]);

  useEffect(() => {
  }, [gameBoard]);

  return (
    <div className="App">
      {screen === 'Home' && !isPassword &&
      <> 
        <Home />
        <Nav 
          screen={screen}
          setScreen={setScreen}
        />
      </>
      }
      {screen === 'Projects' && !isPassword && <Projects screen={screen} setScreen={setScreen}/>}
      {screen === 'About' && !isPassword && <About screen={screen} setScreen={setScreen} />}
      {screen === 'HackingGame' && !isPassword && attemptsLeft.length > 0 && <HackingGame 
        screen={screen} 
        setScreen={setScreen}
        gameBoard={gameBoard}
        attemptsLeft={attemptsLeft}
        hoveredWord={hoveredWord}
        likenessCol={likenessCol}
        isPassword={isPassword}
        setIsPassword={setIsPassword}
      />}
      {attemptsLeft.length === 0 &&
      <AccessDenied 
        screen={screen} 
        setScreen={setScreen}
        resetHackingGame={resetHackingGame}
      />
      }
      {isPassword &&
        <DirView screen={screen} setScreen={setScreen} directories={directories}/>
      }
    </div>
  );
}

export default App;

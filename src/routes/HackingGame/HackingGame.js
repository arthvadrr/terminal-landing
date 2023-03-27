import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import terms from './terms.js'
import './HackingGame.scss';

const hackingGameInit = (rows, rowLength, minWords, minDuds) => {
    let result = {
        password: '',
        rows: []
    }

    let usedWords = [];
    let usedDuds = [];

    const createMemoryAddr = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        let result = ['0', 'x', Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), alphabet[Math.floor(Math.random() * alphabet.length)], Math.floor(Math.random() * 9)];

        return result.join('');
    }

    const getPassword = () => {
        const index = Math.floor(Math.random() * usedWords.length);
        return usedWords[index];
    }

    const createFiller = length => {
        const result = [];

        while (length) {
            result.push(result.push(terms.fillers[Math.floor(Math.random() * terms.fillers.length)]));
            length--;
        }

        return result.join('');
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

        const odds = {
            word: 3,
            dud: 5,
        }

        let word = '';
        let dud  = '';

        const hasWord = 1 === Math.floor(Math.random() * odds.word);
        const hasDud  = hasWord ? false : 1 === Math.floor(Math.random() * odds.dud);

        console.log(hasWord);

        if (hasWord) {
            word = terms.words[Math.floor(Math.random() * terms.words.length)];
            length -= word.length;
            usedWords.push(word);
            result.push(<button>word</button>);
        }

        if (hasDud) {
            dud = terms.duds[Math.floor(Math.random() * terms.duds.length)];
            length -= dud.length;
            usedDuds.push(dud);
            result.push(<button>{dud}</button>);
        }

        while (length > 0) {
            result.push(terms.fillers[Math.floor(Math.random() * terms.fillers.length)])
            length--;
        }

        return [createMemoryAddr(), ...shuffleArr(result)];
    }

    let amount = rows;
    const meetsRequirements = false;

    console.log(createRow(5))

    while (!meetsRequirements) {
        const row = createRow(rowLength);
        result.rows.push(row.join(''));
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


const HackingGame = ({screen, setScreen}) => {

    const gameBoard = hackingGameInit(5, 20, 3, 1);

    console.log('here')
    console.log(gameBoard);

    const [attemptsLeft, setAttemptsLeft] = useState([1, 1, 1, 1]);
    const [wordsCol, setWordsCol] = useState([])

    return (
        <div className="crt-on">
            <div className="page-flex">
                <div>
                    <h1>!@#%!@</h1>
                    <Nav screen={screen} setScreen={setScreen} />
                </div>
                <div className="hacking-inner">
                    <h2>Password Required</h2>
                    <span className="attempts-remaining">Attempts Remaining: {attemptsLeft.map(a => {
                        return <span className="attempt-graphic"></span>
                    })}</span>

                    <div className="hacking-game-cols">
                        <div className="rows">

                        </div>
                        <div className="likeness">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HackingGame;
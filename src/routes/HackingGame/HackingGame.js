import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import terms from './terms.js'
import './HackingGame.scss';

const createMemoryAddr = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let result = ['0', 'x', Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), alphabet[Math.floor(Math.random() * alphabet.length)], Math.floor(Math.random() * 9)];

    return result.join('');
}

const createMemoryAddrs = amount => {
    const result = [];

    for (let i = 0; i < amount; i++) {
        result.push(createMemoryAddr());
    }

    return result;
}

const getPassword = () => {
    const range = terms.words.length;
    const index = Math.floor(Math.random() * range);

    return terms.words[index];
}

const HackingGame = ({screen, setScreen}) => {

    const [attemptsLeft, setAttemptsLeft] = useState([1, 1, 1, 1]);
    const [memoryAddrCol, setMemoryAddrCol] = useState(createMemoryAddrs(20));
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
                        <div className="memory-addr">
                            {memoryAddrCol.map(addr => <div>{addr}</div>)}
                        </div>
                        <div className="words">
                            {wordsCol}
                        </div>
                        <div className="likeness">
                            
                        </div>
                    </div>
                    <button onClick={() => console.log(getPassword())}>clicky</button>
                </div>
            </div>
        </div>
    );
}

export default HackingGame;
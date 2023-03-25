import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import './HackingGame.scss';

const createMemoryAddr = () => {
    let result = ['0', 'x', Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]

    return result.join('');
}

const createMemoryAddrs = amount => {
    const result = [];

    for (let i = 0; i < amount; i++) {
        result.push(createMemoryAddr())
    }

    return result;
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

                    <div className="words-cols">
                        <div className="memory-addr">
                            {memoryAddrCol.map(addr => <div>{addr}</div>)}
                        </div>
                        <div className="words">
                            {wordsCol}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HackingGame;
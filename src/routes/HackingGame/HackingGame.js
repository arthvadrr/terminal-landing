import Nav from '../../components/Nav/Nav';
import './HackingGame.scss';

const HackingGame = ({
    screen,
    setScreen,
    gameBoard,
    attemptsLeft,
    hoveredWord,
    likenessCol
}) => {
    return (
        <div className="crt-on">
            <div className="page-flex">
                <div>
                    <h1>!@#%!@</h1>
                    <Nav screen={screen} setScreen={setScreen} />
                </div>
                <div className="hacking-inner">
                    <h2>Password Required</h2>
                    <span className="attempts-remaining">Attempts Remaining: {
                        attemptsLeft.map((a, index) => {
                            return <span key={`attempt-${index}`} className="attempt-graphic"></span>
                        })
                    }</span>
                    <div className="hacking-game-cols">
                        <div className="row words">
                            {gameBoard.rows.map((row, index) => <div key={`row-${index}`}>{row}</div>)}
                        </div>
                        <div className="row likeness">
                            <div className="hovered-word">&gt;&nbsp;{hoveredWord}</div>
                            <div className="likenessCol">{likenessCol}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HackingGame;
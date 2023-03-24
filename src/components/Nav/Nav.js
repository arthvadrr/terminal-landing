const Nav = ({screen, setScreen}) => {
    return (
        <nav>
            <ul>
            <li>
                <button onClick={() => setScreen('Home')} className={`terminal-btn ${screen === 'Home' ? 'active' : ''}`}>Home</button>
            </li>
            <li>
                <button onClick={() => setScreen('Projects')} className={`terminal-btn ${screen === 'Home' ? 'active' : ''}`}>Projects</button>
            </li>
            </ul>
      </nav>
    )
}

export default Nav;
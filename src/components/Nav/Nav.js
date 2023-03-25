const Nav = ({screen, setScreen}) => {
    return (
        <nav>
            <ul>
            <li>
                <button onClick={() => setScreen('Home')} className={`terminal-btn ${screen === 'Home' ? 'active' : ''}`}>Home</button>
            </li>
            <li>
                <button onClick={() => setScreen('Projects')} className={`terminal-btn ${screen === 'Projects' ? 'active' : ''}`}>Projects</button>
            </li>
            <li>
                <button onClick={() => setScreen('About')} className={`terminal-btn ${screen === 'About' ? 'active' : ''}`}>About</button>
            </li>
            </ul>
      </nav>
    )
}

export default Nav;
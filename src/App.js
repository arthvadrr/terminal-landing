import { useState } from 'react';
import Projects from './routes/Projects/Projects';
import Home from './routes/Home/Home';
import './App.scss';

const App = () => {

  const [screen, setScreen] = useState('Home');

  return (
    <div className="App">
      {screen === 'Home' && <Home />}
      {screen === 'Projects' && <Projects />}

      <nav>
        <ul>
          <li><a onClick={() => setScreen('Home')} className={`${screen === 'Home' ? 'active' : ''}`}>Home</a></li>
          <li><a onClick={() => setScreen('Projects')} className={`${screen === 'Home' ? 'active' : ''}`}>Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Projects from './routes/Projects/Projects';
import Home from './routes/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {

  const [screen, setScreen] = useState('Home');

  return (
    <div className="App">
      {screen === 'Home' &&
        <Home />
      }

      {screen === 'Projects' &&
        <Projects />
      }

      <nav>
        <ul>
          <li><a onClick={() => setScreen('Home')}>Home</a></li>
          <li><a onClick={() => setScreen('Projects')}>Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Projects from './routes/Projects/Projects';
import Nav from './components/Nav/Nav'
import Home from './routes/Home/Home';
import './App.scss';

const App = () => {

  const [screen, setScreen] = useState('Home');

  const setScreenProjects = () => {
    setScreen('Projects');
  }

  const setScreenHome = () => {
    setScreen('Home');
  }

  return (
    <div className="App">
      {screen === 'Home' && <Home />}
      {screen === 'Projects' && <Projects screen={screen} setScreen={setScreen}/>}

      <Nav 
        screen={screen}
        setScreen={setScreen}
      />
    </div>
  );
}

export default App;

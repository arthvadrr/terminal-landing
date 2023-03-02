import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './routes/Projects/Projects';
import Home from './routes/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Projects">Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

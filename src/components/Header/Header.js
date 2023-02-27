import './Header.scss';

const Header = () => {
  return (
    <header className="App-header">
      <div>Welcome to <span className="uppercase-text">Landing Terminal</span> (TM) Termlink</div>
      <pre className="ascii-art">
&nbsp;&nbsp;&nbsp;&nbsp;_         _   _     _       _____                   _             _ <br/>
&nbsp;&nbsp;&nbsp;/ \   _ __| |_| |__ ( )___  |_   _|__ _ __ _ __ ___ (_)_ __   __ _| |<br/>
&nbsp;&nbsp;/ _ \ | '__| __| '_ \|// __|   | |/ _ \ '__| '_ ` _ \| | '_ \ / _` | |<br/>
&nbsp;/ ___ \| |  | |_| | | | \__ \   | |  __/ |  | | | | | | | | | | (_| | |<br/>
 /_/   \_\_|   \__|_| |_| |___/   |_|\___|_|  |_| |_| |_|_|_| |_|\__,_|_|</pre>
    </header>
  );
}

export default Header;
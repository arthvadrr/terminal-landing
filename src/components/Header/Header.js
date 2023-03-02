import typeText from '../../scripts/typeText';
import './Header.scss';

const Header = () => {
  return (
    <header className="App-header">
      <div className="crt-on">{typeText('Welcome to', 200)}<span className="uppercase-text">Terminal Landing</span> (TM) Termlink</div>
      <div className="ascii-art">
      <pre className="crt-on">
&nbsp;_____                   _             _      _        _   _           <br/>
|_   _|__ _ __ _ __ ___ (_)_ __   __ _| |    / \   ___| |_(_)_   _____ <br/>
&nbsp;&nbsp;| |/ _ \ '__| '_ ` _ \| | '_ \ / _` | |   / _ \ / __| __| \ \ / / _ \<br/>
&nbsp;&nbsp;| |  __/ |  | | | | | | | | | | (_| | |  / ___ \ (__| |_| |\ V /  __/<br/>
&nbsp;&nbsp;|_|\___|_|  |_| |_| |_|_|_| |_|\__,_|_| /_/   \_\___|\__|_| \_/ \___|<br/>
                                                                        


                                                            

</pre>
</div>
    </header>
  );
}

export default Header;
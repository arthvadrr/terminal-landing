import React from 'react'
import Nav from '../../components/Nav/Nav';
import './AccessDenied.scss';

const AccessDenied = ({screen, setScreen, resetHackingGame}) => {

    const accessedDeniedAscii = <pre className="ascii-pre">{`                                                                                                                                                                                                                                                        
               AAA                                                                                                               DDDDDDDDDDDDD                                                iiii                                  ddddddd
              A:::A                                                                                                              D::::::::::::DDD                                            i::::i                                 d:::::d
             A:::::A                                                                                                             D:::::::::::::::DD                                           iiii                                  d:::::d
            A:::::::A                                                                                                            DDD:::::DDDDD:::::D                                                                                d:::::d 
           A:::::::::A            cccccccccccccccc    cccccccccccccccc    eeeeeeeeeeee        ssssssssss       ssssssssss          D:::::D    D:::::D     eeeeeeeeeeee    nnnn  nnnnnnnn    iiiiiii     eeeeeeeeeeee        ddddddddd:::::d 
          A:::::A:::::A         cc:::::::::::::::c  cc:::::::::::::::c  ee::::::::::::ee    ss::::::::::s    ss::::::::::s         D:::::D     D:::::D  ee::::::::::::ee  n:::nn::::::::nn  i:::::i   ee::::::::::::ee    dd::::::::::::::d 
         A:::::A A:::::A       c:::::::::::::::::c c:::::::::::::::::c e::::::eeeee:::::eess:::::::::::::s ss:::::::::::::s        D:::::D     D:::::D e::::::eeeee:::::een::::::::::::::nn  i::::i  e::::::eeeee:::::ee d::::::::::::::::d 
        A:::::A   A:::::A     c:::::::cccccc:::::cc:::::::cccccc:::::ce::::::e     e:::::es::::::ssss:::::ss::::::ssss:::::s       D:::::D     D:::::De::::::e     e:::::enn:::::::::::::::n i::::i e::::::e     e:::::ed:::::::ddddd:::::d 
       A:::::A     A:::::A    c::::::c     cccccccc::::::c     ccccccce:::::::eeeee::::::e s:::::s  ssssss  s:::::s  ssssss        D:::::D     D:::::De:::::::eeeee::::::e  n:::::nnnn:::::n i::::i e:::::::eeeee::::::ed::::::d    d:::::d 
      A:::::AAAAAAAAA:::::A   c:::::c             c:::::c             e:::::::::::::::::e    s::::::s         s::::::s             D:::::D     D:::::De:::::::::::::::::e   n::::n    n::::n i::::i e:::::::::::::::::e d:::::d     d:::::d 
     A:::::::::::::::::::::A  c:::::c             c:::::c             e::::::eeeeeeeeeee        s::::::s         s::::::s          D:::::D     D:::::De::::::eeeeeeeeeee    n::::n    n::::n i::::i e::::::eeeeeeeeeee  d:::::d     d:::::d 
    A:::::AAAAAAAAAAAAA:::::A c::::::c     cccccccc::::::c     ccccccce:::::::e           ssssss   s:::::s ssssss   s:::::s        D:::::D    D:::::D e:::::::e             n::::n    n::::n i::::i e:::::::e           d:::::d     d:::::d 
   A:::::A             A:::::Ac:::::::cccccc:::::cc:::::::cccccc:::::ce::::::::e          s:::::ssss::::::ss:::::ssss::::::s     DDD:::::DDDDD:::::D  e::::::::e            n::::n    n::::ni::::::ie::::::::e          d::::::ddddd::::::dd
  A:::::A               A:::::Ac:::::::::::::::::c c:::::::::::::::::c e::::::::eeeeeeee  s::::::::::::::s s::::::::::::::s      D:::::::::::::::DD    e::::::::eeeeeeee    n::::n    n::::ni::::::i e::::::::eeeeeeee   d:::::::::::::::::d
 A:::::A                 A:::::Acc:::::::::::::::c  cc:::::::::::::::c  ee:::::::::::::e   s:::::::::::ss   s:::::::::::ss       D::::::::::::DDD       ee:::::::::::::e    n::::n    n::::ni::::::i  ee:::::::::::::e    d:::::::::ddd::::d
AAAAAAA                   AAAAAAA cccccccccccccccc    cccccccccccccccc    eeeeeeeeeeeeee    sssssssssss      sssssssssss         DDDDDDDDDDDDD            eeeeeeeeeeeeee    nnnnnn    nnnnnniiiiiiii    eeeeeeeeeeeeee     eeeeeeeeeeeeeeeed
`}</pre>

    return (
        <div className="crt-on">
            <div className="page-flex">
                <header>
                    <h1>!@#%!@</h1>
                    <Nav screen={screen} setScreen={setScreen}/>
                </header>
                <section className="access-denied-inner">
                    <div className="access-denied-content">
                        {accessedDeniedAscii}
                        <button className="terminal-btn" onClick={() => resetHackingGame()}>Try again.</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AccessDenied;
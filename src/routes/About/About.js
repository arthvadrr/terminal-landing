import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import typeText from '../../scripts/typeText';
import './About.scss';

const About = ({screen, setScreen}) => {
    const [loadingTextArr, setLoadingTextArr] = useState('......'.split(''));
    const [aboutLoadingText, setAboutLoadingText] = useState('Loading.');

    const asciiPortrait = <pre className="ascii-pre">{`
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BGGPPP5P5PPGGB##B&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BPP5YJ??JYPPPGGGBGPPPGGGG55G&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBGGGP5YJJY555PPGGGBGGGGBBGGP55PGB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BBGGGPP5YJ??7777?JY5PPGBBBBBBBGP55P5PG#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&BGGBPYJ?777!!!!!!!!!!!!77?JYPGGGPPPGGPGBGB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@BPGGY?77!!!!!!!!!!!!!!!!!!!!!?J5PB####BGB#G5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&PY?!!!!!!!!!!!!!!!!!!!!!!!!!!7YP#&&###&&&#JG@&&&@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@#J!!!!!!!!!!!!!!!!!!!!!!!!!!!!?YPGB##&&&&&P?PBBB@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&B7!!!!!!!!!!!!!!!!!!!!!!!!!!!!?JYYPGBB#&&&#Y5&##&@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#?!!!!!!!!!!!!!!!!!!!!!!!!!!!!7??JYY55PB#&&&PG@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@&Y!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!7??JJYY55G##&G&@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@&BJ?777!!77777?JJ??77!!!!!777!!!!77??JYYYY5#&##@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@&PY5555J7!!?JJY55YJJ??????777!!!!77?JJJYYJJ5GB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@#5PGG5Y7!!7?JY55GPYY5YJ???7!!!!!77?JJ?J777??J@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@&G555Y?!!77???JYYJJJJJ??77!!!!!!!7?J?777?!7?7&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#YJJJ!!!7!!777????77!!!!!!!!!!!77??77?J?7!7Y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&??7!!!!777!!!!777!!!!!!!!!!!!!77??77??7?7!G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#J?7!!!!7???7!!!!!!!!!!!!!!!!!!777????777!J&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&5YJJJJY5Y?J?7!!!!!!!!!!!!!77!77????77!!7P&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&BG55GPPP5J7777!!!!!!!!!!!!77777??????7?B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPGBBBGGP5Y?7!!!!!!!!!!7777777??J??JJJ#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPGGP5555PGBG5Y7!!!!!!!!77?J??JJJYJJJ??#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&YGBPYJJ??JY5PGG5777??77?7?JJJJYYY5YJ???B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&PGG5YYYYJ?JJJ5GPYJ?JJ?JYJJJYY555P5YJ???P@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#GBGGBBBBGPPPP5PGGPYY5YYYYYYPP5555YJJ???J&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#GB##BB#BGGBBGGBBBGPPPPPPPPGG555YJJ???7??Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#BB#BB#BGBBBBBBB##BGBBBBBBBBPYYYJ????77???JG&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#GBB###B##BB####&#####BBBGP5YYYYJ???777????JBPP#@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#B###&&###&##&&&&&#BP5Y5YYYYJJ???777???7?PBBGPPB@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@&#BGGB##&&&&&&&&&###BPP55YYYYYJJ????777??7JG#BBBGPPG#@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@&BGGPPPPGGPGB###GGBBBGGPP5555YYYYYJ?????7777?JP##BBBBGPPPPPGB&@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@&#BGGPPPPPPPGGGGGBB##GJJY5PPPP5555YYYYJJ???77777?YG##BBBBBBGPPPPP555PGB&&@@@@@@@@@@@@
@@@@@@@@@@@@&BGPPPPPPPPPGGBGGGGBBB##B5JJJJYYYYYYYYJJJ???7777?YPB##BBBBBBBBGPPPPPPPP5555PG&@@@@@@@@@@
@@@@@@@@@@#GPPPPGGGGGGGGBGGGGBBBBBB###PYJ???JJJJJJ????77?J5GB####BBBBBBBBBGPGPPPPPPP555555G#&&@@@@@@
@@@@@@@@@BPPGGGGGGGGGGGGGGGBBBBBBBBB####G5YJ???????JY5PGB####BBBBBBBBBBBBBGGGPPPPPPPPPPPPPP5PPG#@@@@
@@@@@@@@&GGGGGGGGGGGGGGGGGGBBBBBBBBBB#######BGGGGBB######BBBBBBBBBBBBBBBBBGGGPPPPPPPPPPPPPPPPPPPPB#&
@@@@@@@&GGBGGGGGGGGGGGGGGGBBBBBBBBBBBBBBB##############BBBBBBBBBBBBBBBBBBBGGGPPPPPPPPPPPPPPPPPPPPP5P
@@@@@@#GBBBBBGGGGBGGGGGGGBBBBBBBBBBBBBBBBBB###BBBBBBBBBBBBBBBBBBBBBBBBBBBBGGGGPPPGGGPPGGGGPPGGPPPPPP
@@@@@#GGBBBBGGGGGGGGGGGGBBBBBBBBBBBBBBBBBBBBBBBBB##BBBB#BBBBBBBBBBBBBBBBBBGGGGGGGGGPGBBGGGGGGPPPGGGG
@@@@#GBBBBBBBGGGGGGGGGGBBBBBBBBBBBBBBBBBBBBBBBB#BBBBBBBBBBBBBBBBBBBBBBBBBBGBGGGGGGGGBBGGGGGGGGGGGGGG
@@@&GBBBBBBBGBBGGGGGGGBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBGGBGGGGGGGBBBGGGGGGBBGGGGGG
@@@GGBBBBBBBGBBGGPPGBBBB#B###BBBBBBBBBBBBBBBBBBBBB#BBBBBBBBBBBBBBBBBBBBBBBGBGBGGGGGBBBGGGBBBGBBGGGGG
@@#GBBBBBBBBBGGPGBBB########BBBBBBBBBBBBBBBBBBBB#BBBBBBBBBBBBBBBBBBBBBBBBBGGGBGGGGB#BGGBBBGGBBBGBBGG
@&GBBBBBBBBGGGBB#####BBBBBBBBBBBBBBBBBBBBBBBB###BBBBBBBBBBBBBBBBBBBBBBBBBBGBBBBGGGB#GBBBBGGBBBBBBBBB
&GBBBBBBBBGGB####BBBBBBBBBBBBBBBBBBBBBBBBBBB###BBBBBBBBBBBBBBBBBBBBBBBBBBBGBBBBGGB#BBBBBBGBBBBBBGBBB
BBBBBBBBBBBB###BBBBBBBBBBBBBBBBBBBBBBBBBBBB##BBBBBBBBBBBBBBBBBBBBBBBBBBBBBGBBBBBBB#BBBBBGBBBBBBBBBBB`}</pre>

    useEffect(() => {
        typeText(aboutLoadingText, setAboutLoadingText, loadingTextArr, setLoadingTextArr, 100);
        
        if (loadingTextArr.length === 0) {
          setAboutLoadingText('');
        }
      })

    return (
        <div className="crt-on">
        {loadingTextArr.length !== 0 &&
            <span>{aboutLoadingText}</span>
        }
        {loadingTextArr.length === 0 &&
        <div className="page-flex">
            <div>
                <h1>About</h1>
                <Nav screen={screen} setScreen={setScreen}/>
            </div>
            <span className="about-inner">
                {asciiPortrait}
                <p>Hello there! My name is Bryan and I'm a proud Southern native hailing from the beautiful state of Tennessee. I'm a versatile and dedicated frontend developer with a passion for creating elegant and functional websites using WordPress and PHP. </p>
                <p> When I'm not immersed in the world of code, you'll likely find me enjoying the great outdoors on my bike, exploring scenic routes and challenging myself with new trails. As a bearded fellow, I take pride in my facial hair and its reflection of my unique personality. </p>
                <p> In my downtime, I enjoy indulging in a good game of chess, which helps keep my strategic thinking sharp and complements my problem-solving skills in the digital realm. I'm also a bit of a handyman, always ready to take on a new project or lend a helping hand to friends and family.
                </p>
                <p> A true Southern at heart, I can't resist the taste of a refreshing sweet tea after a long day, especially while watching my favorite sport, hockey. I find inspiration in both the physical and mental aspects of the game and try to bring the same level of dedication and teamwork to my professional life.</p>
                <p> In summary, I'm a frontend code enthusiast, avid biker, chess player, handyman, and hockey fan with a love for sweet tea and Southern charm. If you'd like to connect, feel free to reach out or browse my portfolio to learn more about my work and experience.</p>

                <cite>Probably generated by ChatGPT.</cite>
            </span>
        </div>
        }
        </div>
    )
}

export default About;
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import typeText from '../../scripts/typeText';
import './About.scss';

const About = ({screen, setScreen}) => {
    const [loadingTextArr, setLoadingTextArr] = useState('......'.split(''));
    const [aboutLoadingText, setAboutLoadingText] = useState('Loading.');

    useEffect(() => {
        typeText(aboutLoadingText, setAboutLoadingText, loadingTextArr, setLoadingTextArr, 100);
        
        if (loadingTextArr.length === 0) {
          setAboutLoadingText('');
        }
      })

    return (
        <>
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
                <div className="ascii-portrait"></div>         
                <p> Hello there! My name is Bryan and I'm a proud Southern native hailing from the beautiful state of Tennessee. I'm a versatile and dedicated frontend developer with a passion for creating elegant and functional websites using WordPress and PHP. </p>
                <p> When I'm not immersed in the world of code, you'll likely find me enjoying the great outdoors on my bike, exploring scenic routes and challenging myself with new trails. As a bearded fellow, I take pride in my facial hair and its reflection of my unique personality. </p>
                <p> In my downtime, I enjoy indulging in a good game of chess, which helps keep my strategic thinking sharp and complements my problem-solving skills in the digital realm. I'm also a bit of a handyman, always ready to take on a new project or lend a helping hand to friends and family.
                </p>
                <p> A true Southern at heart, I can't resist the taste of a refreshing sweet tea after a long day, especially while watching my favorite sport, hockey. I find inspiration in both the physical and mental aspects of the game and try to bring the same level of dedication and teamwork to my professional life.</p>
                <p> In summary, I'm a frontend code enthusiast, avid biker, chess player, handyman, and hockey fan with a love for sweet tea and Southern charm. If you'd like to connect, feel free to reach out or browse my portfolio to learn more about my work and experience.</p>  
            </span>
        </div>
        }
        </>
    )
}

export default About;
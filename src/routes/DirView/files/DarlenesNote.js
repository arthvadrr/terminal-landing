import { useEffect } from 'react';
import darlene       from './assets/darlene.jpg';

const DarlenesNote = ({scrollToId}) => {

    useEffect(() => {
        scrollToId();
        }, []
    );

    return (
        <div className="darlene-note" id="dirView">
            <img className="darlene" src={darlene} alt="Wow, she's somethin"/>
            <div className="note-inner">
                <h2>To Jeb, from YOUR ANGRY WIFE DARLENE</h2>
                <p>YOU GOOD FER NOTIN PILE OF FARM SCUM, YER DINT DID FERGET MY BIRTHDAY DIDGYA?</p>
                <p>Yer no I luv u Jeb, but if I catch you courtin' round that harlot at the local Wal-Mart one more gin' I'm gonna beet yer silly!</p>
                <p>pee es. Now yer get on gittin' down thur ter the 7-11 and git me some Bush Lite and sum daisy flowers. An' a plunger</p>
                <p>- Frum yer LOVING AND ONLY WIFE darlene</p>
            </div>
        </div>
    )
}

export default DarlenesNote
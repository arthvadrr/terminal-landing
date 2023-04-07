import { useEffect } from 'react';

const NotPasswords = ({scrollToId}) => {
    
    useEffect(() => {
        scrollToId();
        }, []
    );

    return (
        <dl className="crt-on" id="dirView">
            <dt>amazon</dt>
            <dd>ducksarecool69</dd>
            <dt>facebook</dt>
            <dd>myshoesdontfit111</dd>
            <dt>bank</dt>
            <dd>showwwwmewhatugottttt</dd>
            <dt>Work VPN</dt>
            <dd>password123</dd>
            <dt>twitch</dt>
            <dd>dontwatchme#yolosupdawg</dd>
            <dt>lastpass</dt>
            <dd>password</dd>
            <dt>onepass</dt>
            <dd>password</dd>
            <dt>onlyfans</dt>
            <dd>k^&ei!2i@489(=8#JF#418@#+8^902$%</dd>
        </dl>
    )
}

export default NotPasswords;
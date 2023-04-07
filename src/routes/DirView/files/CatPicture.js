import { useEffect } from 'react';

const CatPicture = ({pic, alt, scrollToId}) => {

    useEffect(() => {
        scrollToId();
        }, []
    );

    return(
        <img className="crt-on" src={pic} alt={alt} id="dirView"/>
    );
}

export default CatPicture;
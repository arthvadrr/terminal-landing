import { useEffect } from 'react';

const GroceryList = ({scrollToId}) => {

    useEffect(() => {
        scrollToId();
        }, []
    );

    return(
        <div className="crt-on" id="dirView">
        <h2>Grocery List</h2>
        <ul>
            <li>Tracktor Stuffs</li>
            <li>Tissues</li>
            <li>Overalls</li>
            <li>Chicken Feed</li>
            <li>Uncle Dan's Country BBQ Sauce</li>
            <li>Fried chiken</li>
            <li>Kuntry hat</li>
            <li>mor Socks</li>
            <li>Sweet Tea</li>
            <li>Hay</li>
            <li>sum gun ammo</li>
            <li>fencin'</li>
            <li>Sprinker faucet</li>
        </ul>
        </div>
    )
}

export default GroceryList;
import { useEffect } from 'react';

const TodoList = ({scrollToId}) => {

    useEffect(() => {
        scrollToId();
        }, []
    );

    return (
        <div className="crt-on" id="dirView">
            <h2>Terdo List</h2>
            <ul>
                <li>Don' ferget bout' all dem chikens day hungry</li>
                <li>figur out how ter use dis hur computer thingy?</li>
                <li>Call dem basterds at kuntryco day keep rejektin my orders!!!</li>
                <li>Figur out when Darlene's birthday is agin'</li>
                <li>plow fields</li>
                <li>Sleep in barn agin' cause darlene be madder than a three-legger hippo. wider too.</li>
                <li>Figur out what this thang "twidder" is</li>           
            </ul>
        </div>
    )
}

export default TodoList;
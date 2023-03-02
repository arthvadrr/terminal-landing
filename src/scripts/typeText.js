const sleep = time => new Promise(res => setTimeout(res, time));

async function typeText(state, setState, arr, setArr, speed) {
    await sleep(speed); // MUST come first (before re-render)

    const shallowArr = [...arr];

    if (shallowArr.length > 0) {
        setState(state + shallowArr.shift());
        setArr(shallowArr);
    }
}

export default typeText;
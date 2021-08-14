const waitFor5sec = () => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('output');
        }, 5000);
    })
}

const add = async (a, b) => {
    //Waiting for 5 sec
    await waitFor5sec();

    return a+b;
}

export default add;

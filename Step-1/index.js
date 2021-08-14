const a = 12;

const divide = function (a, b) {
    return a/b;
}

const output = divide(a, 0);
console.log('DIVIDE RESULT', output);


const items = [];

for (let i = 0; i < 40; i++) {
    items[i] = i;
}



const evenItems = items.filter((value, index) => index % 2 === 0).map(value => 2*value);
console.log(evenItems);

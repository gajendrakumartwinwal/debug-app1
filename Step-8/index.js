//Run npm run build:webpack1
import add from "./math";

//Debuggin working now using webpack
const result = add(2, 2);

result.then(value => {
    console.log('OUTPUT2', value);
})


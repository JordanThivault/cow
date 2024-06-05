


const objetExoCow = require("./information");

// console.log (objetExoCow);

function generateCowMessage(obj) {
    return `Hello, I'm ${obj.nom} from ${obj.campus}`;
}

const message = generateCowMessage(objetExoCow);

const cowsay = require("cowsay");


console.log(cowsay.say({
    text : message,
    e : "oO",
    T : "U "
}));
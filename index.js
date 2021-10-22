const conf = require("./config.json");
const clipboardy = require('clipboardy');

//console.log(conf.text);
const colorArray = ["enemy", "team", "system", "notification", "warning"];

var count = 0;
var result = "";

function next() {
    count = (count == (colorArray.length - 1)) ? 0 : (count + 1);
}

function transfor(text) {
    text.split("").forEach(letter => {
        result = result + `<${colorArray[count]}>${letter}</>`;
        if (letter != " ") {
            next();
        }
    });
    return result;
}

var toConvert = clipboardy.readSync();
var converted = transfor(toConvert);
clipboardy.writeSync(converted);
//console.log(result);
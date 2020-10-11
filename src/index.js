const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = "", str2 = "", result = "", decode = "";
    while (expr.length != 0) {
        str = expr.slice(0, 10);
        expr = expr.substr(10);
        if (str == "**********") {
            decode += " ";
            continue;
        }
        while (str.length != 0) {
            str2 = str.slice(0, 2);
            str = str.substr(2);
            if (str2 == "11") {
                result += "-";
            }
            if (str2 == "10") {
                result += ".";
            }
        }
        decode += MORSE_TABLE[result];
        result = "";
    }
    return decode;
}

module.exports = {
    decode
};
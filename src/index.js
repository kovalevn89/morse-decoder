const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function splitString(input, size){
    let binaryArray = [];
    
    for(let i = input.length; i > 0; i-=size){
        binaryArray.unshift(input.slice(i - size, i)); 
    }
    
    return binaryArray;
}
  
function decode(expr) {
    const binaryArray = splitString(expr, 10);
    
    return binaryArray.map(function(value) {
        return value === '**********' ? ' ' : splitString(value, 2).reduce(function(result, value){
            return result += value === '11' ? '-' : (value === '10') ? '.' : '';
        },''); 
    }).map(function(value){
        return value === ' ' ? ' ' : MORSE_TABLE[value];
    }).join('');
}

module.exports = {
    decode
}
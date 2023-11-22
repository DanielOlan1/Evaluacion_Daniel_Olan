const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWords(inputString) {
  const words = inputString.split(' ');
  const reversedWords = words.map(word => reverseString(word));
  console.log(`Palabras al revés: ${reversedWords.join(' ')}`);
  rl.close();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

rl.question('Introduce una palabra o frase: ', (input) => {
    reverseWords(input);
  });
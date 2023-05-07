const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

const outFilePath = path.join(__dirname, 'text.txt');

stdout.write('Enter the text:\n');

fs.writeFile(outFilePath, '', (err) => {
  if (err) throw err;
});

stdin.on('data', (data) => {
  let inputText = data.toString();
  if (inputText === 'exit' + inputText.slice(-2)) {
    process.exit();
  } else {
    fs.appendFile(outFilePath, inputText, (err) => {
      if (err) throw err;
      console.log('Тект добавлен');
    });
  }
});

process.on('exit', () => stdout.write('Упорства в изучении Node.js!'));

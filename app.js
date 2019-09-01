const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is a test.');
fs.appendFileSync('notes.txt', ' redvelvet number 1.');
const index = require('./index');

console.log('password', index.generatePassword(4, false));
console.log('default', index.generatePassword());
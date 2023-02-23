# password-generator-service
### An PASSWORD generator package for node js.

A highly customizable and easy to use PASSWORD Generator in Javascript. Just import the package and send your inputs. It will generate random and unique passwords.

Written in ES5/ES6 for maximum compatibility.

## Install

npm install password-generator-service

## Usage

### To generate PASSWORD

generatePassword() it takes two parameters, first one is length of password and second is boolean where, false returns small alphabets and true returns capital aphabets as well as symbols.

```javascript

let services = require("password-generator-service");

let password = services.generatePassword(8,  false);  // any digit 4, 6, 8,...


Output: password an2ik2et

```

By default generatePassword() generates 6 digits password.

```javascript

let services = require("password-generator-service");

let password = services.generatePassword();


Output: password a0ni6c

```

## License

MIT
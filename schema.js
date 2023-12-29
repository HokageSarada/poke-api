const file = require('./json/squirtle.json');
const ejs = require('easy-json-schema');
const jsonSchema = ejs(file)
console.log(JSON.stringify(jsonSchema));
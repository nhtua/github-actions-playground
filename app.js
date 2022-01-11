const util = require('util')
const {add} = require('./functions')

console.log('hello world');
console.log('Today is a beautiful day.')
var a = 2
var b = 9
console.log(util.format("Add: %d+%d=%d", a, b, add(a,b)))

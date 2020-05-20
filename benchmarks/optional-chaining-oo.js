const SafeAccessObject = require('../safe-access-object');

const objComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const objIncomplete = JSON.parse('{"a":{"c": 2}}');

const safeObjComplete = new SafeAccessObject(objComplete);
const safeObjIncomplete = new SafeAccessObject(objIncomplete);

console.log(safeObjComplete.getByPath('a.b.c'));
console.log(safeObjIncomplete.getByPath('a.b.c'));
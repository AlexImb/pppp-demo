const SafeAccessObject = require('../safe-access-object');

const dummyObjectComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const dummyObjectIncomplete = JSON.parse('{"a":{"c": 2}}');

const safeObjectComplete = new SafeAccessObject(dummyObjectComplete);
const  safeObjectcomplete = new SafeAccessObject(dummyObjectIncomplete);

console.log(safeObjectComplete.getByPath('a.b.c'))
console.log(safeObjectcomplete.getByPath('a.b.c'))
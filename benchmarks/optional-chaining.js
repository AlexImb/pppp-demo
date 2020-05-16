const SafeAccessObject = require('../safe-access-object');

const dummyObjectComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const dummyObjectIncomplete = JSON.parse('{"a":{"c": 2}}');

const testComplete = new SafeAccessObject(dummyObjectComplete);
const testIncomplete = new SafeAccessObject(dummyObjectIncomplete);

console.log(testComplete.getByPath('a.b.c'))
console.log(testIncomplete.getByPath('a.b.c'))
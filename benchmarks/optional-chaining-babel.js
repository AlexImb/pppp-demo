const SafeAccessObject = require('../safe-access-object');

const dummyObjectComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const dummyObjectIncomplete = JSON.parse('{"a":{"c": 2}}');

console.log(dummyObjectComplete.a.b?.c)
console.log(dummyObjectIncomplete.a.b?.c)
const objComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const objIncomplete = JSON.parse('{"a":{"c": 2}}');

console.log(objComplete.a.b?.c)
console.log(objIncomplete.a.b?.c)
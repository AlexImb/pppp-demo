var starttime = new Date();
for (i=0; i < 10000; i++) {

const objComplete = JSON.parse('{"a":{"b":{"c": 1}}}');
const objIncomplete = JSON.parse('{"a":{"c": 2}}');

console.log(objComplete.a.b?.c)
console.log(objIncomplete.a.b?.c)
}

var endtime = new Date();
var runtime = endtime.getTime() - starttime.getTime();
console.log(runtime);
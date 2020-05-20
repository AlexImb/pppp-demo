var starttime = new Date();
for (i=0; i < 10000; i++) {
    
const Log = require('../decorators/log.decorator');

class Example {
    @Log
    hello(name) {
        return `Hello ${name}!`;
    }
}

const example = new Example();
example.hello('world')
}

var endtime = new Date();
var runtime = endtime.getTime() - starttime.getTime();
console.log(runtime);
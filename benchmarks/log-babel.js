const Log = require('../decorators/log.decorator');

class Example {
    @Log
    hello(name) {
        return `Hello ${name}!`;
    }
}

const example = new Example();
example.hello('world')
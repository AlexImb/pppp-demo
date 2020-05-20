const {DebugLogger, LoggerV1} = require('../oo-logger/logger');

class Example {
    constructor() {
        this.logger = new LoggerV1(new DebugLogger())
    }

    hello(name) {
        return `Hello ${name}!`;
    }
}

const example = new Example();
example.logger.callLogFunctionCall(example.hello, ['world'], example);
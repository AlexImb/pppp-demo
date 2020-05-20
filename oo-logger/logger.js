class Logger {
    logFunctionCall(func, args, object) {
        console.log("ERROR: log method not overridden");
    }

    logResponse(response) {
        console.log("ERROR: log method not overridden");
    }
}

class ProductionLogger extends Logger {
    constructor(filepath) {
        super();
        this.filepath = filepath;
    }

    logFunctionCall(func, args) {
        //TODO log to file
    }

    logResponse(response) {
        //TODO log to file
    }
}

class DebugLogger extends Logger {
    logFunctionCall(func, args, object) {
        if (typeof func === 'function') {
            console.log(`Calling function with: ${args}`);
            try {
                const result = func.apply(object, args);
                console.log(`Function call result: ${result}`);
                return result;
            } catch (e) {
                console.log(`Error while calling function: ${e}`);
                throw e;
            }
        }
        return undefined;
    }


    logResponse(response) {
        //TODO log response to console
    }
}

class AbstractLogger {
    callLogFunctionCall(func, args, object) {
        console.log("ERROR: callLog method not overridden");
    }

    callLogResponse(response) {
        console.log("ERROR: callLogResponse method not overridden");
    }
}

class LoggerV1 extends AbstractLogger {
    constructor(logger) {
        super();
        this.logger = logger;
    }

    callLogFunctionCall(func, args, object) {
        this.logger.logFunctionCall(func, args, object);
    }

    callLogResponse(response) {
        this.logger.logResponse(response);
    }
}

exports.Logger = Logger;
exports.ProductionLogger = ProductionLogger;
exports.DebugLogger = DebugLogger;
exports.AbstractLogger = AbstractLogger;
exports.LoggerV1 = LoggerV1;
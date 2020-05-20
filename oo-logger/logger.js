class Logger {
    logFunctionCall(func, args, object) {
        console.log("ERROR: log method not overridden");
    }

    logResponse(func, args, object) {
        console.log("ERROR: log method not overridden");
    }
}

class ProductionLogger extends Logger {
    constructor(filepath) {
        super();
        this.filepath = filepath;
    }

    logFunctionCall(func, args, object) {
        //TODO log to file
    }

    logResponse(func, args, object) {
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


    logResponse(func, args, object) {
        if (typeof func === 'function') {
            console.log(`Sending response: ${args.map(JSON.stringify)}`);
            try {
                return func.apply(object, args);
            } catch (e) {
                console.log(`Error while sending response: ${e}`);
                throw e;
            }
        }
        return undefined;
    }
}

class AbstractLogger {
    callLogFunctionCall(func, args, object) {
        console.log("ERROR: callLog method not overridden");
    }

    callLogResponse(func, args, object) {
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

    callLogResponse(func, args, object) {
        this.logger.logResponse(func, args, object);
    }
}

exports.Logger = Logger;
exports.ProductionLogger = ProductionLogger;
exports.DebugLogger = DebugLogger;
exports.AbstractLogger = AbstractLogger;
exports.LoggerV1 = LoggerV1;
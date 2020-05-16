const Log = (target, _, descriptor) => {
  const logger = console; // can depend on ENV
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      logger.log(`Calling function with: ${args}`);
      try {
        const result = original.apply(this, args);
        logger.log(`Function call result: ${result}`);
        return result;
      } catch (e) {
        logger.log(`Error while calling function: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
};


module.exports = Log;

const LogResponse = (target, _, descriptor) => {
  const logger = console; // can depend on ENV
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      logger.log(`Sending response: ${args.map(JSON.stringify)}`);
      try {
        return original.apply(this, args);
      } catch (e) {
        logger.log(`Error while sending response: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
};


module.exports = LogResponse;

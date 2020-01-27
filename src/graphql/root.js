const services = require('../services')

// The root provides a resolver function for each API endpoint
const root = {
  isStarted: () => {
    return services.isStarted()
  },
  getLevel: () => {
    return services.getLevel()
  },
  setLevel: ({level}) => {
    services.setLevel(level)
    return level
  }
};

exports.root = root

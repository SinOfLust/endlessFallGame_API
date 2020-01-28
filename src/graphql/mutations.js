const { setLevelInDB } = require('./resolvers');

// GraphQL mutation to set level in DB ( here's a JSON file )
exports.setLevel = ({ level }) => {
  setLevelInDB(level);
  return level;
};

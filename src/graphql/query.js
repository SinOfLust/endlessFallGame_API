const { getLevelFromDB, getSkinsFromDB } = require('./resolvers');

// GraphQL query to get level from DB ( here's a JSON file)
exports.getLevel = () => {
  return getLevelFromDB();
};

// GraphQL query to get skins from DB (here's its from public dir)
exports.getSkins = () => {
  return getSkinsFromDB();
};

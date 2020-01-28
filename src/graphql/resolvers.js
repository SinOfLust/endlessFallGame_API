const fs = require('fs');

/**
 * resolver to read JSON file from a GraphQL query
 */
exports.getLevel = () => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  return data.level;
};

/**
 * resolver to set data in JSON file from a GraphQL query
 * @param {Number} level - the level to set
 */
exports.setLevel = level => {
  fs.readFile('data.json', function(err, data) {
    if (err) throw err;
    const json = JSON.parse(data);
    json.level = level;
    fs.writeFile('data.json', JSON.stringify(json), function(err) {
      if (err) throw err;
    });
  });
};

/**
 * resolver to fetch files within public/skins directory from a GraphQL query
 */
exports.getSkins = () => {
  const images = fs.readdirSync('public/skins');
  let imagesUrl = [];
  images.forEach(image => {
    imagesUrl.push(`http://localhost:4000/skins/${image.toString().trim()}`);
  });
  return imagesUrl;
};

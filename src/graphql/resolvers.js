const fs = require('fs');
//const uri =
//'mongodb+srv://adminMaster:AuDdjKB1KIZYnp1T@fallingangel-c6oh4.gcp.mongodb.net/sample_analytics?retryWrites=true&w=majority';
const model = require('./collections/collections');
const mongoose = require('mongoose');
const host = process.env.DB_HOST_ATLAS;
const password = process.env.DB_PASSWORD;
const bdd = process.env.DB_NAME;

/**
 * resolver to read JSON file from a GraphQL query
 */
const getLevel = () => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  console.log(data.level);
  return data.level;
};

/**
 * resolver to set data in JSON file from a GraphQL query
 * @param {Number} level - the level to set
 */
const setLevel = level => {
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
const getSkins = () => {
  const images = fs.readdirSync('public/skins');
  let imagesUrl = [];

  images.forEach(image => {
    imagesUrl.push(`http://localhost:4000/skins/${image.toString().trim()}`);
  });
  return imagesUrl;
};

/**
 * Open a mongoDB connection and query it
 */
/* const databaseConnection = async () => {
  mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  //exemple of query : SELECT products from ACCOUNTS where limit = 9000
  let datas = [];
  await model.find({ limit: 9000 }, { products: 1 }, (err, data) => {
    datas = data;
  });
  return datas;
}; */

const databaseConnection = async () => {
  console.log('object');
  try {
    const conn = await mongoose.connect(
      (mongo_uri = `mongodb+srv://${host}:${password}@fallingangel-c6oh4.gcp.mongodb.net/${bdd}?retryWrites=true&w=majority`),
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );

    // Exemple of query : SELECT products from ACCOUNTS where limit = 9000
    let datas = [];
    await model.find({ limit: 9000 }, { products: 1 }, (err, data) => {
      datas = data;
    });
    return datas;
  } catch (error) {
    console.log('connection error:', error);
  }
};

exports.getDataFromDB = databaseConnection;
exports.getSkinsFromDB = getSkins;
exports.getLevelFromDB = getLevel;
exports.setLevelInDB = setLevel;

const fs = require('fs')
const stream = require('stream')

function isStarted() {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    return data.started
}

function getLevel() {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    return data.level
}

function setLevel(level) {
    fs.readFile('data.json', function (err, data) {
        if (err) throw err;
        const json = JSON.parse(data);
        json.level = level;
        fs.writeFile("data.json", JSON.stringify(json), function (err) {
            if (err) throw err;
        });
    })
}

function getSkins() {
  const images = fs.readdirSync('public/skins')
  let imagesUrl = []
  images.forEach((image) => {
    console.log(`http://localhost:4000/skins/${image.toString().trim()}`)
    imagesUrl.push(`http://localhost:4000/skins/${image.toString().trim()}`)
  })
  return imagesUrl
}

exports.getSkinsFromDB = getSkins
exports.isStarted = isStarted
exports.getLevelFromDB = getLevel
exports.setLevelInDB = setLevel
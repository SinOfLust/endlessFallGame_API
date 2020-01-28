const fs = require('fs')

const update = (table, value) => {
    fs.readFile('data.json', function (err, data) {
        if (err) throw err;
        const json = JSON.parse(data);
        json[`${table}`] = value;
        fs.writeFile("data.json", JSON.stringify(json), function (err) {
            if (err) throw err;
        });
    })
}


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

exports.update = update
exports.isStarted = isStarted
exports.getLevelFromDB = getLevel
exports.setLevelInDB = setLevel
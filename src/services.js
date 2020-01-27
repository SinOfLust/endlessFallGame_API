const fs = require('fs')

const update = (table, started) => {
    fs.readFile('data.json', function (err, data) {
        const json = JSON.parse(data);
        json[`${table}`] = started
        fs.writeFile("data.json", JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    })
}


function isStarted() {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    return data.started
}

exports.update = update
exports.isStarted = isStarted

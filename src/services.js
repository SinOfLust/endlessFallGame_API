var fs = require('fs')

const update = (table, started) => {
    fs.readFile('data.json', function (err, data) {
        var json = JSON.parse(data);
        json[`${table}`] = started
        fs.writeFile("data.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
    })
}

exports.update = update

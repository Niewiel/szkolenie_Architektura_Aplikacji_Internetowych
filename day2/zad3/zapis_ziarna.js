var fs = require('fs');
var ziarna = ['pszenica', 'ryż', 'owies', 'żyta', 'quinoa'];
var options = {encoding: 'UTF-8', flag: 'w'};
var fileWriteStream = fs.createWriteStream("ziarna.txt", options);
fileWriteStream.on("close", function () {
    console.log("zamknięto plik");

});
while (ziarna.length) {
    var dane = ziarna.pop() + " ";
    fileWriteStream.write(dane);
    console.log("zapisano %s", dane);
}
fileWriteStream.end();
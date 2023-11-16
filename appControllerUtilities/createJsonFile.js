const fs = require("fs");

async function createJsonFile(objArray){
    const jsonContent = JSON.stringify(objArray, undefined, 2)
    fs.writeFileSync("result.json", jsonContent)
}


module.exports = createJsonFile;
const fileReader = require("./fileReader");

async function serveJSON_restAPI () {
    const fileContents = await fileReader("result.json");
    return fileContents;
}

module.exports = serveJSON_restAPI;
const fileReader = require("./fileReader")

async function getImgClip(fileName = "rawClipFile.txt"){
    let result = await fileReader(fileName);
    result = result.toString();
    let findText = result.match(/\{"thumbnails"\:\[\{\"url\"\:\"*.+?(?=\?)/)[0]
    const sSubStr = "{\"thumbnails\":[{\"url\":\"".length;
    const ret  = findText.slice(sSubStr);
    return ret;
}

module.exports = getImgClip;
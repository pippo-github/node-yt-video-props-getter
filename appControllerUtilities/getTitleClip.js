const fileReader = require("./fileReader")

async function getTitleClip(fileName = "rawClipFile.txt"){

    let result = await fileReader(fileName);
    result = result.toString();
    let findText = result.match(/<title>*.+?(?=\<)/gim)[0];

    const sSubStr = "<title>".length;
    const strToEnd = findText.length - "- YouTub".length
    const ret  = findText.slice(sSubStr, strToEnd -1 );

return ret;
}

module.exports = getTitleClip
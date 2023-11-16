const fileReader = require("./fileReader");

async function getWatchClip(fileName = "remoteRawPlayList.txt"){
    let fileContent = await fileReader(fileName)
    console.log(":::::::::: getWatchClip ::::::::")
    const retMatch = fileContent.match(/\/watch\?v=.{11}/gim)
    const uniqVal = retMatch.filter((el, idx) =>{
        return retMatch.indexOf(el) === idx;
    }) 

    return uniqVal;
}

module.exports = getWatchClip;
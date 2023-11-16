const axios = require("axios");
const fs = require("fs");

async function rReadPlayListAllBksRaw(res, playListSingleUrl, clipNum){
    let fileContent = '';
    let extractUrlsSections = []
    console.log("On rReadPlayListAllBksRaw, url to read: " + playListSingleUrl)
    try{
        // axios.defaults.timeout = 20000;       
        axios.defaults.timeout = 0;       
        fileContent = await axios.get(playListSingleUrl);
        fileContent = await fileContent.data.toString();

        extractUrlsSections = await fileContent.match(/expiresInSeconds.+?(?=probeUrl|playbackTracking|videostatsPlaybackUrl)/gim)
        extractUrlsSections = await extractUrlsSections.toString();

        let findTitle = await fileContent.match(/<title>*.+?(?=\<)/gim)[0];
        let sSubStr = "<title>".length;
        const retTitle  = await findTitle.slice(sSubStr, findTitle.length - 1 );

        let findImg = fileContent.match(/\{"thumbnails"\:\[\{\"url\"\:\"*.+?(?=\?)/)[0]
        sSubStr = "{\"thumbnails\":[{\"url\":\"".length;
        const ret  = findImg.slice(sSubStr);
    

        fs.writeFileSync("clip" + clipNum +".txt", ""); // reset the file

        fs.appendFileSync("clip" + clipNum +".txt", "\n\n-------------------\n")
        fs.appendFileSync("clip" + clipNum +".txt", playListSingleUrl)
        fs.appendFileSync("clip" + clipNum +".txt", "\n-------------------\n\n")
        fs.appendFileSync("clip" + clipNum +".txt", "\n*********************\n\n")
        fs.appendFileSync("clip" + clipNum +".txt", `<title> ${retTitle} </title>` )
        fs.appendFileSync("clip" + clipNum +".txt", "\n*********************\n\n")
        fs.appendFileSync("clip" + clipNum +".txt", findImg )
        fs.appendFileSync("clip" + clipNum +".txt", "\n*********************\n\n")
        fs.appendFileSync("clip" + clipNum +".txt", extractUrlsSections);
        fs.appendFileSync("clip" + clipNum +".txt", "\n*********************\n\n")

    }
    catch(e){
        console.log(e.message)
    }
    return  extractUrlsSections;
}

module.exports = rReadPlayListAllBksRaw;
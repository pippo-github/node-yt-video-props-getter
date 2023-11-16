const getTitleClip = require("./getTitleClip");

async function getTitlePlayList(file = "remoteRawPlayList.txt"){
    const playListTitle = await getTitleClip(file);
    return playListTitle;
}

module.exports = getTitlePlayList;
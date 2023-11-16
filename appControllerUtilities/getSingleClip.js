const getRemoteFileReaderRaw = require("./getRemoteFileReaderRaw");
const getTitleClip           = require("./getTitleClip");
const getImgClip             = require("./getImgClip");

async function getSingleClip(res, rType){
    console.log("single clip page requested");
    const retClipObj = await getRemoteFileReaderRaw(res, rType)
    const titleClip = await getTitleClip();
    const imageClip = await getImgClip();
    console.log(titleClip);
    console.log(imageClip);

    const sClpObj = {
        retClipObj,
        titleClip,
        imageClip
    }
    return sClpObj;
}

module.exports = getSingleClip;
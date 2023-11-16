const deleteFile      = require("./deleteFile");
const getUrlsSections = require("./getUrlsSections");
const isCripted       = require("./isCripted");
const axios = require("axios");
const fs = require("fs")

async function getRemoteFileReaderRaw(res, remoteUrlClip){
   
    deleteFile("rawClipFile.txt");
    deleteFile("filePropsAndUrl.txt");
    deleteFile("writeRawSectionAndProps.txt")

    const response    = await axios.get(remoteUrlClip);
    const contentFileRemoteTxt = await response.data;

    try{
        await fs.appendFileSync("rawClipFile.txt", contentFileRemoteTxt);
        const ret = await isCripted();
        console.log("ret is:::::::::");
        console.log(ret);
    }
    catch(e){
        console.log("encripted page error: ", e)
        const errMsg = {
            title: "encripted page", 
            subTitle: "The page selected for downloading the clip is encrypted.", 
            msg: "<b>The clip selected is encrypted, at moment this application do not support this type of contents, we work to fix this as soon as possible, for now enjoy with clip not encrypted</b>" 
        }
        res.render('../../views/error_page', {errMsg});       
    }                                                                                               
    let extractUrlsSections = await contentFileRemoteTxt.match(/expiresInSeconds.+?(?=probeUrl|playbackTracking|videostatsPlaybackUrl)/gim)

    try{
        extractUrlsSections = await extractUrlsSections.toString()   
    }
    catch(e){ 
        const errMsg = {           
                title: "error_not_valid_url_clip", 
                subTitle: "The page reports the following error:", 
                msg: "<b>There are no valid URLs in the URL passed as input</b>" 
        }
        res.render('../../views/error_page', {errMsg});
        throw new Error("extractUrlsSections.toString(), is null while it must be evaluated")
    } 
 return getUrlsSections(extractUrlsSections);
}

module.exports = getRemoteFileReaderRaw;
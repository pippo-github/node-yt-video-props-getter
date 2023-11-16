const fileReader                         = require("./fileReader");
const deleteFile                         = require("./deleteFile");
const getRemoteFileReaderRaw             = require("./getRemoteFileReaderRaw");
const getTitleClip                       = require("./getTitleClip");
const getImgClip                         = require("./getImgClip");
const retFilesOnDir                      = require("./retFilesOnDir")
const getAllRemoteRawPlayListFile        = require("./getAllRemoteRawPlayListFile")
const getTitlePlayList                   = require("./getTitlePlayList")
const getWatchClip                       = require("./getWatchClip")
const rReadPlayListAllBksRaw             = require("./rReadPlayListAllBksRaw")
const createFullObjPlayListClipsAndProps = require("./createFullObjPlayListClipsAndProps")
const unlinkFiles                        = require("./unlinkFiles")
const getSingleClip                      = require("./getSingleClip")
const renderPlayList                     = require("./renderPlayList")
const makeRestAPI                        = require("./makeRestAPI")
const createJsonFile                     = require("./createJsonFile")
const checkConnection                    = require("./checkConnection")
const serveJSON_restAPI                  = require("./serveJSON_restAPI")

module.exports = {
    // single clip
    fileReader,
    deleteFile,
    getRemoteFileReaderRaw,
    getTitleClip,
    getImgClip,
    // playlist
    retFilesOnDir,
    getAllRemoteRawPlayListFile,
    getTitlePlayList,
    getWatchClip,
    rReadPlayListAllBksRaw,
    createFullObjPlayListClipsAndProps,
    //render returned object 
    unlinkFiles,
    getSingleClip,
    renderPlayList,
    //creation of the API and the .json file
    makeRestAPI,
    createJsonFile,
    // check internet connection
    checkConnection,
    // serve json restAPI
    serveJSON_restAPI
}
const deleteFile                         = require("./deleteFile");
const getTitlePlayList                   = require("./getTitlePlayList");
const getWatchClip                       = require("./getWatchClip");
const retFilesOnDir                      = require("./retFilesOnDir");
const rReadPlayListAllBksRaw             = require("./rReadPlayListAllBksRaw");
const createFullObjPlayListClipsAndProps = require("./createFullObjPlayListClipsAndProps");
const getAllRemoteRawPlayListFile        = require("./getAllRemoteRawPlayListFile");

async function renderPlayList(rType, res){
    console.log("playList request")
    console.log(rType)

    deleteFile("filePropsAndUrl.txt");
    deleteFile("rawClipFile.txt");
    deleteFile("writeRawSectionAndProps.txt");
    deleteFile("remoteRawPlayList.txt");
    
    await getAllRemoteRawPlayListFile(res, rType);
    const plyLstTitle      = await getTitlePlayList()
    const plyLstClipsArray = await getWatchClip()
    
    let allPlayLstClpAndProps = []

    let arrListedFile = await retFilesOnDir(".", "txt");
    console.log(arrListedFile)

    console.log(arrListedFile.length);

    for(let i = arrListedFile.length ; i < plyLstClipsArray.length; i++){
            await rReadPlayListAllBksRaw(res, "https://www.youtube.com" + plyLstClipsArray[i], i)
    }

    arrListedFile = await retFilesOnDir(".", "txt");

    for(let i = 0 ; i < arrListedFile.length ; i++){
        const arrObjRet = await createFullObjPlayListClipsAndProps(arrListedFile[i])
         allPlayLstClpAndProps = await [...allPlayLstClpAndProps, arrObjRet]
    }
    
    const playListData = await { playLstUrl:rType , plyLstName: plyLstTitle, allPlayLstClpAndProps };
    return  playListData;
}

module.exports = renderPlayList;
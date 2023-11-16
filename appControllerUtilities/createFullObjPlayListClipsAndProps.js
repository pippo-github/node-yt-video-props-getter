const fileReader                = require("./fileReader");
const getTitlePlayList          = require("./getTitlePlayList");
const getTitleClipFromPlayList  = require("./getTitleClipFromPlayList");
const getImgClipPlayList        = require("./getImgClipPlayList");
const getUrlsSections           = require("./getUrlsSections");

async function createFullObjPlayListClipsAndProps(nameFile){
    const file_content = await fileReader(nameFile);

    let clipTitle = await getTitleClipFromPlayList(file_content)
    const strToEnd = clipTitle.length - "- YouTub".length

    clipTitle = await clipTitle.slice(0, strToEnd);
    clipTitle = await clipTitle.replace("&amp;","&");
    clipTitle = await clipTitle.replace("&#39;","\'");

    const plyLstName = await getTitlePlayList();    
    const clipImg = await getImgClipPlayList(file_content);
    
    console.log("Name  play list: " + plyLstName)
    console.log("Title      clip: " + clipTitle)
    console.log("Image      clip: " + clipImg)
 
    let propsAndUrl = await getUrlsSections(file_content);

    if(propsAndUrl !== -1)
        propsAndUrl = propsAndUrl.map((el, idx) =>{
            return {...el, clipTitle, clipImg}
        })
       
        let retArray = []
            
        retArray.push({plyLstName, clipTitle, clipImg, propsAndUrl}); 
        return  retArray;

}
module.exports =  createFullObjPlayListClipsAndProps;
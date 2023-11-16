const { 
    unlinkFiles,
    getSingleClip,
    renderPlayList,

    makeRestAPI,
    createJsonFile,
    checkConnection,
    serveJSON_restAPI
 } = require("../appControllerUtilities/utilities")


const appController = async (req, res) =>{

    console.log("you are in: /")
        console.log(req.query);
        
            if(req.query.urlClip || req.query.urlPlayList){
        
                const rType = (req.query.urlClip) ? req.query.urlClip : req.query.urlPlayList ;
                console.log(rType)
           
                if(!rType.includes("playlist")){
        
                    const chkCon = await checkConnection(req, res);
                    if(chkCon !== -1){
                        const singleClipObj = await getSingleClip(res, rType);
                        await createJsonFile(singleClipObj);
                        const ret = await makeRestAPI(false, req, singleClipObj)
                        if(ret === -1){
                            return res.render("../../views/index", singleClipObj)
                        }
                        if(ret === true ){
                            return res.status(200).send(singleClipObj)
                        }
                        else{
                            return res.render("../../views/index", singleClipObj)
                        }
                    }
                }
            
                if(rType.includes("playlist")){
                    const chkCon = await checkConnection(req, res);
                    if(chkCon !== -1){
        
                        const dataToRender = await renderPlayList(rType, res);
                        await createJsonFile(dataToRender);
        
                        const ret = await makeRestAPI(true, req, dataToRender)
                        console.log(ret);
                        if(ret === -1){
                            return res.render("../../views/playListIndex", dataToRender)
                        }
                        if(ret === true){
                            return res.status(200).send(dataToRender)
                        }
                        else{
                            return res.status(200).send(ret)
                        }
                    }
                }
            }
            else{
                unlinkFiles();
                console.log(__dirname);
                res.render("../../views/index.ejs")
            }
}

const controllerRestAPI = async (req, res) =>{
    console.log("you are on restAPI controller");
    const fileContent = await serveJSON_restAPI()
    res.status(200).send(JSON.parse(fileContent));
}

module.exports = {
    appController,
    controllerRestAPI
}
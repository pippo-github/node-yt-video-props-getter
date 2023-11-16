async function makeRestAPI(playList = false, req, objArray){
    const {RestAPI} = req.query
    const {eId} = (req.query) ? req.query : null

    console.log("RestAPI: ", RestAPI);
    console.log("ID: ", +eId);

    if(eId !== undefined)
    if(eId.match(/\d+/) && playList ){
            console.log("restAPI play list request");
            return objArray.allPlayLstClpAndProps[eId];
    }
    else{
        console.log("The ID entered for the plyLst element is invalid !!!!");
    }

    if(RestAPI == "true" && eId === undefined ){
        console.log("restAPI play list request");
        return true
    }   
return -1;
}

module.exports = makeRestAPI;
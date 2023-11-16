const fs = require("fs");

function splitProps(strToSplit){
    try{
        const arrRet = strToSplit.split(",");
        for(let i = 0 ; i < arrRet.length ; i++){
                fs.appendFileSync("filePropsAndUrl.txt", arrRet[i]);
        }
        return arrRet;
    }
    catch(e){
        console.log(e.message)
        console.log(e.stack)
        return []
    }
}

module.exports = splitProps;
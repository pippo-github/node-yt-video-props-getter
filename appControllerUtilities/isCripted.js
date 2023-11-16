const fs = require("fs");

async function isCripted(nameFile = "rawClipFile.txt"){
    // signatureCipher
    return new Promise( async (resolve, reject) =>{

        const streamReader = await fs.createReadStream(nameFile);
        let fileContent = "";
    
        streamReader.on("data", (chunk) =>{
            fileContent += chunk;
        })
    
        streamReader.on("error", (e) =>{
            console.log("error: " + e)
        })
    
        streamReader.on("end", (e) =>{
            console.log("file : rawClipFile.txt, for find encrypted value is completly readed");
            const vetRet = fileContent.match(/signatureCipher/gim);

            if(vetRet){
                reject(-1);
                console.log("the clip selcted is encrypted, at moment this application do not support this type of contents, we work to fix this as soon as possible, for now enjoy whit clip not encrypted")
            }
            else{
                resolve(0)
            }
        })
    }) 
}

module.exports = isCripted;
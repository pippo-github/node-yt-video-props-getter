const fs = require("fs");

async function retFilesOnDir(sourceDir, fileExt){
    console.log("retFilesOnDir called function")
    let filteredFile = [];

    return new Promise( (resolve, reject) =>{

         fs.readdir(sourceDir,  (err, files) =>{
            if(err){
                console.log(`error in creating the list of files present in the folder ${sourceDir}`);
                reject(-1)
            }
    
            const re = new RegExp(`^clip\\w+\\.${fileExt}`,"gim")
            console.log(re)
            files.forEach( (file, idx) =>{
                    const filterd = file.match(re);
                    if(filterd){
                        filteredFile = [...filteredFile, ...filterd]
                    }
            })
            resolve(filteredFile);
        })
    })
}
module.exports = retFilesOnDir;
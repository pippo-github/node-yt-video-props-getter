const deleteFile    = require("./deleteFile");
const retFilesOnDir = require("./retFilesOnDir");

async function unlinkFiles(){
    const arrListedFile = await retFilesOnDir(".", "txt");
    
    for(let i = 0 ; i < arrListedFile.length ; i++){
        await deleteFile(arrListedFile[i]);
    }
}

module.exports = unlinkFiles;
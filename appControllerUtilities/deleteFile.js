const fs = require("fs")

function deleteFile(nameFile){
    if(fs.existsSync(nameFile)){
        fs.unlinkSync(nameFile)
    }
}

module.exports = deleteFile;
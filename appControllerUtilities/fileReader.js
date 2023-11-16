const fs = require("fs");

async function fileReader(fileName){
    const fileReaderStream = await fs.createReadStream(fileName)    
        return await new Promise((resolve, reject) =>{
            let fileContents = '';
    
            fileReaderStream.on("error", (e) =>{
                reject("errore: " + e);
            })
        
            fileReaderStream.on("end", () =>{
                console.log("stream reader end")
            })
            
            fileReaderStream.on("close", () =>{
                console.log("the stream is fully readed, ready for the file contents ... ")
                resolve(fileContents);
            })
    
            fileReaderStream.on("data", (chunk) =>{
                fileContents += chunk
            })
        })
}

module.exports = fileReader;
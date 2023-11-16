const replaceEntities = require("./replaceEntities")
const replaceComma    = require("./replaceComma")
const splitProps      = require("./splitProps"  )
const fs              = require("fs")

async function getUrlsSections(urlsSections){
    let urlsAndProspRaw = urlsSections.match(/"url":.+?(?=\{\"itag\")/gim);   
    if(urlsAndProspRaw == null){
        console.log("^^^^^^^^^^^^^^^^^^^urlsAndProspRaw^^^^^^^^^^^^^^^^^^^ is NULL !!!!! ");
        return -1;
    }
    urlsAndProspRaw = urlsAndProspRaw.toString();

    let replacedEntities = replaceEntities(urlsAndProspRaw,"\\\\u0026", "&");
    urlsAndProspRaw = replacedEntities;

    replacedEntities = replaceEntities(urlsAndProspRaw,", ", "^^^###~~~");
    urlsAndProspRaw = replacedEntities;

    replacedEntities = replaceEntities(urlsAndProspRaw,"\\\\\"", "\"");
    urlsAndProspRaw = replacedEntities;

    replacedEntities = replaceEntities(urlsAndProspRaw,"\"\"", "\"");
    urlsAndProspRaw = replacedEntities;
  
    if(urlsAndProspRaw.includes("indexRange") || urlsAndProspRaw.includes("initRange") ){
     urlsAndProspRaw = replaceComma('"initRange"', urlsAndProspRaw);
     urlsAndProspRaw = replaceComma('"indexRange"', urlsAndProspRaw);
    }
    
    await fs.appendFileSync("writeRawSectionAndProps.txt", urlsAndProspRaw);
    const splitCommaArr = await splitProps(urlsAndProspRaw);

    const retArrOfObj = [];
    let countObj = -1;

    for(const valAndProps of splitCommaArr){
        const retArr = valAndProps.match(/(\"\w+\")(\:)(.+\"?$)/);
        if(retArr){
            retArr[3] = retArr[3].replace("^^^__##", ", ");
            retArr[3] = retArr[3].replace("^^^###~~~", ", ");
            // retArr[3] = retArr[3].replace("[", "f__% y^!")
            retArr[3] = retArr[3].replace("[", "");
            retArr[3] = retArr[3].replace("]", "");
            retArr[3] = retArr[3].replace("}", "");

            if(retArr[1].includes("url")){ countObj++ }
            retArr[1] = retArr[1].replace(/\"/gim, "");
            retArr[3] = retArr[3].replace(/\"/gim, "");
            retArrOfObj[countObj] = {...retArrOfObj[countObj], [retArr[1]]: retArr[3] }
        }
    }
    return retArrOfObj;
}

module.exports = getUrlsSections;
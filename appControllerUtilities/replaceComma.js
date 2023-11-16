function replaceComma(elementToReplace, urlsAndProspRaw){
    try{
        const re = new RegExp(elementToReplace + "(\:)(\{\"start\":\"\\d+\")(\,)(\"end\"\:\"\\d+\"\})", "gim")
        const arrRet1 = urlsAndProspRaw.match(re);
        const retArrCommaRep1 = arrRet1.map( (el,idx) =>{
             return  el.replace(",", "^^^__##")
        })

        for(let i = 0 ; i < arrRet1.length ; i++){
            const valReplaced =  urlsAndProspRaw.replace(arrRet1[i], retArrCommaRep1[i])
            urlsAndProspRaw = valReplaced
        }
    
        return urlsAndProspRaw;
    }
    catch(e){
        console.log(e.message)
        return []
    }
}

module.exports = replaceComma;
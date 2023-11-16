function replaceEntities(strInput, entities, repTo){
    const regEx = new RegExp(entities, "gim");
    const strRet =  strInput.replace(regEx, repTo);
    return strRet;
}

module.exports = replaceEntities;
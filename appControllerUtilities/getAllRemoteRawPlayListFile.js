/* funzione per il recupero delle playlist */

// qui va male i files li scrive male problema di asinconismo ???
// probabile!

// vedi se é il caso di tenerla o di utilizzare quella
// giá esistente!

const axios = require("axios");
const fs = require("fs");
async function getAllRemoteRawPlayListFile(res, playListUrl){
    console.log("in getRemoteRawPlayList: " + playListUrl)
    try{
        const response    = await axios.get(playListUrl);
        let contentFileRemoteTxt = await response.data;
        fs.appendFileSync("remoteRawPlayList.txt",contentFileRemoteTxt);
    }
    catch(e){
        console.log("errore nella lettura del file remoto per le playlist: ", e.message)
        const errMsg = {
            title: "PlayList error page", 
            subTitle: "La pagina delle playlist selezionata per non é scaricabile.", 
            msg: `Errore:  Nella lettura del file remoto per le playlist: , ${e.message} </b>, controlla la tua connessione ad internet.`
        };
        res.render('../../views/error_page', {errMsg})
    }
    return 0;
}

module.exports = getAllRemoteRawPlayListFile;
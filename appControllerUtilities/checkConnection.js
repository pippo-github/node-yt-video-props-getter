const dns = require("dns")

const checkConnection = async (req, res) =>{

    await dns.lookup("www.google.com", (err, data) =>{
        if(err){
            console.log("err: ", err.code + " host: " + err.hostname + " not available!");

            const errMsg = {
                title:    "Host not found error",
                subTitle: "Try checking your internet connection",
                msg: `Please check your internet connection and try again. 
                <br/ ><br/ >Err: ${err.code} host:  ${err.hostname} not available!`,
            }
            res.render("../../views/error_page", {errMsg})
            return -1;
        }
        else{
            console.log(data);
        }
    })
}

module.exports = checkConnection;

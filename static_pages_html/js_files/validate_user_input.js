function validateInput(choice, value){
    validateUrl.innerText = ""
    document.querySelector("#validateUrl").classList.remove("errorMsg");

    if(choice === "clip"){
        const chkClip = new RegExp(/https:\/\/www\.youtube\.com\/watch\?v\=[\-\w+]{11,}$/,"gim");
        if(value.match(chkClip)){
            console.log("clip regex url valid")

            const btn = document.createElement("button");
            btn.id = "btnGetData";
            btn.innerText = "take the clip";
            document.querySelector("#validateUrl").classList.remove("errorMsg");

            document.querySelector("#btnContainer").innerHTML = '';
            document.querySelector("#btnContainer").appendChild(btn)
            btn.onclick = () =>{
                window.location.href = `/?urlClip=${value}`;
            }
        }
        else{
                if(value.length){
                    console.log("clip regex url not valid");
                    document.querySelector("#btnContainer").innerHTML = '';
                    validateUrl.innerText = "The selected clip is invalid";
                    document.querySelector("#validateUrl").classList.add("errorMsg");
                }
            }
    }    
    if(choice === "playlist"){
        console.log("radio box: playlist")
        const chkPlyLst = new RegExp(/https:\/\/www.youtube.com\/playlist\?list\=.{34}$/,"gim");
    
        if(value.match(chkPlyLst)){
            console.log("playlist regex valid url")
            validateUrl.innerText = "";
            const btn = document.createElement("button");
            btn.id = "btnGetData";
            btn.innerText = "take the playList";
            document.querySelector("#validateUrl").classList.remove("errorMsg");

            document.querySelector("#btnContainer").innerHTML = '';
            document.querySelector("#btnContainer").appendChild(btn)
            btn.onclick = () =>{
                window.location.href = `/?urlPlayList=${value}`;
            }
        }
        else{
            if(value.length){
                console.log("playlist regex url NOT valid");
                document.querySelector("#btnContainer").innerHTML = '';
                validateUrl.innerText = "the selected playlist is invalid"
                document.querySelector("#validateUrl").classList.add("errorMsg");
            }
        }
    }
}
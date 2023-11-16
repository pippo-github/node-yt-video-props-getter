function showHideRestApi(element){
    const el = document.querySelector("#sAPI")
    
    if(element.innerText.includes("Show")){
        const new_text = element.innerText.replace("Show", "Hide");
        element.innerText = new_text;
    }
    else{
        const new_text = element.innerText.replace("Hide", "Show");
        element.innerText = new_text;
    }
    el.classList.toggle("noShow");
    console.log("showHideRestApi");
    console.log(el);
}
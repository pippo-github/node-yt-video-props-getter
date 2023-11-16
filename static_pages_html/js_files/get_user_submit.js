function getSubmit(event){
    event.preventDefault();
    const elements = document.querySelectorAll(".radioBtn")
    const clpUrl = document.querySelector("#clipUrlTxt").value
    let choice = "";
    elements.forEach((el, idx) =>{
        if(el.checked){
            console.log(el.value)
            choice = el.value;
        }
        validateInput(choice, clpUrl)
    })
    console.log("clpUrl: ", clpUrl)
    validateInput(choice, clpUrl)
}

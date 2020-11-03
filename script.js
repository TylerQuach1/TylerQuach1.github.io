console.log("false")

function collapse(id){
    console.log("true")
    if (document.getElementById(id).style.getPropertyValue("overflow") == "hidden"){
        document.getElementById(id).style.setProperty("overflow", "auto")
        document.getElementById(id).style.setProperty("height", "100vh")
    }
    else{
        document.getElementById(id).style.setProperty("overflow", "hidden")
        document.getElementById(id).style.setProperty("height", "0%")
    }
}

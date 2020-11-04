function collapse(id){
    if (document.getElementById(id).style.getPropertyValue("overflow") == "hidden"){
        document.getElementById(id).style.setProperty("overflow", "auto")
        document.getElementById(id).style.setProperty("height", "90vh")
        document.querySelector(".project").style.setProperty("padding-top", "0")
    }
    else{
        document.getElementById(id).style.setProperty("overflow", "hidden")
        document.getElementById(id).style.setProperty("height", "0%")
        document.querySelector(".project").style.setProperty("padding-top", "45vh")
    }
}

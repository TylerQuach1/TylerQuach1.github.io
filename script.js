function scrolling(){
    var point = document.querySelector(".project").scrollTop
    console.log("zoowee")
    console.log(point)
    if (point >= 890){
        document.querySelector(".project").scrollTop = 890
    }
}


function collapse(id){
    if (document.getElementById(id).style.getPropertyValue("overflow") == "hidden"){
        document.getElementById(id).style.setProperty("overflow", "auto");
        document.getElementById(id).style.setProperty("height", "90vh");
        document.querySelector(".project").style.setProperty("padding-top", "0vh");
        document.querySelector(".project").style.setProperty("overflow", "hidden");
        document.querySelector(".sel_arrow").style.setProperty("border-left", "0px solid #FF7F50");
    }
    else{
        document.getElementById(id).style.setProperty("overflow", "hidden");
        document.getElementById(id).style.setProperty("height", "0");
        document.querySelector(".project").style.setProperty("padding-top", "45vh");
        document.querySelector(".project").style.setProperty("overflow","auto");
        document.querySelector(".sel_arrow").style.setProperty("border-left", "50px solid #FF7F50");
    }
}

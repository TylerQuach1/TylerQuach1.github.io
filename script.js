const hovering = document.querySelectorAll('.hover');

const options = {
    root: null,
    treshold: 1,
    rootMargin: "-50% 0% -50% -50%",
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        entry.target.classList.toggle("hover");
    })
}, options);

hovering.forEach(hovering =>{
    observer.observe(hovering);
})


function scrolling(){
    var point = document.querySelector(".project").scrollTop;
    if (point >= 890){
        document.querySelector(".project").scrollTop = 890;
    }
}

function collapse(id){
    if (document.getElementById(id).style.getPropertyValue("overflow") == "hidden" && document.getElementById(id).previousElementSibling.classList.contains("hover")){
        document.getElementById(id).style.setProperty("overflow", "auto");
        document.getElementById(id).style.setProperty("height", "100vh");
        document.querySelector(".project").style.setProperty("padding-top", "0vh");
        document.querySelector(".project").style.setProperty("overflow", "hidden");
        document.querySelector(".sel_arrow").style.setProperty("border-left", "0px solid #FF7F50");
        document.getElementById("x_button").style.setProperty("opacity","1");
    }
    else{
        document.getElementById(id).style.setProperty("overflow", "hidden");
        document.getElementById(id).style.setProperty("height", "0vh");
        document.querySelector(".project").style.setProperty("padding-top", "45vh");
        document.querySelector(".project").style.setProperty("overflow","auto");
        document.querySelector(".sel_arrow").style.setProperty("border-left", "50px solid #FF7F50");
        document.getElementById("x_button").style.setProperty("opacity","0");
    }
}


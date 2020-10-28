var websiteName = "Landing Site";
var logoAddress = "./static/SampleIcon.png";

function onLoad() {
    setNames();
    setLogo();    
}

function setNames() {
    let elements = document.getElementsByClassName("Name");
    for (var i = 0; i < elements.length; i++)
        elements[i].innerHTML = websiteName;
}

function setLogo() {
    let logos = document.getElementsByClassName("Logo");
    for (var i = 0; i < logos.length; i++)
        logos[i].src = logoAddress;    
}
var Facebooklink = "https://www.facebook.com/";
var LinkedinLink = "https://www.linkedin.com/";
var TwitterLink = "https://twitter.com/";
var InstagramLink = "https://www.instagram.com/";

let socialLinkPositions = document.getElementById("socialMediaLinks");
console.log(socialLinkPositions);

if (Facebooklink != "")
    socialLinkPositions.innerHTML += `<a href="${Facebooklink}" class="fa fa-facebook" target="_blank"></a>`;
if (LinkedinLink != "")
    socialLinkPositions.innerHTML += `<a href="${LinkedinLink}" class="fa fa-linkedin" target="_blank"></a>`;
if (TwitterLink != "")
    socialLinkPositions.innerHTML += `<a href="${TwitterLink}" class="fa fa-twitter" target="_blank"></a>`;
if (InstagramLink != "")
    socialLinkPositions.innerHTML += `<a href="${InstagramLink}" class="fa fa-instagram" target="_blank"></a>`;
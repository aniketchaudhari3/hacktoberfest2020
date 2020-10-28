let blog = getParameterByName('blog');
LoadPost(blog);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function LoadPost(blog) {    
    console.log("bruh");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {      
            var obj = JSON.parse(this.responseText);      
            document.getElementById("BlogTitle").innerHTML = "⮚ <b>" + obj.Title + "</b>";
            document.getElementById("BlogData").innerHTML = obj.Body;
        }
    };
    xhttp.open("GET", "./loadPosts?blog=" + blog, true);
    xhttp.send();
}
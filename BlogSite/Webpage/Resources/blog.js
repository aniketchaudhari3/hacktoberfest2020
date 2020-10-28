function LoadBlogPost() {    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {            
            document.getElementById("sidenav").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./getBlogPosts", true);
    xhttp.send();
}
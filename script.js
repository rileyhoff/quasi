function displayItems() {
    var url = document.URL;
    var id = url.substring(url.lastIndexOf('#')+1);
    document.getElementById(id).style.display = "block";
    document.getElementById(id+"Nav").className = "active";
}
function changeItems(id, el) {
    //display main images 
    var x = document.getElementsByTagName("MAIN");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    } 
    document.getElementById(id).style.display = "block";
    //change active page in navigation
    document.getElementById("nav").querySelector(".active").className= "";
    document.getElementById(id+"Nav").className = "active";
}

function moveTitle() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("title").className = 'low';
    } else {
        document.getElementById("title").className = 'high';
    }
}
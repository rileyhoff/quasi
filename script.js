function displayItems() {
    var url = document.URL;
    var id = url.substring(url.lastIndexOf('#')+1);
    document.getElementById(id).style.display = "block";
}
function changeItems(id) {
    var x = document.getElementsByTagName("MAIN");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    } 
    document.getElementById(id).style.display = "block";
}
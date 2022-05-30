function lining(){
    document.getElementById("fi").style.borderBottomWidth = "1px";
    document.getElementById("fi").style.transition = "all 3s"
}
function nolining(){
    document.getElementById("fi").style.borderBottomWidth = "0px";
}
function searchbx() {
    document.getElementById("sb").style.width = "166px";
    document.getElementById("sb").style.transition = "all 2s";
}
function searchbxout(){
    document.getElementById("sb").style.width = "0px";
}
function navtopline(){
    document.getElementById("nt").style.borderBottom = "1px solid rgba(0, 0, 0, 0.171)";
}
function navtopnoline(){
    document.getElementById("nt").style.borderBottom = "0px";
}
function clothingbaropen(){
    document.getElementById("cb").style.display = "flex";
}
function clothingbarclose(){
    document.getElementById("cb").style.display = "none";
}

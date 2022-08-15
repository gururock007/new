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
function timeout(){
    setTimeout(function(){document.getElementById("cb").style.display = "none";},2000)
}
function myFunction() {
    document.getElementById("cb").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.listc-box')) {
    var myDropdown = document.getElementById("cb");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

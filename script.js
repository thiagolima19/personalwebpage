//JS to open and close the side manu
//JS to change from tabs on the About me section
const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}

var sideMenu = document.getElementById("sidemenu")
function openmenu() {
  sideMenu.style.right = "0"
}
function closemenu() {
  sideMenu.style.right = "-200px"
}

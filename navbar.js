const hovedNavbar = document.getElementById("hoved-navbar");
const innpakning = document.getElementById("innpakning");

function openMenu() {
  const screenwidth = document.body.clientWidth;
  if (screenwidth < 415) {
    hovedNavbar.style.width = screenwidth.toString()+"px";
    innpakning.style.marginLeft = screenwidth.toString()+"px";
  }
    
  else {
    hovedNavbar.style.width = "250px";
    innpakning.style.marginLeft = "250px";
  }
}

function closeMenu() {
  hovedNavbar.style.width = "0";
  innpakning.style.marginLeft= "0";
}
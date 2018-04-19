function hinge() {
  $(".container").addClass("animated hinge");
  setTimeout(restoreContainer, 2000);
}

function restoreContainer() { 
  $(".container").removeClass("hinge");
}
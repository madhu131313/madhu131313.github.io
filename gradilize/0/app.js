function themeChange(theme) {
  var elem1 = document.getElementById("app-bar");
  var elem2 = document.getElementById("btn");
  var elem3 = document.getElementById("head1");
  switch (theme) {
    case 1:
      elem1.style.background = "linear-gradient(to right,#fa8961, #f82559)";
      elem2.style.background = "linear-gradient(to right,#fa8961, #f82559)";
      elem3.style.backgroundImage =
        "linear-gradient(to right,#fa8961, #f82559)";
      break;
    case 2:
      elem1.style.background =
        "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)";
      elem2.style.background =
        "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)";
      elem3.style.backgroundImage =
        "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)";

      break;
    case 3:
      elem1.style.background = "linear-gradient(to right,#45B649, #DCE35B)";
      elem2.style.background = "linear-gradient(to right,#45B649, #DCE35B)";
      elem3.style.backgroundImage =
        "linear-gradient(to right,#45B649, #DCE35B)";

      break;
  }
}

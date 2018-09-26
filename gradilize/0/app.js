function themeChange(theme) {
  var elem1 = document.getElementById("app-bar");
  var elem2 = document.getElementById("btn");
  var elem3 = document.getElementById("head1");

  const grad1 = "linear-gradient(to right, #fa8961, #f82559)";
  const grad2 = "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)";
  const grad3 = "linear-gradient(to top, #9be15d 0%, #00e3ae 100%)";

  const color1 = "#fff";
  const color2 = "#fff";
  const color3 = "rgb(84, 80, 81)";

  switch (theme) {
    case 1:
      elem1.style.background = grad1;
      elem1.style.color = color1;
      elem2.style.background = grad1;
      elem2.style.color = color1;
      elem3.style.backgroundImage = grad1;
      break;
    case 2:
      elem1.style.background = grad2;
      elem1.style.color = color2;
      elem2.style.background = grad2;
      elem2.style.color = color2;

      elem3.style.backgroundImage = grad2;
      break;
    case 3:
      elem1.style.background = grad3;
      elem1.style.color = color3;
      elem2.style.background = grad3;
      elem2.style.color = color3;
      elem3.style.backgroundImage = grad3;
      break;
  }
}

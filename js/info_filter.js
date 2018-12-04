const info_click = document.getElementsByClassName("click");
for (var i = 0; i < info_click.length; i++) {
  info_click[i].addEventListener("click", fade_in);

  function fade_in() {
    info_div.style.opacity = "1";
    info_div.style.zIndex = "3";
    gallery.style.zIndex = "-5";
    gallery.style.overflowY = "hidden";
    var content = document.getElementsByClassName(
      this.innerHTML.toLowerCase()
    )[0];
    for (var i = 0; i < info_div.children.length; i++) {
      if (content == info_div.children[i]) {
        content.style.opacity = "1";
        info_div.children[i].style.width = "";
        info_div.children[i].style.zIndex = "5";
        info_div.children[i].style.display = "";
      } else {
        info_div.children[i].style.opacity = "0";
        info_div.children[i].style.zIndex = "-5";
        info_div.children[i].style.display = "hidden";
      }
    }
    gallery_images.style.opacity = "0";
  }
}

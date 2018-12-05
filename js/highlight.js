//Mouse over event to enlarge image and bring the z-value above all other current images
const galleryImage = document.getElementsByClassName("all");
for (var i = 0; i < galleryImage.length; i++) {
  galleryImage[i].addEventListener("mouseover", shine);
  function shine() {
    // sets iimage text to name of file
    var img_text = this.children[0].children[0].src;
    var remove_path = "http://127.0.0.1:3000/img/small_img/";
    var remove_ext = ".png";
    img_text = img_text.replace(remove_path, "");
    img_text = img_text.replace(remove_ext, "");
    this.children[1].innerHTML =
      img_text.charAt(0).toUpperCase() + img_text.slice(1);
    // fades in text
    this.style.transform = "translateY(5px)";
    this.style.transition = ".75s";
    this.style.zIndex = "1";
    this.children[1].style.transition = ".75s";
    this.children[1].style.opacity = "1";
    //During mouse over event, decreases the opacity of all other images
    for (var j = 0; j < galleryImage.length; j++) {
      galleryImage[j].style.opacity = ".2";
      galleryImage[j].style.transition = "1.5s";
    }
    this.style.opacity = "1";
  }
  // Mouseout event to return images to normal size and opacity
  galleryImage[i].addEventListener("mouseout", normal);
  function normal() {
    this.style.transform = "scale(1.0)";
    this.style.transition = ".75s";
    this.style.zIndex = "0";
    this.children[1].style.transition = ".75s";
    this.children[1].style.opacity = "0";
    for (var j = 0; j < galleryImage.length; j++) {
      galleryImage[j].style.opacity = "1";
    }
  }
}

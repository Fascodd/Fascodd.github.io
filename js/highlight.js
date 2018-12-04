//Mouse over event to enlarge image and bring the z-value above all other current images
const galleryImage = document.getElementsByClassName("all");
for (var i = 0; i < galleryImage.length; i++) {
  galleryImage[i].addEventListener("mouseover", shine);
  function shine() {
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

//Mouse over event to enlarge image and bring the z-value above all other current images

const galleryImage = document.getElementsByClassName("all");
//for (var i = 0; i < galleryImage.length; i++) {
Object.values(galleryImage).forEach(function(image) {
  image.addEventListener("mouseover", shine);
  function shine() {
    // sets iimage text to name of file
    let img_text_src = image.children[0].children[0].src;
    let img_text = img_text_src
      .split("")
      .reverse()
      .join("");
    let indexOfSlash = img_text.indexOf("/");
    let indexOfDot = img_text.indexOf(".") + 1;
    img_text = img_text
      .slice(indexOfDot, indexOfSlash)
      .split("")
      .reverse()
      .join("")
      .replace(/%20/g, " ");
    img_text = img_text.charAt(0).toUpperCase() + img_text.slice(1);
    image.children[1].innerHTML = img_text;
    // fades in text
    image.style.transform = "translateY(5px)";
    image.style.transition = ".75s";
    image.style.zIndex = "1";
    image.children[1].style.transition = ".75s";
    image.children[1].style.opacity = "1";

    //During mouse over event, decreases the opacity of all other images
    for (var j = 0; j < galleryImage.length; j++) {
      galleryImage[j].style.opacity = ".2";
      galleryImage[j].style.transition = "1.5s";
    }
    image.style.opacity = "1";
  }
  // Mouseout event to return images to normal size and opacity
  image.addEventListener("mouseout", normal);
  function normal() {
    image.style.transform = "scale(1.0)";
    image.style.transition = ".75s";
    image.style.zIndex = "0";
    image.children[1].style.transition = ".75s";
    image.children[1].style.opacity = "0";
    for (var j = 0; j < galleryImage.length; j++) {
      galleryImage[j].style.opacity = "1";
    }
  }
});

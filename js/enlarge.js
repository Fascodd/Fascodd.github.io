Object.values(galleryImage).forEach(function(image) {
  image.addEventListener("click", enlarge);
  function enlarge() {
    var currentSrc = "/small_img";
    var currentImg = this.children[0].children[0].src;
    currentImg = currentImg.replace(currentSrc, "");
    window.open(currentImg);
  }
});

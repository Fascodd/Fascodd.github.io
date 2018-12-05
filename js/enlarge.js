Object.values(galleryImage).forEach(function(image) {
  image.addEventListener("click", enlarge);
  function enlarge() {
    // get src for larger version of image for showcase
    var currentImg = this.children[0].children[0].src;
    var currentSrc = "/small_img";
    currentImg = currentImg.replace(currentSrc, "");
    document.getElementsByClassName("showcase_img")[0].src = currentImg;
    const showcase = document.getElementsByClassName("showcase")[0];
    const showcase_img = document.getElementsByClassName("showcase_img")[0];
    // display showcase image with background
    showcase.style.display = "block";

    //add event listener to close showcase
    showcase.addEventListener("click", close);
    function close() {
      showcase.style.display = "none";
    }
  }
});

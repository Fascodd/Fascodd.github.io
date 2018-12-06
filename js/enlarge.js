Object.values(galleryImage).forEach(function(image) {
  image.addEventListener("click", enlarge);
  function enlarge() {
    // get src for larger version of image for showcase
    let img_text_src = this.children[0].children[0].src;
    img_text_src = img_text_src.replace("/small_img", "");
    document.getElementsByClassName("showcase_img")[0].src = img_text_src;
    console.log(img_text_src);
    const showcase = document.getElementsByClassName("showcase")[0];
    const showcase_img = document.getElementsByClassName("showcase_img")[0];
    // display showcase image with background
    showcase.style.display = "block";
    showcase.style.backgroundColor = "black";
    // change text under image to match file name
    var img_text = img_text_src
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
    showcase.children[1].innerHTML = img_text;
    //add event listener to close showcase
    showcase.addEventListener("click", close);
    function close() {
      showcase.style.display = "none";
    }
  }
});

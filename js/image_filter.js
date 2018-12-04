// aplly an EventListener to each button that has a class of button - these are buttons that are used for the purpose of sorting the images
const butn = document.getElementsByClassName("button");
const gallery_images = document.getElementsByClassName("galleryflex")[0];
var info_div = document.getElementsByClassName("info_div")[0];
for (var i = 0; i < butn.length; i++) {
  butn[i].addEventListener("click", filter);
  //Function, filter(), for EventListener
  function filter() {
    //Variables used in this filter
    const img_arr = document.getElementsByClassName("all");
    var match_counter = 0;
    var non_selected = [];
    var selected = [];
    gallery_images.style.opacity = "1";
    gallery_images.style.transition = ".5s";
    info_div.style.opacity = "0";
    for (var j = 0; j < img_arr.length; j++) {
      var bttn_nm = this.innerHTML.toLowerCase();
      var current_img = img_arr[j];
      // Filters for images that fit the tag name
      // vv If imgage class fits the same as the text of  button clicked vv //
      if (
        img_arr[j] == document.getElementsByClassName(bttn_nm)[match_counter]
      ) {
        match_counter += 1;
        selected.push(img_arr[j]);
        //If image class has attribute Display:"", then do nothing
        if (current_img.style.display == "") {
          selected.forEach(function(image) {
            var thisImg = image;
            setTimeout(() => {
              thisImg.style.transform = "scale(1)";
              thisImg.style.transition = ".5s";
            }, 1000);
          });
        }
        //If image does not have attribute Display:"", ie, if class imgage has attribute Display:"none"
        else if (current_img.style.display != "") {
          setTimeout(() => {
            selected.forEach(image => {
              image.style.display = "";
              image.style.transform = "scale(0)";
            });
          }, 500);
          setTimeout(() => {
            selected.forEach(image => {
              image.style.transform = "scale(1)";
              image.style.transition = ".5s";
            });
          }, 1000);
        }
      }
      //If image does not have same class as button clicked, then set Display:"none"
      else if (
        img_arr[j] != document.getElementsByClassName(bttn_nm)[match_counter]
      ) {
        current_img.style.transform = "scale(0)";
        non_selected.push(img_arr[j]);
        setTimeout(() => {
          non_selected.forEach(image => {
            image.style.display = "none";
          });
        }, 1000);
      }
    }
  }
}

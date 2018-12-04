// aplly an EventListener to each button that has a class of button - these are buttons that are used for the purpose of sorting the images
const butn = document.getElementsByClassName("button");
const gallery_images = document.getElementsByClassName("galleryflex")[0];
const img_arr = document.getElementsByClassName("all");
const gallery = document.getElementsByClassName("gallery")[0];
const description = document.getElementsByClassName("description");
var info_div = document.getElementsByClassName("info_div")[0];

for (var i = 0; i < butn.length; i++) {
  butn[i].addEventListener("click", filter);
  //Function, filter(), for EventListener
  function filter() {
    //Variables used in this filter
    var match_counter = 0;
    var non_selected = [];
    var selected = [];
    gallery.style.overflowY = "scroll";
    gallery.style.zIndex = "5";
    gallery_images.style.opacity = "1";
    gallery_images.style.transition = ".5s";
    info_div.style.opacity = "0";
    info_div.style.zIndex = "-5";
    //
    for (var j = 0; j < img_arr.length; j++) {
      var current_img = img_arr[j];
      var bttn_nm = this.innerHTML.toLowerCase();
      // Filters for images that fit the tag name
      // vv If imgage class fits the same as the text of  button clicked vv //
      if (
        img_arr[j] == document.getElementsByClassName(bttn_nm)[match_counter]
      ) {
        match_counter += 1;
        selected.push(current_img);
      } else {
        non_selected.push(current_img);
      }
      selected.forEach(function(image) {
        var image_style = image.style;
        image_style.opacity = "1";
        image_style.width = "";
      });
      non_selected.forEach(function(image) {
        var image_style = image.style;

        image_style.opacity = "0";
        image_style.transition = "1.5s";
        image_style.display = "block";
        image_style.width = "0";
      });
    }
  }
}

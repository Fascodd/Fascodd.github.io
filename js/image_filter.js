// aplly an EventListener to each button that has a class of button - these are buttons that are used for the purpose of sorting the images
const butn = document.getElementsByClassName("button");
const gallery_images = document.getElementsByClassName("galleryflex")[0];
const img_arr = document.getElementsByClassName("all");
const gallery = document.getElementsByClassName("gallery")[0];
const description = document.getElementsByClassName("description");
var info_div = document.getElementsByClassName("info_div")[0];
var initial_pos = [];
Object.values(img_arr).forEach(function(a) {
  initial_pos.push(a.getBoundingClientRect());
});
Object.values(butn).forEach(function(button) {
  button.addEventListener("click", filter);
  //Function, filter(), for EventListener
  function filter() {
    var final_pos = [];
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
      var this_now = img_arr[j].getBoundingClientRect();

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
      selected.forEach(function(image_in) {
        var image_style = image_in.style;
        image_style.transition = "0s";
        image_style.opacity = "1";
        image_style.width = "";
        image_style.height = "";
      });
      non_selected.forEach(function(image_out) {
        var image_style = image_out.style;
        image_style.transition = "0s";
        image_style.opacity = "0";
        image_style.width = "1px";
        image_style.height = "1px";
      });
    }
    Object.values(img_arr).forEach(function(image) {
      final_pos.push(image.getBoundingClientRect());
    });
    for (var i = 0; i < final_pos.length; i++) {
      const deltaX = initial_pos[i].left - final_pos[i].left;
      const deltaY = initial_pos[i].top - final_pos[i].top;
      const deltaW = initial_pos[i].width / final_pos[i].width;
      const deltaH = initial_pos[i].height / final_pos[i].height;
      console.log(deltaX);
      img_arr[i].animate(
        [
          {
            transformOrigin: "top left",
            transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `
          },
          {
            transformOrigin: "top left ",
            transform: "none"
          }
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "both"
        }
      );
    }

    initial_pos = final_pos;
  }
});

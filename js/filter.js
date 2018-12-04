// gets objects for all gallery images
var gallery_imgs = document.getElementsByClassName("all");
//gets objects by button class
var cats = document.getElementsByClassName("button");
//empty housing array for button name
var button_name_arr = [];
//runs function buttonName for all buttons and returns the text for the button when clicked on
for (var i = 0; i < cats.length; i++) {
  document.getElementsByClassName("button")[i].onclick = buttonName;
  function buttonName() {
    button_name_arr.pop();
    document.getElementsByClassName(
      "filler-text"
    ).innerHTML = button_name_arr.push(this.innerHTML.toLowerCase());
    // Just a variable for getting text from single element array that contains button text
    button_name = button_name_arr[0];
    //Removes all pics from gallery
    for (var i = 0; i < document.getElementsByClassName("all").length; i++) {
      document.getElementsByClassName("all")[i].style.display = "none";
      document.getElementsByClassName("all")[i].style.transform = "scale(0)";
      document.getElementsByClassName("all")[i].style.transition = ".75s";
    }

    //Display:block images to gallery that have class the same as the button clicked on

    var class_btn_name = document.getElementsByClassName(button_name);
    for (var i = 0; i < class_btn_name.length; i++) {
      class_btn_name[i].style.transitionDelay = ".75s";
      document.getElementsByClassName(button_name)[i].style.transform =
        "scale(1)";
      class_btn_name[i].style.display = "block";
    }
  }
}

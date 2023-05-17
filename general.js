// clock
var d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
if (min < 10) {
  min = "0" + min;
}
var ampm = "AM";
if (hour > 12) {
  hour -= 12;
  ampm = "PM";
}

document.querySelector(".time-btn").innerHTML = hour + ":" + min + " " + ampm;

// folderName
function folderName() {
  let filename = "past";
  let activeWindow = parent.document.getElementById("pastModal");
  let windowHeader = activeWindow.querySelector(".file-name");
  windowHeader.querySelector("h4").innerHTML = filename;
  // getfolderNames
  document.querySelectorAll(".folder").forEach((item) => {
    item.addEventListener("click", (event) => {
      filename = item.querySelector("h5").innerHTML;
      windowHeader.querySelector("h4").innerHTML = filename;
    });
  });
}

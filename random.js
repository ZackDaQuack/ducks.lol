var imageList = [];
var index = 0;
var img = document.getElementById('duck-image');

function loadRandomDuck() {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'random_image_3.php?' + new Date().getTime(), true);
xhr.responseType = 'blob';
xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = this.response;
    var url = URL.createObjectURL(blob);
    img.src = url;
    imageList.push(url);
  }
};
xhr.send();
}

function showPreviousImage() {
document.getElementById('left-arrow').disabled = true;
setTimeout(function() {
  document.getElementById('left-arrow').disabled = false;
}, 500);

if (index > 0) {
  index--;
} else {
  index = imageList.length - 1;
}

img.src = imageList[index];
}

function showNextImage() {
document.getElementById('right-arrow').disabled = true;
setTimeout(function() {
  document.getElementById('right-arrow').disabled = false;
}, 500);

if (index < imageList.length - 1) {
  index++;
} else {
  loadRandomDuck();
  return;
}

img.src = imageList[index];
}

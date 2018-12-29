const imageLeft = document.createElement('IMG');
const imageMain = document.createElement('IMG');
const imageRight = document.createElement('IMG');
let centerImage = 1;
const imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
const scrollLeftButton = document.getElementById('arrow-left');
const scrollRightButton = document.getElementById('arrow-right');

function setImages() {
  imageLeft.src = imageArray[centerImage-1];
  imageMain.src = imageArray[centerImage];
  imageRight.src = imageArray[centerImage+1];
}

document.getElementsByClassName('image-left-container')[0].appendChild(imageLeft);
document.getElementsByClassName('main-image-container')[0].appendChild(imageMain);
document.getElementsByClassName('image-right-container')[0].appendChild(imageRight);

function scrollRight() {
   if(centerImage===imageArray.length-2) {
      imageMain.src = imageArray[imageArray.length-1];
      imageRight.src = imageArray[0];
      imageLeft.src = imageArray[imageArray.length-2];
      centerImage++;
    }
    else if(centerImage===imageArray.length-1) {
      imageMain.src = imageArray[0];
      imageLeft.src = imageArray[imageArray.length-1];
      imageRight.src = imageArray[1];
      centerImage = 0;
    }
    else {
      centerImage++;
      setImages();
    }
  }

function scrollLeft() {
   if(centerImage===1) {
      imageMain.src = imageArray[0];
      imageRight.src = imageArray[1];
      imageLeft.src = imageArray[imageArray.length-1];
      centerImage--;
    }
    else if(centerImage===0) {
      imageMain.src = imageArray[imageArray.length-1];
      imageLeft.src = imageArray[imageArray.length-2];
      imageRight.src = imageArray[0];
      centerImage=imageArray.length-1;
    }
    else {
      centerImage--;
      setImages();
    }
  }


setImages(centerImage);

scrollLeftButton.addEventListener('click', function() {
  scrollLeft();
});

scrollRightButton.addEventListener('click', function() {
  scrollRight();
});


let leftBound;
let rightBound;
let items = [];
const slider = document.getElementById('slider');
const imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
const scrollLeftButton = document.getElementById('arrow-left');
const scrollRightButton = document.getElementById('arrow-right');



//  build image elements and container divs and store in a seperate array
init = () => {
  imageArray.forEach((x,index)=> {
    let imageDiv = document.createElement('div');
    let image = document.createElement('IMG');
    imageDiv.id = `imageDiv${index}`;
    imageDiv.classList.add("item");
    image.src = x;
    imageDiv.appendChild(image);
    slider.appendChild(imageDiv);
  });
  items = [...document.querySelectorAll('.item')];
  computeBounds();
};
//finding width of slider
function computeBounds() {
  leftBound = items[0].getBoundingClientRect().x;
  rightBound = items[items.length -1].getBoundingClientRect().x;
};

function scrollRight() {

  items.forEach(x=>x.classList.add("animated-right"));
  rightMost = items.filter(x => x.getBoundingClientRect().x  > rightBound+100)[0];
  setTimeout(function() {
  rightMost.remove();
  slider.prepend(rightMost);
  items.forEach(x=>x.classList.remove("animated-right"));
}, 499);
};

function scrollLeft() {
  items.forEach(x=>x.classList.add("animated-left"));
  leftMost = items.filter(x => x.getBoundingClientRect().x  < leftBound-100)[0];
  setTimeout(function() {
  leftMost.remove();
  slider.append(leftMost);
  items.forEach(x=>x.classList.remove("animated-left"));
}, 450);
};


scrollLeftButton.addEventListener('click', function() {
  scrollLeft();
});

scrollRightButton.addEventListener('click', function() {
  scrollRight();
});

init();

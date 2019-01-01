let rightMost;
let leftBound;
let rightBound;
let items = [];
const slider = document.getElementById('slider');
const carouselContainer = document.getElementById('carousel-container');
const imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
const scrollLeftButton = document.getElementById('arrow-left');
const scrollRightButton = document.getElementById('arrow-right');
let translateWidth;
let offset = 0;

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

function computeBounds() {
  leftBound = items[0].getBoundingClientRect().x;
  rightBound = items[items.length -1].getBoundingClientRect().x;
  translateWidth = rightBound - leftBound + items[0].getBoundingClientRect().width;
}

function scrollRight() {
  let newNode;
  offset+=translateWidth;
  items.forEach(x => x.style.transform = `translateX(${offset}px)`);
  rightMost = items.filter(x => x.getBoundingClientRect().x  > rightBound+100)[0];

  };
};

function scrollLeft() {
  // computeBounds();
  offset-=translateWidth;
  items.forEach(x => x.style.transform = `translateX(${offset}px)`);
}


scrollLeftButton.addEventListener('click', function() {
  scrollLeft();
});

scrollRightButton.addEventListener('click', function() {
  scrollRight();
});

init();

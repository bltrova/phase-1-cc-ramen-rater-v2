const urlRamen = 'http://localhost:3000/ramens';

const ramenImages = document.querySelectorAll('ramen-menu img')
ramenImages.forEach(image => {
  image.addEventListener('click', handleClick);
});

let globalNewName;
let globalNewImg;
let globalNewRestaurant;
let globalNewRating;
let globalNewComment;

function handleClick(ramenId) {
  let ramenImg = document.getElementById('ramen-detail-img');
  let ramenName = document.getElementById('ramen-detail-name');
  let ramenRestaurant = document.getElementById('ramen-detail-restaurant');
  let ramenRating = document.getElementById('rating-display');
  let ramenComment = document.getElementById('comment-display');

  if (ramenId <=5 ) {
    fetch(urlRamen + `/${ramenId}`)
    .then ((response) => response.json()) 
    .then(ramenData => {
      ramenImg.src = ramenData.image;
      ramenImg.alt = ramenData.name;
      ramenName.textContent = ramenData.name;
      ramenRestaurant.textContent = ramenData.restaurant;
      ramenRating.textContent = ramenData.rating;
      ramenComment.textContent = ramenData.comment;
    });
  } else {
    ramenImg.src = globalNewImg;
    ramenImg.alt = globalNewName;
    ramenName.textContent = globalNewName;
    ramenRestaurant.textContent = globalNewRestaurant;
    ramenRating.textContent = globalNewRating;
    ramenComment.textContent = globalNewComment;
  }
}

const addSubmitListener = () => {
  let newName = document.getElementById('new-name').value;
  let newRestaurant = document.getElementById('new-restaurant').value;
  let newImage = document.getElementById('new-image').value;
  let newRating = document.getElementById('new-rating').value;
  let newComment = document.getElementById('new-comment').value;

  globalNewName = newName;
  globalNewRestaurant = newRestaurant;
  globalNewImg = newImage;
  globalNewRating = newRating;
  globalNewComment = newComment;

  const imgMenu = document.getElementById('ramen-menu');
  const lengthImgMenu = imgMenu.childElementCount;
  let createNewImg = document.createElement('img');
  createNewImg.src = newImage;
  createNewImg.addEventListener('click', () => handleClick(lengthImgMenu+1));
  imgMenu.appendChild(createNewImg);
}

function displayRamens() {
  fetch(urlRamen)
  .then ((response) => response.json()) 
  .then(ramenData => {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenData.forEach(ramen => {
      const ramenImg = document.createElement('img');
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      ramenImg.addEventListener('click', () => handleClick(ramen.id));
      ramenMenu.appendChild(ramenImg);
    });
  });
};

const main = () => {

  let formSubmit = document.getElementById('new-ramen');
  formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    addSubmitListener();
  });

  displayRamens();
}
main();

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

addEventListener
addSubmitListener

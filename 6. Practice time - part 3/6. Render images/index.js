// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const imgContainer = document.getElementById("container");

const renderPhotos = (array) => {
  for (let i = 0; i < array.length; i++) {
    imgContainer.innerHTML += `<img class="team-img" src=${array[i]}>`;
  }
};
renderPhotos(imgs);

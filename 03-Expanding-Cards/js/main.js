const images = document.querySelectorAll(".container-image");
console.log(images);

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClass();
    image.classList.add("active");
  });
});

function removeActiveClass() {
  images.forEach((image) => {
    image.classList.remove("active");
  });
}

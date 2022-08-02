const input = document.querySelector(".inp");
const buttonRandom = document.querySelector(".btn");
const buttonBreed = document.querySelector(".search");
const image = document.querySelector(".image");

buttonBreed.addEventListener("click", function () {
  loadPicture();
});

buttonRandom.addEventListener("click", () => {
  loadRandomPicture();
});

const loadPicture = async function () {
  try {
    const res = await fetch(
      `https://dog.ceo/api/breed/${input.value}/images/random`
    );
    const data = await res.json();
    const pic = ` <img
        src=${data.message}
        alt=""
      />`;
    image.innerHTML = "";
    image.insertAdjacentHTML("afterbegin", pic);
  } catch (err) {
    alert(err.message);
  }
};

const loadRandomPicture = async function () {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random ");
    const data = await res.json();
    console.log(data);
    const pic = ` <img
        src=${data.message}
        alt=""
      />`;
    image.innerHTML = "";
    image.insertAdjacentHTML("afterbegin", pic);
  } catch (err) {
    alert(err);
  }
};

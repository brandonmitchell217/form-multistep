let data = {};
const firstForm = document.querySelector(".first");
const secondForm = document.querySelector(".second");
const thirdForm = document.querySelector(".third");
const thankYou = document.querySelector(".thank-you");
const results = document.querySelector(".results");

firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = firstForm.email.value;
  const password = firstForm.password.value;
  const firstData = { email, password };
  data = { ...data, ...firstData };

  firstForm.style.display = "none";
  document.querySelector(".stepOne").style.textDecoration = "line-through";
  document.querySelector(".stepOne").style.textDecorationColor = "red";
  document.querySelector(".stepOne").style.textDecorationThickness = "3px";
  console.log(data);

  secondForm.classList.remove("hidden");
});

secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const movie = secondForm.movie.value;
  const show = secondForm.show.value;
  const secondData = { movie, show };
  data = { ...data, ...secondData };

  secondForm.style.display = "none";
  document.querySelector(".stepTwo").style.textDecoration = "line-through";
  document.querySelector(".stepTwo").style.textDecorationColor = "red";
  document.querySelector(".stepTwo").style.textDecorationThickness = "3px";
  console.log(data);

  thirdForm.classList.remove("hidden");
});

thirdForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const food = thirdForm.food.value;
  const drink = thirdForm.drink.value;
  const thirdData = { food, drink };
  data = { ...data, ...thirdData };

  thirdForm.style.display = "none";
  document.querySelector(".stepThree").style.textDecoration = "line-through";
  document.querySelector(".stepThree").style.textDecorationColor = "red";
  document.querySelector(".stepThree").style.textDecorationThickness = "3px";
  console.log(data);

  thankYou.classList.remove("hidden");
  document.querySelector("#emailResult").textContent = data.email;
  document.querySelector("#passwordResult").textContent = data.password;
  document.querySelector("#movieResult").textContent = data.movie;
  document.querySelector("#showResult").textContent = data.show;
  document.querySelector("#foodResult").textContent = data.food;
  document.querySelector("#drinkResult").textContent = data.drink;
});

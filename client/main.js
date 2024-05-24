let data = {};

const forms = {
  firstForm: document.querySelector(".first"),
  secondForm: document.querySelector(".second"),
  thirdForm: document.querySelector(".third"),
  thankYou: document.querySelector(".thank-you"),
  results: document.querySelector(".results"),
};

const steps = {
  stepOne: document.querySelector(".stepOne"),
  stepTwo: document.querySelector(".stepTwo"),
  stepThree: document.querySelector(".stepThree"),
};

// Validation of inputs

function handleFormSubmit(form, nextForm, step) {
  return (e) => {
    e.preventDefault();
    form.querySelectorAll("input").forEach((input) => {
      if (!input.value) {
        alert("Please fill in all fields");
        return;
      }
      data[input.name] = input.value;
    });

    form.style.display = "none";
    updateStepDecoration(step);

    if (form === forms.thirdForm) {
      sendData();
    }

    if (nextForm) {
      nextForm.classList.remove("hidden");
    } else {
      displayResults();
    }

    console.log(data);
  };
}

function updateStepDecoration(step) {
  step.style.textDecoration = "line-through";
  step.style.textDecorationColor = "red";
  step.style.textDecorationThickness = "3px";
}

function displayResults() {
  forms.thankYou.classList.remove("hidden");
  document.querySelector("#emailResult").textContent = data.email;
  document.querySelector("#nameResult").textContent = data.name;
  document.querySelector("#movieResult").textContent = data.movie;
  document.querySelector("#showResult").textContent = data.show;
  document.querySelector("#foodResult").textContent = data.food;
  document.querySelector("#drinkResult").textContent = data.drink;
}

async function sendData() {
  const response = await fetch("http://localhost:3001/form_data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  console.log(json);
}

forms.firstForm.addEventListener(
  "submit",
  handleFormSubmit(forms.firstForm, forms.secondForm, steps.stepOne)
);
forms.secondForm.addEventListener(
  "submit",
  handleFormSubmit(forms.secondForm, forms.thirdForm, steps.stepTwo)
);
forms.thirdForm.addEventListener(
  "submit",
  handleFormSubmit(forms.thirdForm, null, steps.stepThree)
);

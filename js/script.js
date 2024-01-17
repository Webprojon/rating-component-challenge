"use strict";

// Selectors
const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".num");
const submitBtn = document.querySelector(".submit__btn");

// Functions & Events
submitBtn.addEventListener("click", displayInfo);
const values = [];
let id;

numbers.forEach((number, idx) => {
  number.addEventListener("click", () => {
    number.style.backgroundColor = "hsl(216, 12%, 54%)";
    number.style.color = "#ffffff";
    submitBtn.removeAttribute("disabled");
    id = idx + 1;
  });
  values.push(number.textContent);
});

function displayInfo() {
  setTimeout(() => {
    if (container) {
      let children = container.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = "none";
      }
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const wrapperMarkup = `
  <img src=${"./assets/images/illustration-thank-you.svg"} alt="image"/>
  <div class="info"><p>You selected ${id} out of ${
      values.length - 1 + 1
    }</p></div>
  <h1 class="heading__markup">Thank you!</h1>
  <p class="parag__markup">We appreciate you taking the time to give a rating. If
     you ever need more support, don’t hesitate to get in touch!</p>
    `;

    wrapper.insertAdjacentHTML("beforeend", wrapperMarkup);
    container.appendChild(wrapper);
  }, 700);
}

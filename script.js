const signInBtn = document.getElementById("SignInBtn");
const emailBtn = document.getElementById("emailBtn");
const inputEmailBtn = document.getElementById("input_email");
const newYear = document.getElementById("year");


signInBtn.addEventListener("click", () => {
  alert("Sign In option is not avilable yet")
})

inputEmailBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let getValue = inputEmailBtn.value
    if (getValue === "") {
      alert("Enter Email before to get start");
    }
    else {
      if (getValue.includes("@gmail.com")) {
        console.log(getValue);
        inputEmailBtn.value = "";
      }
      else {
        alert("Please Enter the valid Email")
        inputEmailBtn.value = "";
      }
    }
  }
})

emailBtn.addEventListener("click", () => {
  let getValue = inputEmailBtn.value
  if (getValue === "") {
    alert("Enter Email before to get start");
  }
  else {
    if (getValue.includes("@gmail.com")) {
      console.log(getValue);
      inputEmailBtn.value = "";
    }
    else {
      alert("Please Enter the valid Email")
      inputEmailBtn.value = "";
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});


newYear.textContent = new Date().getFullYear();
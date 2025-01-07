/** ========= VARIABLES  ========= */

let finish_container = document.querySelector(".right_container .finish");
let form_Container = document.querySelector(".right_container .form_container");

// inputs variables
let name_input = document.getElementById("cardholder"),
  number_input = document.getElementById("CardNumber"),
  month_input = document.getElementById("month"),
  year_input = document.getElementById("year"),
  cvc_input = document.getElementById("cvc"),
  submitBtn = document.getElementById("submit");

// errors div
let cardholder_error = document.querySelector(".cardholder_error"),
  cardnumber_error = document.querySelector(".cardnumber_error"),
  cardDate_error = document.querySelector(".cardDate_error"),
  cvc_error = document.querySelector(".cvc_error");

//card values

let card_number = document.querySelectorAll(
    ".left_container .front .details .card_number span"
  ),
  card_name = document.querySelector(".left_container .front .details .name"),
  card_month = document.querySelector(
    ".left_container .front .details .his .month"
  ),
  card_year = document.querySelector(
    ".left_container .front .details .his .year"
  );

/** ========= METHODS  ========= */

//when user write on input

//when user click on confirm

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let name = name_input.value.trim();
  let number = number_input.value.trim();
  let month = month_input.value.trim();
  let year = year_input.value.trim();
  let cvc = cvc_input.value.trim();

  // Validation flags
  let isValid = true;

  // Validate Name
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    name_input.classList.add("error");
    cardholder_error.style.display = "block";
    cardholder_error.innerHTML = "Name must contain only letters and spaces.";
    isValid = false;
  } else {
    name_input.classList.add("true");
    card_name.innerHTML = name;
  }

  // Validate Card Number
  if (!/^\d{16}$/.test(number)) {
    number_input.classList.add("error");
    cardnumber_error.style.display = "block";
    cardnumber_error.innerHTML = "Card number must be exactly 16 digits.";
    isValid = false;
  } else {
    number_input.classList.add("true");
    cardnumber_error.style.display = "none";
    splitNumbers(number);
  }

  // Validate Month (MM)
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    month_input.classList.add("error");
    cardDate_error.style.display = "block";
    cardDate_error.innerHTML = "Month must be two digits between 01 and 12.";
    isValid = false;
  } else {
    month_input.classList.add("true");
    card_month.innerHTML = month;
    cardDate_error.style.display = "none";
  }

  // Validate Expiration Year
  const currentYear = new Date().getFullYear();
  if (!/^\d{2}$/.test(year)) {
    year_input.classList.add("error");
    cardDate_error.style.display = "block";
    cardDate_error.innerHTML = "Year must be two digits (e.g., 23 for 2023).";
    isValid = false;
  } else {
    year_input.classList.add("true");
    card_year.innerHTML = year;
    cardDate_error.style.display = "none";
  }

  // Validate CVC
  if (!/^\d{3}$/.test(cvc)) {
    cvc_input.classList.add("error");
    cvc_error.style.display = "block";
    cvc_error.innerHTML = "CVC must be exactly 3 digits.";
    isValid = false;
  } else {
    cvc_input.classList.add("true");
    cvc_error.style.display = "none";
  }

  if (isValid) {
    console.log("All inputs are valid.");
    console.log({ name, number, month, year, cvc });
    // Proceed with further processing
    finish_container.style.display = "block";
    form_Container.style.display = "none";
  }
});

function splitNumbers(num) {
  let nums = num;
  let num1 = Number(nums.toString().slice(0, 4));
  let num2 = Number(nums.toString().slice(4, 8));
  let num3 = Number(nums.toString().slice(8, 12));
  let num4 = Number(nums.toString().slice(12, 16));

  card_number[0].innerHTML = num1;
  card_number[1].innerHTML = num2;
  card_number[2].innerHTML = num3;
  card_number[3].innerHTML = num4;
}

let dayInput = document.querySelector(".day-input");
let monthInput = document.querySelector(".month-input");
let yearInput = document.querySelector(".year-input");
let btn = document.querySelector(".circle");
let dayElement = document.querySelector(".day-value");
let monthElement = document.querySelector(".month-value");
let yearElement = document.querySelector(".year-value");
function handleEvent() {
  let currentDate = new Date();
  // btn omclick
  btn.onclick = function () {
    let dayValue = dayInput.value;
    let monthValue = monthInput.value;
    let yearValue = yearInput.value;
    // convert input values to new date
    let str = `${dayValue}/${monthValue}/${yearValue}`;
    const parts = str.split("/");
    const dateObject = new Date(parts[2], parts[1] - 1, parts[0]);
    let difResult = currentDate - dateObject;

    const MS_PER_DAY = 86400000;
    const MS_PER_MONTH = MS_PER_DAY * 30.44;
    const MS_PER_YEAR = MS_PER_DAY * 365.24;
    // calculating params
    let yearResult = Math.floor(difResult / MS_PER_YEAR);
    let monthResult = Math.floor((difResult % MS_PER_YEAR) / MS_PER_MONTH);
    let dayResult = Math.floor((difResult % MS_PER_MONTH) / MS_PER_DAY);
    // change value
    dayElement.innerHTML = `${dayResult}`;
    monthElement.innerHTML = `${monthResult}`;
    yearElement.innerHTML = `${yearResult}`;
  };
}
handleEvent();

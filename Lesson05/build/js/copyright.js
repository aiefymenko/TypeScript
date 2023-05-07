"use strict";
//Original JS code
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContext = thisYear;
//1st solution
let year;
year = document.getElementById('year');
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
}

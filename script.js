"use strict";
const introBtn = document.getElementById("form--1");
const bioBtn = document.getElementById("form--2");
const locatioBtn = document.getElementById("form--3");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close");

//showing introduction page
introBtn.addEventListener("click", () => {
  show(".section--1");
});
bioBtn.addEventListener("click", () => {
  show(".section--2");
});
locatioBtn.addEventListener("click", () => {
  show(".section--3");
});
closeBtn.forEach((closeBtns) => {
  closeBtns.addEventListener("click", () => {
    hide(".section--1");
    hide(".section--2");
    hide(".section--3");
  });
});
//functio to call show section
function show(section) {
  document.querySelector(section).classList.remove("hidden");
  overlay.classList.remove("hidden");
}
//hiding section by clicking overlay
overlay.addEventListener("click", () => {
  hide(".section--1");
  hide(".section--2");
  hide(".section--3");
});
//hiding using escape key
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    hide(".section--1");
    hide(".section--2");
    hide(".section--3");
  }
});
//hide section
function hide(section) {
  document.querySelector(section).classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

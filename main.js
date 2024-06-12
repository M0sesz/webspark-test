document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#date-from", {
    locale: "en",
  });

  flatpickr("#date-to", {
    locale: "en",
  });
});

document.getElementById("rowButton").addEventListener("click", function () {
  document.querySelector(".section").classList.add("row-layout");
  document.querySelector(".section").classList.remove("column-layout");
});

document.getElementById("columnButton").addEventListener("click", function () {
  document.querySelector(".section").classList.add("column-layout");
  document.querySelector(".section").classList.remove("row-layout");
});

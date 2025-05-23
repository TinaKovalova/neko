"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const header = document.querySelector(".header");
  const themeCheckBox = document.querySelector(".theme-form__input");
  const burgerButton = document.querySelector(".burger-btn");
  // const closeBurgerMenuButton = document.querySelector(".burger-btn-close");
  const menuBurger = document.querySelector(".menu-burger");

  const capitalizeText = (text) =>
    text
      .split(" ")
      .map((el) => {
        const wordArray = [...el];
        wordArray.splice(0, 1, wordArray[0].toUpperCase());
        return wordArray.join("");
      })
      .join(" ");

  html.style.setProperty("--scrooll-margin-top", `${header.clientHeight}px`);

  //Page theme

  const savedTheme = localStorage.getItem("nekoinn-theme");
  if (savedTheme) {
    themeCheckBox.checked = savedTheme === "light";
    html.classList.add(savedTheme);
  } else {
    if (window.matchMedia("(prefers-color-scheme: light").matches) {
      themeCheckBox.checked = true;
      html.classList.add("light");
    } else {
      themeCheckBox.checked = false;
      html.classList.add("dark");
    }
    localStorage.setItem(
      "nekoinn-theme",
      themeCheckBox.checked ? "light" : "dark"
    );
  }

  themeCheckBox?.addEventListener("change", (e) => {
    html.classList.toggle("dark");
    html.classList.toggle("light");
    localStorage.setItem(
      "nekoinn-theme",
      themeCheckBox.checked ? "light" : "dark"
    );
  });

  //burger actions
  burgerButton?.addEventListener("click", () => {
    menuBurger?.classList.toggle("active");
  });
  menuBurger?.addEventListener("click", (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      menuBurger?.classList.toggle("active");
    }
  });

  //Select
  const select = document.querySelector(
    ".form-booking__column:has(.form-booking__input--select)"
  );
  const selectOptions = select?.querySelector(".form-booking__options");
  const selectInput = select?.querySelector(".form-booking__input--select");
  const selectInputBtn = select?.querySelector(
    ".form-booking__input-button--select"
  );
  select?.addEventListener("mousedown", (e) => {
    if (e.target === selectInputBtn) {
      e.stopImmediatePropagation();
      return;
    }
    selectOptions.classList.toggle("_open");
  });
  select?.addEventListener("focusin", (e) => {
    if (
      e.target !== selectInputBtn &&
      e.target.closest(".form-booking__column")
    ) {
      selectOptions.classList.add("_open");
    }
  });

  select?.addEventListener("focusout", (e) => {
    if (e.target.closest(".form-booking__column")) {
      selectOptions.classList.remove("_open");
    }
  });

  selectOptions?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.closest(".form-booking__select-option")) {
      selectInput.value = capitalizeText(e.target.dataset.option);
      selectOptions.classList.remove("_open");
    }
  });
  selectOptions?.addEventListener("keydown", (e) => {
    if (e.target.closest(".form-booking__select-option") && e.keyCode == 13) {
      selectInput.value = capitalizeText(e.target.dataset.option);
      selectOptions.classList.remove("_open");
    }
  });
  selectInputBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    selectOptions.classList.toggle("_open");
  });

// Details
  const details = document.querySelectorAll(".item-details__details");

  details?.forEach(element => element.addEventListener("toggle", (e) => {
    if (e.target.open) {
      details.forEach((detail) => {
        if (detail.open && detail !== e.target) {
          detail.removeAttribute("open");
        }
      });
    }
  }))
 })
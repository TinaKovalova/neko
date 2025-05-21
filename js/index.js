"use strict";
window.addEventListener("load", windowLoaded);

function windowLoaded() {
    const themeCheckBox = document.querySelector(".theme-form__input");
    const html = document.documentElement;
    const header = document.querySelector('.header');
    const burgerButton = document.querySelector(".burger-btn");
    // const closeBurgerMenuButton = document.querySelector(".burger-btn-close");
    const menuBurger = document.querySelector(".menu-burger");
    const savedTheme = localStorage.getItem("nekoinn-theme");
    const setPageTheme = (theme) => html.style.setProperty("color-scheme", theme);
 


    const capitalizeText=(text)=>text.split(" ").map((el) => {
            const wordArray = [...el];
            wordArray.splice(0, 1, wordArray[0].toUpperCase());
            return wordArray.join("");
          })
          .join(" ");
       
    
    html.style.setProperty("--scrooll-margin-top", `${header.clientHeight}px`);
    
    //Page theme
    let userTheme;
    if (savedTheme) {
        userTheme = savedTheme;
    } else {
        userTheme = window.matchMedia("(prefers-color-scheme: dark").matches
          ? "dark"
          : "light";
    }
    setPageTheme(userTheme) ; 
    if (userTheme === "light") themeCheckBox.checked = true; 

    themeCheckBox?.addEventListener("change", (e) => {
        const target = e.target;
        target.checked ? target.value = "light" : target.value = "dark";
        setPageTheme(target.value);
        localStorage.setItem("nekoinn-theme", target.value);
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
    


    // Datetime
    const dateBlock = document.querySelector('.form-booking__column:has(.form-booking__input[type="datetime-local"])');
   
    dateBlock?.addEventListener("click", (e) => {
        if (dateBlock.classList.contains("._show-picker")) {
            dateBlock.classList.remove("._show-picker");
            dateBlock.blur();
        } else {
            dateBlock.classList.add("._show-picker");
            dateBlock.querySelector(".form-booking__input").showPicker();
        }
    });


    //Select
    

    const select = document.querySelector(".form-booking__column:has(.form-booking__input--select)");
    const selectOptions = select?.querySelector(".form-booking__options");
    const selectInput = select?.querySelector(".form-booking__input--select"); 
    const selectInputBtn = select?.querySelector(".form-booking__input-button--select"); 
    select?.addEventListener('mousedown', (e) => {   
        if (e.target === selectInputBtn) {
          e.stopImmediatePropagation();
          return;
        }
        selectOptions.classList.toggle("_open");
    })
    select?.addEventListener("focusin", (e) => {
      if (e.target !== selectInputBtn && e.target.closest(".form-booking__column")) {
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

}
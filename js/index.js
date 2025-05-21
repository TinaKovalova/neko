"use strict";
window.addEventListener("load", windowLoaded);

function windowLoaded() {
    const themeCheckBox = document.querySelector(".theme-form__input");
    const html = document.documentElement;
    const burgerButton = document.querySelector(".burger-btn");
    // const closeBurgerMenuButton = document.querySelector(".burger-btn-close");
    const menuBurger = document.querySelector(".menu-burger");
    const savedTheme = localStorage.getItem("nekoinn-theme");
    const setPageTheme = (theme) => html.style.setProperty("color-scheme", theme);
    const select = document.querySelector(".form-booking__column:has(.form-booking__input--select)");
    const selectOptions = select?.querySelector(".form-booking__options");
    const selectInput = select?.querySelector(".form-booking__input--select"); 

    const capitalizeText=(text)=>text.split(" ").map((el) => {
            const wordArray = [...el];
            wordArray.splice(0, 1, wordArray[0].toUpperCase());
            return wordArray.join("");
          })
          .join(" ");
       
    

    
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
    

    //Select
    
    select?.addEventListener('click', (e) => {   
        console.log(e);
        selectOptions.classList.toggle("_open");
    })

    select.addEventListener("focusin", (e) => {
        console.log(e);
        if (!e.target.closest(".form-booking__input-button")) {
            selectOptions.classList.add("_open");
        }
         
    });
    select.addEventListener("focusout", (e) => {
        console.log(e);
      selectOptions.classList.remove("_open");
    });
    
    selectOptions.addEventListener("click", (e) => {
        console.log(e);
        e.stopPropagation();
        if (e.target.closest(".form-booking__select-option")) {
            selectInput.value = capitalizeText(e.target.dataset.option); 
            selectOptions.classList.remove("_open");
        }
    })
    selectOptions.addEventListener("keydown", (e) => {
        console.log(e)
      if (e.target.closest(".form-booking__select-option") && e.keyCode == 13) {
          selectInput.value = capitalizeText(e.target.dataset.option);
          selectOptions.classList.remove("_open");
      }
    });



}
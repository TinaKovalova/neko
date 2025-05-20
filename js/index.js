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
    const select = document.querySelector(".form-booking__column:has(.form-booking__select)");
    const selectOptions = select?.querySelector(".form-booking__options");
    const optionsValue = select?.querySelector(".form-booking__select-value"); 
    const selectInput = select?.querySelector(".form-booking__select"); 

    
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
    console.log(select);
    select?.addEventListener('click', (e) => {   
        selectOptions.classList.toggle("_open");
        console.log(e.currentTarget);
    })
    selectOptions.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target.closest(".form-booking__select-option")) {
            optionsValue.textContent = e.target.dataset.option;
            selectInput.value = e.target.dataset.option;
            selectOptions.classList.remove("_open");
        }
    })

}
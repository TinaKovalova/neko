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
    


}
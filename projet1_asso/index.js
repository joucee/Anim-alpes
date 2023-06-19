let burger = document.querySelector("#burger");
let menu = document.querySelector(".menu ul");

burger.addEventListener("click", () => {
    menu.style.opacity = 1
    setTimeout(()=> {
 menu.style.opacity = 0
    }, 6000);
});

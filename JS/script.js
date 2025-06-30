const buttonMenu = document.getElementById("buttonMenu")
const NavigationMenu = document.getElementById("NavigationMenu")
const buttonMenuClose = document.getElementById("buttonMenuClose")
const btnOpenWindow_1 = document.getElementById("1");
const btnOpenWindow_2 = document.getElementById("2");
const btnOpenWindow_3 = document.getElementById("3");
const btnOpenWindow_4 = document.getElementById("4");
const btnOpenWindow_5 = document.getElementById("5");
let modalWindowImg = document.getElementById("modalWindowImg");
let modalWindowNickname = document.getElementById("modalWindowNickname");
let modalWindowdecsription = document.getElementById("modalWindowdecsription");
const tranModalCloseBtn = document.getElementById("tranModalCloseBtn");
const modalWindow = document.getElementById("modalWindow"); ;

buttonMenu.addEventListener('click', () => {  
    NavigationMenu.style.transform = "translateX" + "(" + "0" + ")";
    NavigationMenu.style.display = "flex";
})
buttonMenuClose.addEventListener('click', () => {
    NavigationMenu.style.transform = "translateX" + "(" + "100" + ")";
    NavigationMenu.style.display = "none";
})

tranModalCloseBtn.addEventListener('click', () => {
    modalWindow.close();
});

btnOpenWindow_1.addEventListener("click", () => {
    modalWindowImg.src = "./IMG/traner_1.png";
    modalWindowNickname.textContent = "Ирина Лайм";
    modalWindowdecsription.textContent = "Ноябрь 1993 — Январь 2000";
    modalWindow.showModal();
});
btnOpenWindow_2.addEventListener("click", () => {
    modalWindowImg.src = "./IMG/traner_2.png";
    modalWindowNickname.textContent = "Марина Орлова";
    modalWindowdecsription.textContent = "Сентябрь 1995 — Июнь 2000";
    modalWindow.showModal();
});
btnOpenWindow_3.addEventListener("click", () => {
    modalWindowImg.src = "./IMG/traner_3.png";
    modalWindowNickname.textContent = "Максим Петров";
    modalWindowdecsription.textContent = "Октябрь 1994 — Июль 2001";
    modalWindow.showModal();   
});
btnOpenWindow_4.addEventListener("click", () => {
    modalWindowImg.src = "./IMG/traner_4.png";
    modalWindowNickname.textContent = "Константин Назаров";
    modalWindowdecsription.textContent = "Сентябрь 1996 — Август 2002";
    modalWindow.showModal();
});
btnOpenWindow_5.addEventListener("click", () => {
    modalWindowImg.src = "./IMG/traner_5.png";
    modalWindowNickname.textContent = "Лиза Весенняя";
    modalWindowdecsription.textContent = "Ноябрь 1998 — Июнь 2004";
    modalWindow.showModal();
});


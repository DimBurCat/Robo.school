const buttonMenu = document.getElementById("buttonMenu")
const NavigationMenu = document.getElementById("NavigationMenu")
const buttonMenuClose = document.getElementById("buttonMenuClose")

buttonMenu.addEventListener('click', () => {  
    NavigationMenu.style.transform = "translateX" + "(" + "0" + ")";
    NavigationMenu.style.display = "flex";
})
buttonMenuClose.addEventListener('click', () => {
    NavigationMenu.style.transform = "translateX" + "(" + "100" + ")";
    NavigationMenu.style.display = "none";
})

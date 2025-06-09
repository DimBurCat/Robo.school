const countOfVisiters = document.getElementById("countOfVisiters");

window.addEventListener("load", () => {
    visibleOfvisiters();
  setInterval(visibleOfvisiters, 3000);
});

let visibleOfvisiters = () => {
    let count = Math.floor(Math.random() * (24000 - 20000 + 1)) + 20000;
    countOfVisiters.textContent = "Посетители: " + count; 
}
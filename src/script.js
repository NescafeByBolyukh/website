let topmenu = document.getElementById("topmenu");
let submenu = document.getElementById("submenu");

topmenu.addEventListener('mouseover', function (event) {
    submenu.style.display = 'block';
    topmenu.style.color = 'white';
    topmenu.style.background = 'rgb(207, 26, 43)';
})
topmenu.addEventListener('mouseout', function (event) {
    submenu.style.display = 'none';
    topmenu.style.color = 'rgb(98, 98, 98)';
    topmenu.style.background = 'none';
})
submenu.addEventListener('mouseover', function (event) {
    submenu.style.display = 'block';
    topmenu.style.color = 'white';
    topmenu.style.background = 'rgb(207, 26, 43)';
})
submenu.addEventListener('mouseout', function (event) {
    submenu.style.display = 'none';
    topmenu.style.color = 'rgb(98, 98, 98)';
    topmenu.style.background = 'none';
})

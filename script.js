const menuButton = document.getElementById('menu-logo');
const menu = document.getElementById('menu-list');

menuButton.addEventListener("click",function(){
    if(menu.style.display == 'flex') menu.style.display = 'none';
    else menu.style.display = 'flex';
});

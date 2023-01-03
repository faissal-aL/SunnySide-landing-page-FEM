const menuButton = document.getElementById('menu-logo');
const menu = document.getElementById('menu-list');

menuButton.addEventListener("click",function(){
    if(menu.style.display == 'flex') menu.style.display = 'none';
    else menu.style.display = 'flex';
});
window.addEventListener("resize",function(){
    if(this.screen.width > 500) menu.style.display = 'flex';
    else menu.style.display = 'none';
});

//Menu Animation
const menu_btn = document.getElementById('menu-btn');
const menu_popup = document.getElementById('menu-animator');
let is_open = false;
menu_btn.addEventListener('click', () => {
    if (!is_open) {
        menu_btn.classList.add('open'); 
        menu_popup.classList.add('active');
        is_open = true;
        //Menu Popup Animation
    }
    else {
        menu_btn.classList.remove('open');
        menu_popup.classList.remove('active');
        is_open = false;
    }
})

const book_now = document.getElementById('btn');
book_now.addEventListener('click', () => {
    open("https://iltstudios.github.io/Form/");
})
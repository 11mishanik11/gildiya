// vars burger меню 
let burgerButton = document.querySelector('#burger-button');
let burgerMenu = document.querySelector('#burger-menu');
// vars Проверка наличия элементов в блоке program
let infoProgramItem = document.querySelectorAll('.info-program');



// Проверка наличия элементов в блоке program и обнуление паддинга снизу
for (let i = 0; i < infoProgramItem.length; i++) {
    if(infoProgramItem[i].querySelector('.info-program__text-bottom') || infoProgramItem[i].querySelector('.info-program__bottom-list')) {
        infoProgramItem[i].style.paddingBottom = '0';
    }
}

// burger меню
burgerButton.onclick = headerMenuShow;

function headerMenuShow() {
    burgerMenu.classList.toggle('active');
}


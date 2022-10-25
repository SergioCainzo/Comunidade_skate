// Variáveis com select
const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

// função para MUDAR a class do seletor
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})
// ------------------ open and close search ---------------------------
let formSearch = document.querySelector('.form-search');
let mainMenu = document.querySelector('.main-nav__center');
let rightMenu = document.querySelector('.right-menu');
let searchIcon = document.querySelector('#search-icon');
let cancelSearch = document.querySelector('#cancel-search');

searchIcon.addEventListener('click', () =>{
    openSearch();
})

cancelSearch.addEventListener('click', () => {
    closeSearch();
});
openSearch = () => {
    formSearch.style.display = 'flex';
}
closeSearch = () => {
    rightMenu.style.display = 'block';
    mainMenu.style.display = 'flex';
    formSearch.style.display = 'none';
}
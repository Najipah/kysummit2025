
/*fade in/out upon scrolling*/
function revealFunction(){
    window.sr = ScrollReveal({ duration:1350, distance:'250px', easing:'ease-out'});
    sr.reveal('.reveal-reset-true', {origin:'bottom', reset:true});
}

window.addEventListener('load', () => {
    revealFunction();
})

/*responsive navbar*/
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-times'
    : 'fa-solid fa-bars'
}

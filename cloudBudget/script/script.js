const menuIcons = document.getElementById('menuIcons')
const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')
const mainMenu = document.getElementById('mainMenu')

menuIcons.addEventListener('click', () => {
	menuOpen.classList.toggle('d-none')
	menuClose.classList.toggle('d-none')
	mainMenu.classList.toggle('show')
})


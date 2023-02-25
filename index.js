var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

function toggle() {
    if(hamburgerMenu.classList.contains('show-menu')) {
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.setAttribute('aria-expanded', false)
        
        document.onclick = function(e) {
            if (!hamburgerMenu.contains(e.target))
            hamburgerMenu.classList.remove('show-menu')
            hamburgerBtn.setAttribute('aria-expanded', false)
        }
    } else {
        hamburgerMenu.classList.add('show-menu')
        hamburgerBtn.setAttribute('aria-expanded',true)
    }
}

hamburgerBtn.addEventListener('click',toggle)

document.onkeyup = function(e) {
    if (e.key === 'Escape')
    hamburgerMenu.classList.remove('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', false)
    hamburgerBtn.focus()
}

// if(hamburgerMenu.classList.contains('show-menu')) {
//     document.onclick = function(e) {
//         if (!hamburgerMenu.contains(e.target))
//         hamburgerMenu.classList.remove('show-menu')
//         hamburgerBtn.setAttribute('aria-expanded', false)
//     }
// }

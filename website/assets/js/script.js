const scrollBtn = document.querySelector('.btn')

scrollBtn.addEventListener('click', scrollToTop)


function scrollToTop() {
    window.scrollTo(0,0)
}

window.addEventListener('scroll', () => {
    if (window.scrollY == 0 || window.scrollY < 100)
        scrollBtn.style.display = 'none'
    else
        scrollBtn.style.display = 'block'
})
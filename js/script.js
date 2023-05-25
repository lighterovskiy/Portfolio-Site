const links = document.querySelectorAll(".menu__link,.psycholog-text__button")

links.forEach((item) => {
    item.addEventListener("click", () => {
        let el = document.getElementById(item.getAttribute("data-link"))
        el.scrollIntoView({behavior:"smooth", block:"center"})
    })

})
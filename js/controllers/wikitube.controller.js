'use strict'
const SRC = 'https://www.youtube.com/embed/'
function onSearch(ev) {
    ev.preventDefault()
    const elSearch = document.querySelector('.search-input')
    getYoutube(elSearch.value)
        .then(renderSearch)
        .catch((err) => {
            console.log('eror')
        })
    console.log(elSearch.value)
}
function renderSearch(res) {
    const elFrame = document.querySelector('.iframe')
    elFrame.src = SRC + res[0].videoId
    console.log(res[0].videoId)
}

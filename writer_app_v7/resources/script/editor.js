const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const editTitle = $('.icon-edit-title')
const docTitle = $('.doc-title')
const modal = $('#modal')


function start() {
    var search = location.search
    if (search.includes('success=true')) {
        console.log('true')
    }
}
start()

editTitle.onclick = function () {
    docTitle.removeAttribute('readonly')
    docTitle.select()
    docTitle.classList.add('doc-title-focus')
    modal.classList.remove('hide')
    modal.classList.add('modal-title')
}

modal.onclick = function () {
    if (docTitle.classList.contains('doc-title-focus')) {
        if (docTitle.value == '') {
            alert('empty')
        } else {
            docTitle.classList.remove('doc-title-focus')
            modal.classList.add('hide')
            modal.classList.remove('modal-title')
            docTitle.setAttribute('readonly', true)
        }
    }
}

// window.onclick = function (e) {
//     console.log(e.target)
// }
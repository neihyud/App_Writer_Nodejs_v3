var hostPort = 'http://localhost:8080'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('#modal')
const modalDelete = $('.modal-delete')

const fDocs = $('.container-left-funtion-docs')
const fItems = $$('.container-left-function-item')

const docTitle = $('.name-title')
const editTitle = $('.container-mid-title .edit-title')
const table = $('.table')

const docsRecentTitle = $('.docs-recent-title')
const tableTitle = $('.table-title')
const avatar = $('.avatar')
const iconLeft = $('.icon-left')

/* chi phan chuyen tab*/
const docsRecent = $('.docs-recent')

const formPassword = document.querySelector('.form-password')
const formSubmit = document.querySelector('.btn-submit')
const formInput = document.querySelector('.input-password')

const listDocs = []

modal.onclick = function(e) {
    if (e.target == e.currentTarget) {
        modal.classList.add('hide')
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        docsRecentTitle.style.zIndex = 1
        formPassword.classList.add('hide')
    }
}

avatar.onclick = function(e) {
    window.location.href = hostPort + '/editor.html'
}

iconLeft.onclick = function(e) {
    window.location.href = hostPort + '/editor.html'
}

window.addEventListener("beforeunload", function (e) {
    for (var i = 0; i < 200000000; i++) { }
    return undefined;
});

// window.onclick = function (e) {
//     console.log(e.target)
// }
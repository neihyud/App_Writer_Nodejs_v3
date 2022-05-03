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

const listDocs = []


if (JSON.parse(sessionStorage.getItem('listDocs'))) {
    let list = JSON.parse(sessionStorage.getItem('listDocs'))
    list.forEach(function (doc) {
        add(doc)
        listDocs.push(doc)
    })
    openDoc()
} else {
    if (JSON.parse(localStorage.getItem('listDocs'))) {
        let list = JSON.parse(localStorage.getItem('listDocs'))
        list.forEach(function (doc) {
            add(doc)
            listDocs.push(doc)
        })
        openDoc()
    }
    else {
        localStorage.setItem('listDocs', JSON.stringify([]))
    }
}

modal.onclick = function(e) {
    if (e.target == e.currentTarget) {
        modal.classList.add('hide')
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        tableTitle.style.zIndex = 1
        docsRecentTitle.style.zIndex = 1
    }
}

avatar.onclick = function(e) {
    window.location.href = 'http://localhost:5500/writer_app/editor.html'
}

iconLeft.onclick = function(e) {
    window.location.href = 'http://localhost:5500/writer_app/editor.html'
}

window.addEventListener("beforeunload", function (e) {
    // before closing the browser ************** //
    /* listDocs.length = 0 */
    if (Number.isInteger(listDocs[listDocs.length - 1])) {
        listDocs.pop()
    }
    localStorage.setItem('listDocs', JSON.stringify(listDocs));

    // added the delay otherwise database operation will not work
    for (var i = 0; i < 200000000; i++) { }
    return undefined;
});

window.onclick = function (e) {
    console.log(e.target)
    /* window.location.href = 'https://duyhien2122.github.io/WriterApp' */
}
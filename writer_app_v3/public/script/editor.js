const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const editTitle = $('.icon-edit-title')
const docTitle = $('.doc-title')
const modal = $('#modal')

editTitle.onclick = function () {
    docTitle.contentEditable = 'true'
    docTitle.classList.add('edit-able')
    modal.classList.remove('hide')
    modal.style.backgroundColor = 'transparent'
    document.onkeydown = function (e) {
        if (e.key == 'Enter') {
            docTitle.contentEditable = false;
        }
    }
}

modal.onclick = function () {
    if (docTitle.getAttribute('contentEditable') == 'true') {
        if (docTitle.innerText == '') {
            alert('empty')
        } else {
            docTitle.classList.remove('edit-able')
            docTitle.contentEditable = 'false'
            modal.classList.add('hide')
        }
    }
}
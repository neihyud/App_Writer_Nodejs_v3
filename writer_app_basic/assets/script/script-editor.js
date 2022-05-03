const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('#modal')
const modalDelete = $('.modal-delete')

const fDocs = $('.container-left-funtion-docs')
const fNew = $('.container-left-funtion-new')
const fSave = $('.container-left-funtion-save')
const fRename = $('.container-left-funtion-rename')
const fDelete = $('.container-left-funtion-delete')
const fInfo = $('.container-left-funtion-info')
const fItems = $$('.container-left-function-item')

const iconLeft = $('.icon-left')
const iconNew = $('.icon-new')
const iconSave = $('.icon-save')

const groupTitle = $('#group-title')
const docTitle = $('.name-title')
const editTitle = $('.container-mid-title .edit-title')
const table = $('.table')

/* chi phan chuyen tab*/
const docCurrent = $('.doc-current')
const docsRecent = $('.docs-recent')

let index = -1;
let docTest = {};
const listDocs = []

window.onload = function () {

    if (JSON.parse(sessionStorage.getItem('listDocs'))) {
        let list = JSON.parse(sessionStorage.getItem('listDocs'))
        list.forEach(function (doc) {
            listDocs.push(doc)
        })
        /* if (Number.isInteger(listDocs[listDocs.length - 1])) {
            const index = listDocs[listDocs.length - 1]
            listDocs.pop()
            const doc = listDocs[listDocs.length - 1 - index]
            docTest = doc;
            docTitle.innerText = `${doc.title}`
            tinymce.get('myTextarea').setContent(doc.content)
            listDocs.splice(listDocs.length - index - 1, 1)
        } */
    } else {
        if (JSON.parse(localStorage.getItem('listDocs'))) {
            let list = JSON.parse(localStorage.getItem('listDocs'))
            list.forEach(function (doc) {
                listDocs.push(doc)
            })
        }
        else {
            localStorage.setItem('listDocs', JSON.stringify([]))
        }
    }

    /* 
    window.onload = function () {
        if (Number.isInteger(listDocs[listDocs.length - 1])) {
            const index = listDocs[listDocs.length - 1]
            listDocs.pop()
            const doc = listDocs[listDocs.length - 1 - index]
            console.log(doc)
            console.log(doc.content)
            docTitle.innerText = `${doc.title}`
            setTimeout(function() {
                tinymce.get('myTextarea').setContent(doc.content)
            }, 200)
            listDocs.splice(listDocs.length - index - 1, 1)
        } else {
            docTitle.innerText = 'Untitled Doc'
            console.log('khong thanh cong khi load lai du lieu file')
        }
    } */

    fDocs.addEventListener('click', function (e) {
        /* if (docsRecent.classList.contains('hide')) {
            addDoc()
            resetDoc()
        }
        openDocsRecent()
        openDoc() */
        addDoc()
        // window.location.href = "https://duyhien2122.github.io/DocsRecent/"
        window.location.href = "http://localhost:5500/writer_app/index.html"



        sessionStorage.setItem('listDocs', JSON.stringify(listDocs))
        /* alert('Chua hoan thanh') */
    })

    fNew.addEventListener('click', function (e) {
        addDoc()
        resetDoc()
    })

    fSave.addEventListener('click', function (e) {
        if (tinymce.get("myTextarea").getContent({ format: "text" }) != '') {
            addDoc()
            alert('congrugation')
            resetDoc()
        } else {
            alert('Please write')
            /*   $('.modal-save-warning').classList.remove('hide')
              modal.classList.remove('hide') */
        }
    })

    /**************Mobie********************** */
    iconLeft.addEventListener('click', function (e) {
        addDoc()
        window.location.href = "http://localhost:5500/writer_app/index.html"
        sessionStorage.setItem('listDocs', JSON.stringify(listDocs))
    })

    iconNew.addEventListener('click', function (e) {
        addDoc()
        resetDoc()
    })

    iconSave.addEventListener('click', function (e) {
        if (tinymce.get("myTextarea").getContent({ format: "text" }) != '') {
            addDoc()
            alert('congrugation')
            resetDoc()
        } else {
            alert('Please write')
        }
    })

    /************************************** */
    fItems.forEach(function (item) {
        item.onclick = function (e) {
            $('.container-left-function-item.current-item').classList.remove('current-item')
            item.classList.add('current-item')
        }
    })

    editTitle.onclick = function (e) {
        docTitle.contentEditable = 'true'
        docTitle.classList.add('overlay-title')
        modal.classList.remove('hide')
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }

    modal.onclick = function (e) {
        if (e.target == e.currentTarget) {
            if (docTitle.innerText == '') {
                alert('Please give the title a name')
                return;
            }
            docTitle.contentEditable = false;
            docTitle.classList.remove('overlay-title')
            modal.classList.add('hide')
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        }
    }

    /* khong cho Enter o title */
    document.onkeydown = function (e) {
        if (e.key == 'Enter') {
            if (docTitle.contentEditable) {
                docTitle.contentEditable = false;
                docTitle.classList.remove('overlay-title')
                modal.classList.add('hide')
            }
        }
    }

    window.addEventListener("beforeunload", function (e) {
        // before closing the browser ************** //
        /* addDoc() */
        /* listDocs.length = 0 */
        if (Number.isInteger(listDocs[listDocs.length - 1])) {
            listDocs.pop();
        }
        localStorage.setItem('listDocs', JSON.stringify(listDocs));

        // added the delay otherwise database operation will not work
        for (var i = 0; i < 200000000; i++) { }
        return undefined;
    });

    window.onclick = function (e) {
        console.log(e.target)
    }
}
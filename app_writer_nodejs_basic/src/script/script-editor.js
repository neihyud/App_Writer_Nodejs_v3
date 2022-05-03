var hostPort = 'http://localhost:8080'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('#modal')
const modalDelete = $('.modal-delete')

const fDocs = $('.container-left-funtion-docs')
const fNew = $('.container-left-funtion-new')
const fSave = $('.container-left-funtion-save')
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

const formPassword = document.querySelector('.form-password')
const formSubmit = document.querySelector('.btn-submit')
const formInput = document.querySelector('.input-password');

function createInfoPost(password) {
    const title = docTitle.innerText
    const content = tinymce.get("myTextarea").getContent({ format: "text" });
    let day = (new Date()).toLocaleString('en-US', { month: 'short', day: 'numeric' })
    let time = (new Date()).toLocaleString('en-US', { timeStyle: "medium" })
    const date = day + ', ' + time
    const post = {
        title: title,
        date: date,
        content: content,
        password: password,
    }
    if (content == '') return;
    handleCreatePost(post)
    resetDoc()
    console.log('Func create info post ')
}

fDocs.addEventListener('click', function (e) {
    window.location.href = hostPort + "/index.html"
})

fSave.addEventListener('click', async function (e) {
    if (tinymce.get("myTextarea").getContent({ format: "text" }) != '') {
        modal.classList.remove('hide')
        formPassword.classList.remove('hide')
        formSubmit.onclick = function (e) {
            
            if (formInput.value == '') {
                alert('Please enter password')
            } else {
                createInfoPost(formInput.value)
                alert('Success !!!')
                // console.log('Success !!!')
                // modal.classList.add('hide')
                // formPassword.classList.add('hide')
            }
        }
    } else {
        alert('Please write')
    }
})

fNew.addEventListener('click', function (e) {
    e.preventDefault()
    createInfoPost(formInput.value)
})

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
        formPassword.classList.add('hide')
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
    // added the delay otherwise database operation will not work
    for (var i = 0; i < 200000000; i++) { }
    return undefined;
});


/**************Mobie********************** */
iconLeft.addEventListener('click', function (e) {
    addDoc()
    window.location.href = hostPort + "/index.html"
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

function resetDoc() {
    docTitle.innerHTML = 'Untitled Doc'
    tinymce.activeEditor.setContent("");
}


/************************************** */
    // window.onclick = function (e) {
    //     console.log(e.target)
    // }

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnOrganizeDoc = $$('.library_organize-list-doc-item')
const openPost = $$("[key='true'].library_doc-part-content")


function start() {
    var search = location.search
    if (search.includes('pass=false')) {
        $('#modal-notify').classList.remove('hide')
        $('.modal-notify__body p').innerText = 'Wrong Pass'
    }

    if (search.includes('pass=empty')) {
        $('#modal-notify').classList.remove('hide')
        $('.modal-notify__body p').innerText = 'Empty Pass'
    }
}
start()


// Saved Favorites Histoty
btnOrganizeDoc.forEach((btn) => {
    btn.onclick = () => {
        $('.library_organize-list-doc-item.doc-bottom').classList.remove('doc-bottom')
        btn.classList.add('doc-bottom')
    }
})

function inputPass(id) {
    const modalSecurity = $('#modal-security')
    const btn = $('.btn-open-doc-security')
    modalSecurity.classList.remove('hide')
    btn.setAttribute('formaction', '/editor/' + id)

}

function getId(postId) {
    const footerNotify = $('.btn-notify')
    if (footerNotify) {
        footerNotify.href = '/remove/' + postId
    }

}

window.onclick = function (e) {
    console.log(e.target)
}
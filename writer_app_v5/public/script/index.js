const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnOrganizeDoc = $$('.library_organize-list-doc-item')

// Saved Favorites Histoty
btnOrganizeDoc.forEach((btn) => {
    btn.onclick = () => {
        $('.library_organize-list-doc-item.doc-bottom').classList.remove('doc-bottom')
        btn.classList.add('doc-bottom')
    }
})

function getId(postId) {
    const footerNotify = $('.btn-footer-notify')
    if (footerNotify) {
        footerNotify.href = '/remove/' + postId
    }

}


// window.onclick = function (e) {
//     console.log(e.target)
// }
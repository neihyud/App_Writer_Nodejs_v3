const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnOrganizeDoc = $$('.library_organize-list-doc-item')

btnOrganizeDoc.forEach((btn) => {
    btn.onclick = () => {
        $('.library_organize-list-doc-item.doc-bottom').classList.remove('doc-bottom')
        btn.classList.add('doc-bottom')
    }
})

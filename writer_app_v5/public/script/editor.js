const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const editTitle = $('.icon-edit-title')
const docTitle = $('.doc-title')
const modal = $('#modal')


function start() {
    var search = location.search
    if (search.includes('success=true')) {
        console.log('true')
        if (typeof URLSearchParams !== 'undefined') {
            const params = new URLSearchParams('param1=1&param2=2&param3=3')

            console.log(params.toString())

            params.delete('param2')

            console.log(params.toString())

        } else {
            console.log(`Your browser does not support URLSearchParams`)
        }
    }
}
start()

editTitle.onclick = function () {
    docTitle.disabled = ''
    docTitle.select()
    docTitle.classList.add('doc-title-focus')
    modal.classList.remove('hide')
    modal.classList.add('modal-title')
    console.log('editTitle is true')
}

modal.onclick = function () {
    if (docTitle.classList.contains('doc-title-focus')) {
        if (docTitle.value == '') {
            alert('empty')
        } else {
            docTitle.classList.remove('doc-title-focus')
            modal.classList.add('hide')
            modal.classList.remove('modal-title')
            docTitle.setAttribute('disabled', '')
        }
    }
}

window.onclick = function (e) {
    console.log(e.target)
}
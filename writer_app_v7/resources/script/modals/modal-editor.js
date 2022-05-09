const modalNotify = document.querySelector('#modal-notify')
const openDocSecurity = document.querySelector('.icon-security')

function toggleModal() {
    if (tinymce.get("myTextarea").getContent({ format: "text" }) == '') {
        modalNotify.classList.toggle('hide')
    }
}

function toggleModalSecurity() {
    modalSecurity.classList.toggle('hide')
}

openDocSecurity.addEventListener('click', toggleModalSecurity)
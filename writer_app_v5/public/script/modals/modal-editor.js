const modalNotify = document.querySelector('#modal-notify')

function toggleModal() {
    if (tinymce.get("myTextarea").getContent({ format: "text" }) == '') {
        modalNotify.classList.toggle('hide')
    }
}

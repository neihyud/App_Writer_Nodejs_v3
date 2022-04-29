const modalNotify = document.querySelector('#modal-notify')
const openModalBtn = document.querySelector('.open-modal-btn')
const iconCloseModal = document.querySelector('.modal-notify__header i')
const buttonCloseModal = document.querySelector('.modal-notify__footer button')

function toggleModal() {
    if (tinymce.get("myTextarea").getContent({ format: "text" }) == '')
	modalNotify.classList.toggle('hide')
}

openModalBtn.onclick = function(e) {
    if (tinymce.get("myTextarea").getContent({ format: "text" }) == '') {
        modalNotify.classList.toggle('hide')
    }
}

iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modalNotify.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})



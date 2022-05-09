const modalNotify = document.querySelector('#modal-notify')
const openModalBtn = document.querySelectorAll('.open-modal-btn')

function toggleModal() {
    modalNotify.classList.toggle('hide')
}

function toggleModalSecurity() {
    modalSecurity.classList.toggle('hide')
}

// condition --> show notify
// openModalBtn.addEventListener('click', toggleModal)
openModalBtn.forEach((btn) => {
    btn.addEventListener('click', toggleModal)
})
const modalSecurity = document.querySelector('#modal-security')

const openModalBtn = document.querySelector('.open-modal-btn')
const btnOpenDocSecurity = document.querySelector('.btn-open-doc-security')

const iconCloseNotify = document.querySelector('.icon-close-notify')
const iconClosePassword = document.querySelector('.icon-close-password')
const buttonCloseModal = document.querySelector('.btn-footer-notify:not(.btn-open-doc-security)')


// condition --> show notify
openModalBtn.addEventListener('click', toggleModal)

// close notify
iconCloseNotify.addEventListener('click', toggleModal)
iconClosePassword.addEventListener('click', toggleModalSecurity)
buttonCloseModal.addEventListener('click', toggleModal)

modalNotify.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})

modalSecurity.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModalSecurity()
})



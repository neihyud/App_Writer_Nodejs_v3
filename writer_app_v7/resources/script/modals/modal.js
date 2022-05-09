const modalSecurity = document.querySelector('#modal-security')


const btnOpenDocSecurity = document.querySelector('.btn-open-doc-security')

const iconCloseNotify = document.querySelector('.icon-close-notify')
const iconClosePassword = document.querySelector('.icon-close-password')
const buttonCloseModal = document.querySelector('.btn-footer-notify:not(.btn-open-doc-security)')

function closeNotify() {
    if (iconCloseNotify)
        iconCloseNotify.addEventListener('click', toggleModal)
    if (buttonCloseModal)
        buttonCloseModal.addEventListener('click', toggleModal)
}
closeNotify()
// close notify
// iconCloseNotify.addEventListener('click', toggleModal)
iconClosePassword.addEventListener('click', toggleModalSecurity)

if (modalNotify) {
    modalNotify.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) toggleModal()
    })
}

if (modalSecurity) {
    modalSecurity.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) toggleModalSecurity()
    })
}



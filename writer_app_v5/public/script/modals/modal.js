const modalSecurity = document.querySelector('#modal-security')

const openModalBtn = document.querySelector('.open-modal-btn')
const btnOpenDocSecurity = document.querySelector('.btn-open-doc-security')

const openDocSecurity = document.querySelector('.icon-security')

const iconCloseModal = document.querySelector('.modal-notify__header i')
const buttonCloseModal = document.querySelector('.btn-footer-notify:not(.btn-open-doc-security)')


function closeModal() {
    if (!modalNotify.classList.contains('hide')) {
        modalNotify.classList.add('hide')
    }
    
    if (!modalSecurity.classList.contains('hide')) {
        modalSecurity.classList.add('hide')
    }
}

function toggleModalSecurity() {
    modalSecurity.classList.toggle('hide')
}

// condition --> show notify
openModalBtn.addEventListener('click', toggleModal)
openDocSecurity.addEventListener('click', toggleModalSecurity)

// close notify
iconCloseModal.addEventListener('click', closeModal)
buttonCloseModal.addEventListener('click', closeModal)

modalNotify.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})

modalSecurity.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModalSecurity()
})



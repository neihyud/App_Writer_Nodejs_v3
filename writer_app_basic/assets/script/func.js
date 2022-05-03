function resetDoc() {
    docTitle.innerHTML = 'Untitled Doc'
    tinymce.activeEditor.setContent("");
}

function openDoc() {
    const docsList = $$('.tr')
    docsList.forEach(function (item, index) {
        let doc = listDocs[listDocs.length - index - 1]
        item.onclick = function (e) {
            let i = index;
            const handleFile = item.querySelector('.handle-file')
            if ($('.test')) {
                $('.test').querySelector('.handle-file').classList.add('hide')
                $('.test').classList.remove('test')
            }
            item.classList.add('test')

            if (e.target.closest('.ellipsis')) {
                handleFile.classList.remove('hide')

                const handleDownload = handleFile.querySelector('.handle-file-download')
                const handleDelete = handleFile.querySelector('.handle-file-delete')

                document.onclick = function (e) {
                    console.log(e.target)
                    if (!e.target.closest('.ellipsis')) {
                        handleFile.classList.add('hide')
                    }
                }

                /*  window.onclick = function (e) {
                     if (!e.target.closest('.handle-file')) {
                         e.stopPropagation();
                         handleFile.classList.add('hide')
                     }
                 } */

                handleDelete.onclick = function (e) {
                    e.stopPropagation()
                    deleteDoc(item, index)
                    modal.classList.remove('hide')
                    handleFile.classList.add('hide')
                }

                handleDownload.onclick = function (e) {
                    e.stopPropagation()
                    handleFile.classList.add('hide')
                }
            }
            else if (e.target.closest('tr')) {
                    /* resetDoc() */
                    listDocs.push(index)
                    sessionStorage.setItem('listDocs', JSON.stringify(listDocs))
                    // window.location.href = 'https://duyhien2122.github.io/Writer'
                    window.location.href = 'http://localhost:5500/writer_app/editor.html'

                }
        }
    })
}

function deleteDoc(item, index) {
    modalDelete.classList.remove('hide')
    const deleteBtn = modalDelete.querySelector('.btn-delete')
    const closeBtn = modalDelete.querySelector('.btn-close')
    const closeIcon = modalDelete.querySelector('.icon-close')
    deleteBtn.onclick = function () {
        item.remove()
        listDocs.splice(listDocs.length - index - 1, 1)
        modal.classList.add('hide')
        modalDelete.classList.add('hide')

        if (listDocs.length == 0) {
            localStorage.setItem('listDocs', JSON.stringify(listDocs)) // tranh khi onload lai trang
        }
        sessionStorage.setItem('listDocs', JSON.stringify(listDocs))
    }

    closeIcon.onclick = function () {
        modal.classList.add('hide')
        modalDelete.classList.add('hide')
    }

    closeBtn.onclick = function () {
        modal.classList.add('hide')
        modalDelete.classList.add('hide')
    }
    sessionStorage.setItem('listDocs', JSON.stringify(listDocs))
}

function add(doc) {
    const tr = document.createElement('tr')
    tr.classList.add('tr')
    tr.innerHTML = `
        <td><i class="fa-solid fa-file"></i></td>
        <td>${doc.title}</td>
        <td>${doc.date}</td>
        <td>
            <i class="ellipsis fa-solid fa-ellipsis-vertical"></i>
            <ul class="handle-file hide">
                <a href="data:text/html,${doc.content}", download="${doc.title}.txt" 
                class="handle-file-item handle-file-download">Download</a>
                <li class="handle-file-item handle-file-delete">Delete</li>
            </ul>
        </td>
    `
    table.insertBefore(tr, table.children[1])
}

function update() {
    const list = JSON.parse(localStorage.getItem('listDocs'))
    list.forEach(function (item) {
        add(item)
        listDocs.push(item)
    })
}
function resetDoc() {
    docTitle.innerHTML = 'Untitled Doc'
    tinymce.activeEditor.setContent("");
}

function addDoc() {
    const title = docTitle.innerText
    const content = tinymce.get("myTextarea").getContent({ format: "text" });
    let day = (new Date()).toLocaleString('en-US', { month: 'short', day: 'numeric' })
    let time = (new Date()).toLocaleString('en-US', { timeStyle: "medium" })
    const date = day + ', ' + time

    if (content == '') {
        return;
    }
    
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
    table.insertBefore(tr, table.firstChild)
}
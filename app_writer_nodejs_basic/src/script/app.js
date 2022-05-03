var postsAPI = 'http://localhost:3000/posts';
var hostPort = 'http://localhost:8080'

function start() {
    getPosts(renderPosts)
}

window.onload = function () {
    start()
}

function getPosts(callback) {
    fetch(postsAPI)
        .then(response => response.json())
        .then(callback)
}

function renderPosts(posts) {
    const table = document.querySelector('.table')
    var htmls = posts.map(post => {
        return `
            <tr class="tr" get-id='${post.id}' get-password= '${post.password.trim()}' onclick="getId(this)">
                <td><i class="fa-solid fa-file"></i></td>
                <td>${post.title}</td>
                <td>${post.date}</td>
                <td>
                    <a href="data:text/html,${post.content}", download="${post.title}.txt" 
                     class="handle-file-item handle-file-download" onclick="event.stopPropagation()">
                     <i class="fa-solid fa-download"></i>
                     </a>
                 </td>
                <td>
                    <i class="fa-solid fa-trash" onclick="event.stopPropagation(); handleDeletePost(${post.id})"></i>
                </td>
            <tr>
        `
    })
    var htmlsReverse = htmls.reverse().join('')
    table.innerHTML = htmlsReverse
}

function handleDeletePost(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(postsAPI + '/' + id, options)
        .then(response => response.json())
        .then(() => {
            const post = document.querySelector(`tr[get-id='${id}']`)
            if (post) {
                post.remove()
            }
        })
}

function getId(tr) {
    console.log(tr)
    const id = tr.getAttribute('get-id')
    const password = tr.getAttribute('get-password')
    modal.classList.remove('hide')
    formPassword.classList.remove('hide')
    formPassword.setAttribute('action',`/editor.html/${id}`)
    formSubmit.onclick = function (e) {
        // e.preventDefault()

        // if (formInput.value != password) {
        // console.log(formInput.value)
        // if (!comparePass(formInput.value, password)) {
        //     alert('Error')
        // } else {
        //     modal.classList.add('hide')
        //     formPassword.classList.add('hide')
        //     window.location.href = hostPort + '/editor.html?get-id=' + id;
        // }
    }
}
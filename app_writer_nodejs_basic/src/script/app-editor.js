var postsAPI = 'http://localhost:3000/posts';

/* function start() {
    getPosts(renderPosts)
}
start() */

function start() {
    var getDate = location.pathname.split('/')
    var id = getDate[getDate.length - 1]
    if (!isNaN(parseFloat(getDate[id]))) {
        getPost(id, function (post) {
            tinymce.get('myTextarea').setContent(post.content)
            document.querySelector('.name-title').innerHTML = post.title
        })
    }
    // alert(getDate)
}
window.onload = function () {
    start()
}

function getPosts(callback) {
    fetch(postsAPI)
        .then(response => response.json())
        .then(callback)
}

function createPost(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(postsAPI, options)
        .then(response => response.json())
        .then(() => console.log('create post success'))
}

function handleCreatePost(post) {
    const data = {
        "title": `${post.title}`,
        "date": `${post.date}`,
        "content": `${post.content}`,
        "password": `${post.password}
        `
    }
    createPost(data)
}

function getPost(id, callback) {
    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(postsAPI + '/' + id, options)
        .then(response => response.json())
        .then(callback)
}


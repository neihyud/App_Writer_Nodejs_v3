const express = require('express')
const app = express()
const path = require("path")
const morgan = require('morgan')
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const saltRounds = 10

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/assets')))
app.use(express.static(path.join(__dirname, '/src')))

app.use(morgan('combined'))

const port = 8080

var postsAPI = 'http://localhost:3000/posts'

const hash = (password) => {
    return bcrypt.hashSync(password, saltRounds)
}

const comparePass = (password, password2) => {
    return bcrypt.compareSync(password, password2);
}

app.post('/editor', (req, res) => {
    const data = {
        'password': `${hash(req.body.password)}`
    }

    fetch(postsAPI)
        .then(response => response.json())
        .then(posts => {
            let lenPost = posts.length
            fetch(postsAPI + '/' + lenPost, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(() => {
                    res.redirect('/editor.html')
                    // res.sendFile(__dirname + '/public/editor.html')
                })
        })
})

// app.post('/editor.html', (req, res) => {
//     res.sendFile(__dirname + '/public/editor.html')
// })

// app.get('/editor.html/:myId', (req, res) => {
//     console.log('param', req.params)

//     res.sendFile(__dirname + '/public/editor.html')
// })

app.post('/editor.html/:myId', (req, res) => {
    const id = req.params.myId
    const pw = req.body.password
    checkPass(id, pw, res)
})

function checkPass(id, pw, res) {
    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(postsAPI + '/' + id, options)
        .then(response => response.json())
        .then(post => {
            if (comparePass(pw, post.password.trim())) {
                res.sendFile(__dirname + '/public/editor.html')
            } else {
                res.redirect('/index.html')
            }
        })

}

// app.get('/editor.html/:myId', (req, res) => {
//     const id = req.params.myId
//     const pw = req.body.password
//     checkPass(id, pw, res)
// })

// function checkPass(id, pw, res) {
//     var options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     fetch(postsAPI + '/' + id, options)
//         .then(response => response.json())
//         .then(post => {
//             if (comparePass(pw, post.password.trim())) {
//                 res.sendFile(__dirname + '/public/editor.html')
//             } else {
//                 res.redirect('/index.html')
//             }
//         })

// }

// function createPost(data) {
//     fetch(postsAPI, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         // .then(response => response.json())
//         // .then(data => {
//         //     console.log('Success:', data);
//         // })
//         // .catch((error) => {
//         //     console.error('Error:', error);
//         // });
// }

app.listen(port, () => console.log(`listen on port ${port}`))
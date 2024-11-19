const express = require('express')
const server = express()
const path = require('path')
const db = require('./config/db_connect')
const { error } = require('console')

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))

server.use(express.json());

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './html/home.html'))
});

server.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './html/menu.html'))
});

server.get('/menu-rodizio', (req, res) => {
    res.sendFile(path.join(__dirname, './html/menu-rodizio.html'))
});

server.get('/delivery', (req, res) => {
    res.sendFile(path.join(__dirname, './html/delivery.html'))
});

server.get('/restaurantes', (req, res) => {
    res.sendFile(path.join(__dirname, './html/restaurantes.html'))
});

server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, './html/cadastro.html'))
});

server.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, './html/sobre.html'))
});
server.post('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, './html/cadastro.html'))

    console.log(req.body);

    const {email, senha} = req.body

    const sql = 'INSERT INTO clientes (email, senha) VALUES (?,?)'

    db.query(sql, [email, senha], (error, results) => {
        if (error) {
            console.log("Erro ao cadastrar.")
        } else {
            console.log("Usuario cadastrado com sucesso")
            console.log(results)

            if (results.length > 0) {  
                res.redirect('/')
            } else {
                res.redirect('/cadastro')
            }
        }
    })
});
 
server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './html/login.html'))
});

server.post('/login', (req, res) => {
    const {email, senha } = req.body

    const sql = 'SELECT * FROM clientes WHERE email = ? AND senha = ?'

    db.query(sql, [email, senha], (error, results) => {
        if (error) {
            console.log("Erro ao logar");
        } else {
            console.log("Usuário logado com sucesso");
            console.log(results);

            if (results.length > 0) {  
                res.redirect('/reservar')
            } else {
                res.redirect('/')
            }
        }
    })
});

server.get('/reservar', (req, res) => {
    res.sendFile(path.join(__dirname, './html/reserva.html'))
});
// server.post('/reservar', (req, res)=> {
//     res.sendFile(path.join(__dirname, './html/reserva.html'))

//     console.log(req.body);

//     const {restaurante, data, hora} = req.body

//     const sql = 'INSERT INTO reservas (restaurante, data, hora) VALUES (?,?,?)'

//     db.query(sql, [restaurante, data, hora], (error, results) => {
//         if (error) {
//             console.log("Erro ao reservar.")
//         } else {
//             console.log("Reserva feita com sucesso!")
//             console.log(results)
//         }
//     })

//     res.redirect('/reservar')
// });


server.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})
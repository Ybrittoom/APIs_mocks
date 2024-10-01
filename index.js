const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//dados dos formularios 
let formulario = [
    {id: 1, nome:"Aluguel de carros", descriçao: "Formularios para alugar carros"},
    {id: 2, nome: "Alunos", descriçao: "Formularios do registro de cada aluno"},
    {id: 3, nome: "Biblioteca", descriçao: "Formulario de registro de cada livro"},
    {id: 4, nome: "Exames", descriçao: "Formulario onde estao cada exame"},
    {id: 5, nome: "Hotel", descriçao: "Registro de cada hospedagem"},
    {id: 6, nome: "Manutençao de equipamentos", descriçao: "Data e gravidade de cada manutençao"},
    {id: 7, nome: "Ocorrencia", descriçao: "Registro de ocorrencia"},
    {id: 8, nome: "Viagens", descriçao: "Registro de viagens"},
    {id: 9, nome: "Usuario", descriçao: "Cadastro de Usuario"},
    {id: 10, nome: "Veterinaria", descriçao: "Agendamento na Veterinaria"}

]

//formulario 1
app.route('/formulario/1')
    .get((req, res) => res.json(formulario[0]))
    .put((req, res) => {
        formulario[0] = {...formulario[0], ...req.body}
        res.json(formulario[0])
    })

    .delete((req, res) => {
        formulario.splice(0, 1);
        res.status(204) .send()
    })

    //formulario 2

app.route('/formulario/2')
    .get((req, res) => res.json(formulario[1]))
    .put((req, res) => {
        formulario[1] = {...formulario[1], ...req.body}
        res.json(formulario[1])
    })

    .delete((req, res) => {
        formulario.splice(1, 1) 
        res.status(204) .send()
    })

//formulario 3

app.route('/formulario/3')
    .get((req, res) => res.json(formulario[2]))
    .put((req, res) => {
        formulario[2] = {...formulario[2], ...req.body}
        res.json(formulario[1])
    })

    .delete((req, res) => {
        formulario.splice(2, 1) 
        res.status(204) .send()
    })

    //formulario 4

app.route('/formulario/4')
    .get((req, res) => res.json(formulario[3]))
    .put((req, res) => {
        formulario[3] = {...formulario[3], ...req.body}
        res.json(formulario[3])
    })    

    .delete((req, res) => {
        formulario.splice(3, 1)
        res.status(204) .send()
    })

    //formulario 5

app.route('/formualrio/5')
    .get((req, res) => res.json(formulario[4]))
    .put((req, res) => {
        formulario[4] = {...formulario[4], ...req.body}
        res.json(formulario[4])
    })

    .delete((req, res) => {
        formulario.splice(4, 1)
        res.status(204) .send()
    })

    //formulario 6

app.route('/formulario/6')
    .get((req, res) => res.json(formulario[5]))
    .put((req, res) => {
        formulario[5] = {...formulario[5], ...req.body}
        res.json(formulario[5])
    })

    .delete((req, res) => {
        formulario.splice(5, 1)
        res.status(204) .send()
    })

    //formulario7

app.route('/formulario/7')
    .get((req, res) => res.json(formulario[6]))
    .put((req, res) => {
        formulario[6] = {...formulario[6], ...req.body}
        res.status(204) .send()
    })

    .delete((req, res) => {
        formulario.splice(6, 1)
        res.status(204) .send()
    })

    //formulario 8

    app.route('/formulario/8')
    .get((req, res) => res.json(formulario[7]))
    .put((req, res) => {
        formulario[7] = {...formulario[7], ...req.body}
        res.status(204) .send()
    })

    .delete((req, res) => {
        formulario.splice(7, 1)
        res.status(204) .send()
    })

    //formulario 9
    app.route('/formulario/9')
    .get((req, res) => res.json(formulario[8]))
    .put((req, res) => {
        formulario[8] = {...formulario[8], ...req.body}
        res.status(204) .send()
    })

    .delete((req, res) => {
        formulario.splice(8, 1)
        res.status(204) .send()
    })

    //formulario 10

    app.route('/formulario/10')
    .get((req, res) => res.json(formulario[9]))
    .put((req, res) => {
        formulario[9] = {...formulario[9], ...req.body}
        res.status(204) .send()
    })

    .delete((req, res) => {
        formulario.splice(9, 1)
        res.status(204) .send()
    })



app.listen(port, () =>{
    console.log(`esta rodando em https://localhost:${port}`)
})





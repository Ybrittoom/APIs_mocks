const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//dados dos formularios 
let formulario = [
    { id: 1, nome: "Aluguel de carros", descriçao: "Formularios para alugar carros" },
    { id: 2, nome: "Alunos", descriçao: "Formularios do registro de cada aluno" },
    { id: 3, nome: "Biblioteca", descriçao: "Formulario de registro de cada livro" },
    { id: 4, nome: "Exames", descriçao: "Formulario onde estao cada exame" },
    { id: 5, nome: "Hotel", descriçao: "Registro de cada hospedagem" },
    { id: 6, nome: "Manutençao de equipamentos", descriçao: "Data e gravidade de cada manutençao" },
    { id: 7, nome: "Ocorrencia", descriçao: "Registro de ocorrencia" },
    { id: 8, nome: "Viagens", descriçao: "Registro de viagens" },
    { id: 9, nome: "Usuario", descriçao: "Cadastro de Usuario" },
    { id: 10, nome: "Veterinaria", descriçao: "Agendamento na Veterinaria" }
    //aqui fica os registro fixos
]

//funçao para gerencia as rotas

const manageFormulario = (req, res, id) => {
    const formularioIndex = formulario.findIndex(f => f.id === id);

    //se a requisiçao http for igaul a "GET", execute o segundo if
    if (req.method === 'GET') {
        if (formularioIndex === -1 ) { //caso nao tiver um id igual a 0 ou maior, execute ....
            return res.status(404).json({message: "Formulario nao encontrado"})
        }
        return res.json(formulario[formularioIndex])
    }
    //metodo para atualizar 
    if (req.method === 'PUT') {
        if (formularioIndex === -1) {
            return res.status(404).json({message: "Formulario nao encontrado"})
        }
        /*esse código está atualizando um objeto específico em um array com novos dados que vêm de uma requisição,
         mantendo as propriedades existentes e sobrescrevendo aquelas que estão presentes em req.body*/
        formulario[formularioIndex] = {...formulario[formularioIndex], ...req.body }
        return res.json(formulario[formularioIndex])

    }
    //metodo para enviar 
    if (req.method === 'POST') {
        const novoFormulario = req.body //req.body contem os dados que o cliente enviou 
        const existe = formulario.some(f => f.id === novoFormulario.id )
        if (existe) {
            return res.status(400).json({message:  "Um formulário com este ID já existe meu rei, chefe, capitao, consagrado e etc..."})
        }
        formulario.push(novoFormulario)
        return res.status(201).json(novoFormulario)
    }
    //metodo para deletar
    if (req.method === 'DELETE') {
        if ( formularioIndex === -1) {
            return res.status(404).json({message: "Formulario nao encontrado"})
        }
        formulario.splice(formularioIndex, 1)
        return res.status(204).send()
    }
    
};


app.route(`/formulario/:id`)
    .get((req, res) => manageFormulario(req, res, parseInt(req.params.id)))
    .put((req, res) => manageFormulario(req, res, parseInt(req.params.id)))
    .post((req, res) => manageFormulario(req, res, parseInt(req.params.id)))
    .delete((req, res) => manageFormulario(req, res, parseInt(req.params.id)))


//ligando o servidor
app.listen(port, () => {
    console.log(`Esta rodando em http://localhost:${port}`) //${port} e a variavel 'port', que e e igual a 3000
    //ou seja, a porta e 3000
})
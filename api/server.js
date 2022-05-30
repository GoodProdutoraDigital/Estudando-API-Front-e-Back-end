const express = require ('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        //diferentemente do método fetch, o axios não precisa de uma função callback para retornar a resposta
        //sendo assim, possivel retornar o data diretamente como resposta
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(5000, () => {
    console.log('Server On...')
})

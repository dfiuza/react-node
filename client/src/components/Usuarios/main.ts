import fetch from 'node-fetch'
import axios  from 'axios'

//url
//Nomes: https://randomuser.me/api/

//Fetch
async function buscaNomesFetch() {
    const response = await fetch('https://randomuser.me/api/')
    const dados = await response.json()
    console.log(dados)
}

// --------------------------------------------------------------------------

//Axios
async function buscaNomesAxios() {
    const response = await axios.get('https://randomuser.me/api/')
    console.log(response)
}

//buscaNomesFetch()
buscaNomesAxios()
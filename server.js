const PORT =8000
const axios = require('axios').default
const express = require ('express')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())
app.get('/flights', (req, res)=>{
    const options = {
        url:'https://13d29257-49b5-4166-a679-26890099418b-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures?page-size=6',
        headers: {
            accept : 'application/json',
            'X-Cassandra-Token': "AstraCS:ZhCFNgFKcMChhOEvYrjfrGwq:30f6c12d470f063320a29b3d2cb6b64f1f52d646944b8f75074a0a0fb61c6ff8"
    }
}
    axios.request(options).then(response =>{
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})





app.listen(PORT, ()=> console.log('running on port' + PORT))
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8001

app.use(express.static(path.join(__dirname,'front/build')))

app.get('/',function(req, res){
    res.sen8dFile( path.join(__dirname, 'front/build/index.html'))
})

app.listen(PORT, () => {
    console.log( `${PORT} 노드서버구동정상` )
 }) 
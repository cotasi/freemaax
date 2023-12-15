const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8001

app.use(express.static(path.join(__dirname,'front/public')))

app.get('/',function(req, res){
    res.sendFile( path.join(__dirname, 'front/public/index.html'))
})

app.listen(PORT, () => {
    console.log( `${PORT} 노드서버구동정상` )
 })
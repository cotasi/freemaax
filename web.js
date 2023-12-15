const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 800

app.use(express.static(path.join(__dirname,'front/public')))

app.get('/',function(req, res){
    res.sendFile( path.join(__dirname, 'front/public/index.html'))
})

//라우터없다면
 app.use((req, res) =>{
    res.status(404).sendFile( path.join(__dirname, 'public/nopage.html'))
})

app.listen(PORT, () => {
    console.log( `${PORT} 노드서버구동정상` )
 })
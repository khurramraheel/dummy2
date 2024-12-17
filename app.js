let express =  require('express');

let app = express();

app.post('/some', (req, res)=>{
res.end("asdsd")
})

app.listen(4050, ()=>{
    console.log('chaling')
})
const express = require('express')
const app = express()
const handlebars=require('express-handlebars')
const Cliente=require('./models/Cliente')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views','./views')


app.get('/clientes',function(req,res){
  Cliente.findAll().then(function(clientes){
      res.render('clientes',{layout:false,clientes:clientes})
    })
})

app.listen(8080)
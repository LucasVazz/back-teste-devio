const express = require('express')
const app = express()
const PORT = 3000
const fastfood = require('./fastfood.json')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

 app.get('/fastfood',  async(req, res) => {
    res.send(fastfood)
    })

app.get('/fastfood/:param', (req, res) => {
    var filterFastfood = [];
    fastfood.map((f)=>{
                if(f.name.toLowerCase().indexOf(req.params.param.toLowerCase())!= -1){
                 filterFastfood.push(f)
                    }
    })
    console.log(filterFastfood)
   res.send(filterFastfood)

})

app.listen(PORT, () => {
console.log(`online na porta ${PORT}` )
})

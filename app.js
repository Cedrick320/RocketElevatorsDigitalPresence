const express = require('express');
const app = express()
app.get('/',(req,res) => {
res.send(console.log =("Hello World!!!"))
})
app.get('/tender',(req,res) => {
res.send([1,2,3])

})
//PORT
 const port = process.env.PORT || 3000;
//const port = 3000
app.listen(port,() => console.log(`Listening to port ${port}....`))
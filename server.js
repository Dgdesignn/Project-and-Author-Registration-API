const app = require('fastify')({logger:false})
const authors= require('./src/controller/authorController.js')




app.get('/api/authors',authors.getAuthors)

app.post('/api/authors',authors.createAuthors)
app.put('/api/authors/:id',authors.upadateAuthor)
app.delete('/api/authors/:id',authors.deleteAuthor)




app.listen({port:5500},(err)=>{
    if(err){
        app.log.error(err)
        process.exit(1)
    }
    console.log("Server running...")
})
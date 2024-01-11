const app = require('fastify')({logger:false})
const knex = require('./src/database/index')


app.get('/api/authors/', async (req,resp)=>{
    try {
        const data = await knex('authors');
        console.log(data);
        resp.send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
})




app.listen({port:5500},(err)=>{
    if(err){
        app.log.error(err)
        process.exit(1)
    }
    console.log("Server running...")
})
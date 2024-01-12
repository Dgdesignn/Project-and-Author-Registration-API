const knex = require('../database/index.js')


module.exports = {

    //fetch all authors in database
    getAuthors:async(req,resp)=>{
        try {
            const data = await knex('authors');
            //console.log(data);
            resp
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(data)
        } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //create new author
    createAuthors:async(req, resp)=>{
        const {name} = req.body;
        try {
            const result = await knex('authors').insert({name})
            console.log(result)
            resp.status(201)
            .send({id:result[0],name:name})
        } catch (error) {
            console.log(console.error());
            resp.status(500).json({error:'Internal Server Error'})
        }
    },

    // update author by id
    upadateAuthor:async(req,resp)=>{
        const{ id } = req.params;
        const { name } = req.body;
         
        try {
            await knex('authors').update({name}).where({author_id:id})
            resp.status(200).send({id:id,name:name})
        } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //delete author by id
    deleteAuthor:async(req, resp)=>{
        const {id} = req.params
        try {
            await knex('authors').del().where({author_id:id})
            resp.status(204).send()
        } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Internal Server Error' });
        }
    }

}
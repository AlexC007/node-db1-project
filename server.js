const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/api/accounts',async (req,res)=>{
  try{
      const accounts= await db('accounts');
      res.status(200).json(accounts);
  } catch (err){
    res.status(500).json({errorMessage: "The account with the specified does not exist."})
  }
})

server.get('/api/accounts/:id',async (req, res) => {
    const {id} = req.params;
    try {
        const accounts = await db('accounts').where('id',id)
        res.status(200).json(accounts)
    } catch (err){
        res.status(500).json({errorMessage: "The account with the specified ID does not exist."})
    }
});

server.post('/api/accounts',async (req, res) => {
    const data = req.body;
    try {
        const accounts = await db('accounts').insert(data)
        res.status(200).json(accounts)
    } catch (err){
        res.status(500).json({errorMessage: "Could Not POST"})
    }
});
server.put('/api/accounts/:id',async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const accounts = await db('accounts').where('id',id).update(data);
        res.status(200).json(accounts)
    } catch (err){
        res.status(500).json({errorMessage: "The account with the specified ID does not exist."})
    }
});
server.delete('/api/accounts/:id',async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const accounts = await db('accounts').where('id',id).delete(data)
        res.status(200).json(accounts)
    } catch (err){
        res.status(500).json({errorMessage: "The account with the specified ID does not exist."})
    }
});
module.exports = server;
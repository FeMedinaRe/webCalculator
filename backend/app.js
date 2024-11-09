const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/sumar', (req, res) =>{
    const{ a, b } = req.body;
    if(typeof a === 'number' && typeof b === 'number'){
        res.json({result: a + b});
    } else{
        res.status(400).json({error: 'both a and b must be numbers'});
    }
});

app.post('/restar', (req, res) =>{
    const{ a, b } = req.body;
    if(typeof a === 'number' && typeof b === 'number'){
        res.json({result: a - b});
    } else{
        res.status(400).json({error: 'both a and b must be numbers'});
    }
});

app.post('/multiplicar', (req, res) =>{
    const{ a, b } = req.body;
    if(typeof a === 'number' && typeof b === 'number'){
        res.json({result: a*b});
    } else{
        res.status(400).json({error: 'both a and b must be numbers'});
    }
});

app.post('/dividir', (req, res) =>{
    const{ a, b } = req.body;
    if(typeof a === 'number' && typeof b === 'number'){
        if(b !== 0){
            res.json({result: a/b});
        } else{
            res.status(400).json({error: 'cannot divide by 0'})
        } 
    } else{
        res.status(400).json({error: 'both a and b must be numbers'});
    }
});

app.use((req,res)=>{
    res.status(404).json({error: 'operation not found'});
});

app.listen(port, ()=>{
    console.log('Calculator API running on port ${port}');
});


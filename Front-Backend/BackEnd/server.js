import express from 'express'

const app=express()

app.get('/api/jokes',(req,res)=>{
    const jokes= [
        {
            id:1,
            name:'this jokes 1',
            description:"this jokes 1"
         },
         {
            id:2,
            name:'this jokes 2',
            description:"this jokes 2"
         },
         {
            id:3,
            name:'this jokes 3',
            description:"this jokes 3"
         },
         {
            id:4,
            name:'this jokes 4',
            description:"this jokes 4"
         },
         {
            id:5,
            name:'this jokes 5',
            description:"this jokes 5"
         },
         {
            id:6,
            name:'this jokes 6',
            description:"this jokes 6"
         },
         {
            id:7,
            name:'this jokes 7',
            description:"this jokes 7"
         },
    ]
    res.send(jokes)
});

app.get('/',(req,res)=>{
    res.send('Server is ready')
});

const port=process.env.PORT || 1999
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
});
import express from 'express'

const app=express();
app.get('/api/product',(req,res)=>{
    const product=[{"id":1,"name":"this jokes 1","description":"this jokes 1"},{"id":2,"name":"this jokes 2","description":"this jokes 2"},{"id":3,"name":"this jokes 3","description":"this jokes 3"},{"id":4,"name":"this jokes 4","description":"this jokes 4"},{"id":5,"name":"this jokes 5","description":"this jokes 5"},{"id":6,"name":"this jokes 6","description":"this jokes 6"},{"id":7,"name":"this jokes 7","description":"this jokes 7"}]

      if(req.query.search){
        const filter=product.filter(product=>product.name.includes(req.query.search))
        res.send(filter)
        return
      }

      setTimeout(()=>{
       res.send(product)

      },2000)

})
const port=process.env.PORT || 3000;
app.listen(port,()=>(
    console.log(`Server running on port: http://localhost:${port}`)
));





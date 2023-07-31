import express from 'express';
import productsRouter from './routes/productsRouter.js';
import cartsRouter from './routes/cartsRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
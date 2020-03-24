import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import router from './router';
import cors from 'cors'
const app = express();


mongoose.connect('mongodb://root:1234@duelodefilmes-shard-00-00-mlx9f.mongodb.net:27017,duelodefilmes-shard-00-01-mlx9f.mongodb.net:27017,duelodefilmes-shard-00-02-mlx9f.mongodb.net:27017/duelodefilmes?ssl=true&replicaSet=DueloDeFilmes-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

}).catch(err => {
    console.log(err);
});
app.use(cors())
app.use(bodyParser.json());
app.use(router);

export default app;

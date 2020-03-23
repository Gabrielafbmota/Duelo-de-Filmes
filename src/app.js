import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import router from './router';
import cors from 'cors'
const app = express();


mongoose.connect('mongodb://root:h6bH8cpWWIRT1mP@aulaomnstack-shard-00-00-vxmyh.mongodb.net:27017,aulaomnstack-shard-00-01-vxmyh.mongodb.net:27017,aulaomnstack-shard-00-02-vxmyh.mongodb.net:27017/test?ssl=true&replicaSet=AulaOmnstack-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).catch(err => {
    console.log(err);
});
app.use(bodyParser.json());
app.use(cors())
app.use(router);

export default app;

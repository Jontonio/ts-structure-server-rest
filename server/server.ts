
import express, { Application }  from 'express';
import cors from 'cors';
class Server {

    private app:Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }

    routes(){
        this.app.get('', (req, res)=> {
            res.json({'msg':'get petition'})
        }) 
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Server is online on PORT → ${this.port} `)
        })
    }

}

export default Server;
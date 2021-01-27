//Librerias
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";

//Componentes API
import controllers from './controllers'
import middlewares from './middlewares'
import models from './models'
import routes from './routes'
import services from './services'

//App de Express
const app = express();

//Init y config de middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
morganBody(app);

//Config rutas
app.use('/users', routes.user);

//Init server
app.listen(process.env.PORT, () =>
  console.log(
    `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
  )
);

app.use((req,res,next) => {

  req.context={
    models, 
    me:models.Users.userRepository.findById(1)
  };
  next();
}); 
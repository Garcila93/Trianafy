// Librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose"

// Componentes del API
import models from './models';
import routes from './routes';

// Middlewares y servicios;
import passport from './services/passport';


// Instanciación de Express
const app = express();

// Inicialización y configuración de algunos middlewares

// CORS
app.use(cors());

// body-parser, para procesar el cuerpo de las peticiones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan y morganbody para hacer logging de las peticiones y respuestas
app.use(morgan('dev'))
morganBody(app);

// Inicialización de passport
app.use(passport.initialize());

app.use((req, res, next) => {
  // Para cualquier petición, añadimos en su contexto
  req.context = {
    models,
  };
  next();
});

// Configuración de las rutas.
app.use('/users', routes.user);
app.use('/playlists',routes.playList)
app.use('/songs', routes.song);
app.use('/auth', routes.auth)

// Inicialización del servidor
app.listen(process.env.PORT, () =>
  console.log(
    `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
  )
);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  
  if (err) {
    console.log(`Error de conexión a la base de datos: ${JSON.stringify(err)}`);
  } else {
    console.log(`Conexión correcta a la base de datos en la URI ${process.env.DB_URI}`);
    app.listen(process.env.PORT, () =>
      console.log(
        `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
      )
    );
  }

});

import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import ComentarioRoute from './router/comentario.route.js';
import  routerUser from './router/UserRouter.js';
import { sequelize } from "./db/conexion.js";

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
/* app.use('/api', routeDatos); */
/* app.use('/api', rotuerTypeUsers); */
app.use('/api', routerUser);
app.use('/api', ComentarioRoute);

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ force: false })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();


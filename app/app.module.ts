import 'dotenv/config';
import { Application } from 'express';
import { helloController } from './example/example.controller';
import { postController } from './postManager/post.controller';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerDocument from '../swagger.json';

const specs = swaggerJsdoc(swaggerDocument);

export const AppModule = (app: Application) => {
    app.use(express.json());

    // Configurações do Swagger
    app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    // API de exemplo
    app.use('/api/hello', helloController);

    // API de Gerenciamento de Posts
    app.use('/api/posts', postController);
};

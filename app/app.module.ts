import 'dotenv/config';
import { Application } from 'express';
import { helloController } from './example/example.controller';
import { postController } from './postManager/post.controller';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';

// Carregar swagger.json
const swaggerFile = path.resolve(__dirname, './swagger.json');
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

const specs = swaggerJsdoc({
    swaggerDefinition: swaggerDocument,
    apis: ['./app/controller/*.ts'],
});

export const AppModule = (app: Application) => {
    app.use(express.json());

    // Configurações do Swagger
    app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    // API de exemplo
    app.use('/api/hello', helloController);

    // API de Gerenciamento de Posts
    app.use('/api/posts', postController);
};

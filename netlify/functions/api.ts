import express from 'express';
import serverless from 'serverless-http';
import { AppModule } from '../../app/app.module';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';


// Carregar swagger.json
const varDirCa = path.resolve(__dirname, './postManager/*.ts');

const swaggerFile = path.resolve(__dirname, './swagger.json');
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDefinition = JSON.parse(swaggerData);
// Configuração do swagger-jsdoc
const options = {
    definition: swaggerDefinition,
    apis: [
        varDirCa,
    ], // Ajuste o caminho conforme necessário para incluir todos os arquivos usados
};
const specs = swaggerJsdoc(options);
const api = express();

AppModule(specs, api);

export const handler = serverless(api);

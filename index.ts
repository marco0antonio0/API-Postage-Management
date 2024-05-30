import express from 'express';
import { AppModule } from './app/app.module';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';


// Carregar swagger.json
const varDirCa = path.resolve(__dirname, './app/postManager/*.ts');

const swaggerFile = path.resolve(__dirname, './netlify/functions/swagger.json');
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

const app = express();
const port = process.env.PORT || 3000;

AppModule(specs, app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
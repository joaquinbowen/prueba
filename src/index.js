//docker compose -p contenido up

require('dotenv').config();
const generoRoutes = require("./routes/generoRoutes");
const contenidoRoutes = require("./routes/contenidoRoutes");
const authRoutes = require("./routes/authRoutes");

const express = require('express');
const { apiReference } = require('@scalar/express-api-reference');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
    credentials:true

}

app.use(express.json());

console.log("clave secreta:", jwtSecret)
console.log("PORT:", port)

app.get('/', (req, res) => {
    res.send('Api Backend Funcionando')

});

app.get('/api/openapi.yaml', (_, res) => {
  res.setHeader('Content-Type', 'application/yaml');
  res.send(fs.readFileSync(path.join(__dirname, '../docs/openapi.yaml'), 'utf-8'));
});

app.use(
  '/api/docs',
  apiReference({
    spec: {
      url: '/api/openapi.yaml',
    },
    theme: 'purple',
    layout: 'modern',
    defaultOpenAllTags: false,
    hideDownloadButton: false,
    authentication: {
      preferredSecurityScheme: 'BearerAuth',
      apikey:{
        token:'token'
      }
    },
    configuration: {
      showSearch: true,
      showModels: true,
      showRequestHeaders: true,
      showRequestBodies: true,
      showResponseBodies: true,
      showResponseHeaders: true,
      showStatusCodes: true,
      showExamples: true,
    },
  })
);

app.use("/api", generoRoutes);
app.use("/api", contenidoRoutes);
app.use("/api", authRoutes);



app.listen(port, '0.0.0.0', () => {
    console.log("Servidor escuchando el puerto " + port);
    console.log("Documentación disponible en http://localhost:" + port + "/api/docs");
})
import express from'express'
import cors from'cors'

const app = express();
const port = 5000;


// Permitir requisições de qualquer origem (não recomendado para produção)
app.use(cors({
    origin: 'http://localhost:5173',  // O endereço do seu frontend
  }));
  
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import {routes} from './src/routes/index.js'

app.use('/api', routes); 



app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});

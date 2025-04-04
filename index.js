const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');
const processoRoutes = require('./routes/processos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/processos', processoRoutes);

app.get('/', (req, res) => res.send('API Plataforma Jurídica online!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
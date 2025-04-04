const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
});

router.post('/', async (req, res) => {
  const cliente = await prisma.cliente.create({ data: req.body });
  res.json(cliente);
});

module.exports = router;
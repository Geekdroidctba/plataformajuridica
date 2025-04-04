const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const processos = await prisma.processo.findMany();
  res.json(processos);
});

router.post('/', async (req, res) => {
  const processo = await prisma.processo.create({ data: req.body });
  res.json(processo);
});

module.exports = router;
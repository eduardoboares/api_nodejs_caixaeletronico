const express = require('express');
const { check, validationResult } = require('express-validator');
const saqueFunc = require('../../modules/saque');

const router = express.Router();

router.post('/saque', [check('valor').isInt().withMessage('O campo deve ser númerico do tipo inteiro.')], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    try {
        const { valor } = req.body;

        if (valor > 1 && valor != 3) {
            return res.send({ code: 0, sucesso: true, valor: valor, resultado: saqueFunc(valor) });
        }
        else {
            return res.send({ code: 1, sucesso: false, valor: valor, resultado: 'Valor inválido para saque.' });
        }
    } catch (err) {
        return res.status(400).send({ error: 'Falha no saque.' });
    }
});

module.exports = app => app.use('/transacao', router);
const express = require("express");
const db = require("../db/models")
const router = express.Router();


//criar rota para cadastrar
router.post("/", async (req, res) => {

    var data = req.body;

    await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        });
    }).catch(() => {
        return res.json({
            error: false,
            message: "Erro: Mensagem não cadastrada com sucesso!",
        });
    })
});


//exportar
module.exports = router; 
const ProtocolTemplate = require('../public/models/ProtocolTemplate');
const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    ProtocolTemplate.findAll()
        .then(tmps => {
            if (tmps === null) throw new Error("Empty");
            res.json(tmps)
        }).catch( e => {
        console.error(e);
        res.json({ error: '???' });} )
});

router.get('/id/:id', (req, res) => {
    ProtocolTemplate.findOne((req.params.id > 0) ? { where: { id: req.params.id } } : {})
        .then(task => {
            if (task === null) throw new Error('Wrong Id');
            res.json(task);
        })
        .catch(error => {
            console.error(error);
            res.json({ error: 'Wrong Id' });
        })
});

router.post("/new", (req, res)=>{
    const {filePath, numberProtocolBegin,numberProtocolEnd,year} = req.body;
    ProtocolTemplate.create({filePath, numberProtocolBegin,numberProtocolEnd, year}).then(ExpertOpinionTemplate => {
        res.json(ExpertOpinionTemplate);
    })
});

router.put("/update", (req, res)=>{
    const {id,filePath, numberProtocolBegin,numberProtocolEnd, year} = req.body;
    ProtocolTemplate.update(
        {
            filePath: filePath,
            numberProtocolBegin: numberProtocolBegin,
            numberProtocolEnd: numberProtocolEnd,
            year:year
        },
        { where: { id: id } }
    ).then(result =>
        res.json(result)
    )
});

router.delete("/delete/:id", (req, res)=>{
    let id = req.params.id;
    ProtocolTemplate.destroy({
        where: {
            id:id
        }
    }).then( rowDeleted  => {
        if (rowDeleted  === 1)
            res.json({rowDeleted: 1});
        else throw new Error("No ok!");
    }).catch( e => {
        console.error(e);
    })
});

module.exports = router;

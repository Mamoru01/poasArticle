const ExpertOpinionTemplate = require('../public/models/ExpertOpinionTemplate');
const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    ExpertOpinionTemplate.findAll()
        .then(tmps => {
            if (tmps === null) throw new Error("Empty");
            res.json(tmps)
        }).catch( e => {
        console.error(e);
        res.json({ error: '???' });} )
});

router.get('/id/:id', (req, res) => {
    ExpertOpinionTemplate.findOne((req.params.id > 0) ? { where: { id: req.params.id } } : {})
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
    const {filePath, numberProtocolBegin,numberProtocolEnd} = req.body;
    ExpertOpinionTemplate.create({filePath, numberProtocolBegin,numberProtocolEnd}).then(ExpertOpinionTemplate => {
        res.json(ExpertOpinionTemplate);
    })
});

router.put("/update", (req, res)=>{
    const {id,filePath, numberProtocolBegin,numberProtocolEnd} = req.body;
    ExpertOpinionTemplate.update(
        {
            filePath: filePath,
            numberProtocolBegin: numberProtocolBegin,
            numberProtocolEnd: numberProtocolEnd
        },
        { where: { id: id } }
    ).then(result =>
        res.json(result)
    )
});

router.delete("/delete/:id", (req, res)=>{
    let id = req.params.id;
    ExpertOpinionTemplate.destroy({
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

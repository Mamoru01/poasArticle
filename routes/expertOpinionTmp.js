const ExpertOpinionTemplate = require('../public/models/ExpertOpinionTemplate');
const express = require('express');
const router = express.Router();

router.get("/all", (req, res, next) => {
    ExpertOpinionTemplate.findAll()
        .then(tmps => {
            if (tmps === null) throw new Error("Empty")
            res.json(tmps)
        }).catch( e => {
        console.error(e);
        res.json({ error: '???' });} )
});

module.exports = router;

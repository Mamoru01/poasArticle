const express = require('express');
const router = express.Router();
const Paper = require('../public/models/Paper');


router.get('/all',(req, res, next) => {
    Paper.findAll().then(result => {
        res.json(result);
    }).catch(error => {
        console.error(error);
        res.status(500);
        res.json({ error: 'Db error' });
    })
});

router.get("/id/:id", (req, res, next) => {
    Paper.findOne((req.params.id > 0) ? { where: { id: req.params.id } } : {})
        .then(task => {
            if (task === null) throw new Error('Wrong Id')
            res.json(task);
        })
        .catch(error => {
            console.error(error);
            res.json({ error: 'Wrong Id' });
        })
});

router.post("/new", (req, res, next) => {
    const {title, source,year, authors, link, state,  expert_opinion, state_expert_opinion} = req.body;
    Paper.create({title, source, year, authors, link, state,  expert_opinion, state_expert_opinion}).then(Paper => {
        res.json(Paper);
    })
});

router.put("/update", (req, res, next)=> {
    const {id, title, source, authors, link, state, year, expert_opinion, state_expert_opinion} = req.body;
    Paper.update(
        {
            title: title,
            source: source,
            authors: authors,
            link: link,
            state: state,
            year: year,
            expert_opinion: expert_opinion,
            state_expert_opinion: state_expert_opinion
        },
        { where: { id: id } }
    ).then(result =>
        res.json(result)
    )
});

module.exports = router;

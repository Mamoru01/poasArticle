const express = require('express');
const router = express.Router();
const Paper = require('../public/models/Paper');
const VSTU = require('../public/javascripts/PaperLoader');

router.get('/all',(req, res) => {
    Paper.findAll().then(result => {
        res.json(result);
    }).catch(error => {
        console.error(error);
        res.status(500);
        res.json({ error: 'Db error' });
    })
});

router.get("/id/:id", (req, res) => {
    Paper.findOne((req.params.id > 0) ? { where: { id: req.params.id } } : {})
        .then(task => {
            if (task === null) throw new Error('Wrong Id');
            res.json(task);
        })
        .catch(error => {
            console.error(error);
            res.json({ error: 'Wrong Id' });
        })
});

router.post("/new", (req, res) => {
    const {title, source,year, authors, link,  expert_opinion, state_expert_opinion, comment, owner, export_opinion, state_export_opinion} = req.body;
    Paper.create({title, source, year, authors, link, expert_opinion, state_expert_opinion, export_opinion, state_export_opinion, comment, owner}).then(Paper => {
        res.json(Paper);
    })
});

router.put("/update", (req, res)=> {
    const {id, title, source, authors, link, year, expert_opinion, state_expert_opinion, export_opinion, state_export_opinion, comment, owner} = req.body;
    Paper.update(
        {
            title: title,
            source: source,
            authors: authors,
            link: link,
            year: year,
            expert_opinion: expert_opinion,
            state_expert_opinion: state_expert_opinion,
            export_opinion: export_opinion,
            state_export_opinion: state_export_opinion,
            comment: comment,
            owner: owner
        },
        { where: { id: id } }
    ).then(result =>
        res.json(result)
    )
});

router.delete("/delete/:id", (req,res) => {
   let id = req.params.id;
   Paper.destroy({
       where: {
           id:id
       }
   }).then( rowDeleted  => {
       if (rowDeleted  === 1)
           res.json({rowDeleted: 1});
       else throw new Error("No ok!");
   } ).catch( e => {
       console.error(e);
   })

});

router.get("/start", (req, res) => {VSTU.getPaperL(); res.json({status:"ok"})});

module.exports = router;

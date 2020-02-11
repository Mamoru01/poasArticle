
const vstuReq = require( '../javascripts/vstuScripts.js');
const Paper = require('../models/Paper');
const htmlparser = require('htmlparser');

const savePaper = (paperJson) => {
    console.log("----Save new paper----");
    paperJson.forEach(p => {
        Paper.findOne({ where: {
                title:  p["title"],
                authors: p["authors"],
                link: p["link"],
                year: p["year"],
                source: p["source"]
            }
        }).then(one => {
            if (one === null){
                let newP = {
                    title: p["title"],
                    authors: p["authors"],
                    link: p["link"],
                    year: p["year"],
                    source: p["source"],
                    state: "G",
                    expert_opinion: null,
                    state_expert_opinion: "N"
                };
                Paper.create(newP).then(Paper => {
                    console.table(Paper);
                })
            }
        }).catch(error => {
            console.error(error);
        })
    });
};


const getPaper = () => {
    const callback_func = (error, response) => {
        const handler = new htmlparser.DefaultHandler(function (error, dom) {
            let jsonObj;
            let paperList;

            if (error){
                console.error(error);
                res.status(500);
                res.json({ error: 'Req in library.vstu.ru error' });
            }
            else {
                jsonObj = dom[2]["children"][3]["children"][1]["children"][3]["children"][9]["children"][3]["children"];
                paperList = vstuReq.jsonToPaperList(jsonObj);
                savePaper(paperList);
            }
        });
        const parser = new htmlparser.Parser(handler);
        parser.parseComplete(response.body);
    };
    vstuReq.req(callback_func);
};

module.exports.startLoader = () =>{
    setInterval(getPaper, 1000*24*60*60);
};

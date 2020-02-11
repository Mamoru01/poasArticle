var request = require('request');

module.exports.req = ( callback_func )=>{
    var options = {
        'method': 'POST',
        'timeout': 120000,
        'url': 'http://library.vstu.ru/publ_2/publ_result.php',
        'headers': {
            'Host': 'library.vstu.ru',
            'Connection': 'keep-alive',
            'Content-Length': '116',
            'Cache-Control': 'max-age=0',
            'Origin': 'http://library.vstu.ru',
            'Upgrade-Insecure-Requests': '1',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Referer': 'http://library.vstu.ru/publ_2/index.php?command=search2',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cookie': '_ga=GA1.2.1517549486.1552371516; _ym_uid=1566922000771054986; _ym_d=1566922000; __utma=10425522.1517549486.1552371516.1574772425.1574772425.1; __utmz=10425522.1574772425.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _gid=GA1.2.991526188.1580990735; _ym_isad=1'
        },
        form: {
            'universitet': '2',
            'fio': '',
            'year_rel': new Date().getFullYear(),
            'year_rel1': '',
            'year_rel2': '',
            'year_reg': '',
            'year_reg1': '',
            'year_reg2': '',
            'faculty': '4',
            'kafedra': '43',
            'v_publ': '0'
        }
    };


    request(options, callback_func);
};

module.exports.jsonToPaperList = (json)=>{
    let list = [];
    json.forEach(e => {
        let newP;
        let linkPattern = new RegExp("http(s?):[^ ]+");
        let link;

        if (e["name"] === "p") {
            p = e['children'][2]['data'];
            link = p.match(linkPattern);
            if (link !== null) link = link[0];
            newP = {
                "title": p.split('/')[0],
                "source": p.split('//')[1],
                "year": new Date().getFullYear(),
                "link": link,
                "authors": p.split('/')[1].split('//')[0]
            };
            list.push(newP);
        }
    });
    return list;
};

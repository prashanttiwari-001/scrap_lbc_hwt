const request = require("request");
const cheerio = require("cheerio");
const url = ("https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard")
console.log("Before");
request(url , cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html){
    let $ = cheerio.load(html);
    let teamsArr = $(".match-info.match-info-MATCH .team");
    for(let i=0; i<teamsArr.length; i++){
        let hasclass = $(teamsArr[i]).hasClass("team-gray");
        if(hasclass== false){
            let teamNameElem = $(teamsArr[i]).find(".name");
            console.log(teamNameElem.text());
        }
    }
    let inningArr = $(".card.content-block.match-scorecard-table>.Collapsible")
    let htmlStr = "";
    for(let i=0; i<inningArr.length; i++){
        let cHtmml = $(inningArr[i]).html();
        htmlStr += cHtmml;
    }
    console.log(htmlStr);
}


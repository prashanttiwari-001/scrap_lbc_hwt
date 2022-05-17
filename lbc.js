const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/ball-by-ball-commentary";
console.log("Before");
request(url, cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
       //console.log(html);
       extractHtml(html);
    }
}
function extractHtml(html){
  let $ = cheerio.load(html);
  let elemsArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
  let text = $(elemsArr[0]).text();
  let htmldata = $(elemsArr[0]).html();
  console.log("text data" , text);
  console.log("html data", htmldata);

}


//console.log("After");
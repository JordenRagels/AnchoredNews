const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function() {
  return axios.get("https://www.hawaiitribune-herald.com/tag/local").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    var articles = [];

    $("article#article-").each(function(i, element) {

      var head = $(this)
        .find("a.title-link")
        .text()
        .trim();

      var url = $(this)
        .find("a")
        .attr("href");

      var sum = $(this)
        .find("div.excerpt > p")
        .text()
        .trim();
     
      if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
    console.log(articles)
    return articles;
  });
};

scrape()

// Export the function, so other files in our backend can use it
module.exports = scrape;
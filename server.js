const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

formatName = (name) => {
  let formattedName = name.toLowerCase().replace(/\s+/g, "_");
  return(formattedName);
};

app.get('/findActor', (req, res) => {
  const linkName = formatName(req.query.actor);

  const url = `https://www.rottentomatoes.com/celebrity/${linkName}/`;
  let json = { totalMovies: "", averageScore: "", actorName: "" };

  request(url, function (error, response, html) {
    if (!error) {
      const $ = cheerio.load(html);

      let total = 0;
      let count = 0;
      let name = "";
      let score = 0;

      $('.celeb_name').filter(function () {
        const data = $(this);
        name = data.text().trim();
      })

      $('#filmographyTbl .tMeterIcon').filter(function () {
        const data = $(this);
        const rating = parseInt(data.attr("data-rating"));

        if (rating > 0) {
          count = count + 1;
          total = total + rating;
        }
      })

      console.log("Scraped!");
      if (total > 0) {
        score = total / count;
      } else {
        score = 0;
      }

      json.actorName = name;
      json.averageScore = score.toFixed(2);
      json.totalMovies = count;
    

      res.json(json);
    }
  })
});

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
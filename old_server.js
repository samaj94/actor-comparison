app.get('/api/scrape', (req, res) => {
  url = 'https://www.rottentomatoes.com/celebrity/dwayne_johnson/';

  request(url, function(error, response, html){
    if(!error){
      const $ = cheerio.load(html);

      let total = 0;
      let count = 0;
      let name = "";
      let json = { totalMovies : "", averageScore : "", actorName : ""};
      let score = 0;

      $('.celeb_name').filter(function(){
        const data = $(this);
        name = data.text().trim();
      })

      $('#filmographyTbl .tMeterIcon').filter(function(){
        const data = $(this);
        const rating = parseInt(data.attr("data-rating"));

        if(rating > 0) {
          count = count + 1;
          total = total + rating;
        }
      })

      console.log("Scraped!");
      if(total > 0) {
        score = total/count;
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
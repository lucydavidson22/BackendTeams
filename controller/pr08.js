const https = require('https');

const renderIndex = (req, res, json) => {
  let searchedItem = req.body.itemSearch || req.query.itemSearch || '';
  let page = req.query.page || 1;

  const indexStart = (page - 1) * 10;
  const indexEnd = page * 10;

  const filteredData = global.jsonResponse.filter((x) =>
    x.name.toLowerCase().includes(searchedItem.toLowerCase())
  );

  let ta03info = {
    data: filteredData.slice(indexStart, indexEnd), 
    path: '/pr08',
    title: 'Lesson 3 Prove Assignment',
    searchedItem: searchedItem,
    page: page,
    numPages: Math.ceil(filteredData.length / 10),
  };

  res.render('../views/pages/pr08', ta03info);
};

exports.processJson = (req, res, next) => {
  var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

  https
    .get(url, function (response) {
      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        global.jsonResponse = JSON.parse(body);
        renderIndex(req, res, global.jsonResponse);
      });
    })
    .on('error', function (e) {
      console.log('Error: ', e);
    });
};

exports.getIndex = (req, res, next) => {
  renderIndex(req, res, global.jsonResponse); 
};
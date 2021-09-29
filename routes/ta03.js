//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
let settings = { method: "Get"};
var items = [];

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      try {
        console.log("This is running.")
          items = (JSON.parse(JSON.stringify(json)));
      } catch (e) {
        console.log(e)
      }
    });

router.get('/', (req, res, next) => {
  fetch(url, settings);
  console.log(items);
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: items
  });
});


// const getFileContents = (callback) => {
//   fs.readFile('', (error, fileContent) => {
//     if (error){
//       console.log(error);
//       callback([]);
//     } else {
//       callback(JSON.parse(fileContent));
//     }

//   })
// }

// const getItems = () => {
//   getFileContents((items) => {
//     items.push(this);
//   })
// }



module.exports = router;

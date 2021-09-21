//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];

router.post('/addUser', (req, res, next) =>  {
  users.push({name:req.body.username});
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  let name = {name: req.body.removeUsername};
  var nameIndex = -1;
  for (let index = 0; index < users.length; index++) {
    if (users[index].name === name.name){
      nameIndex = index;
      break;
    }
  }
  if (nameIndex > -1) {
    users.splice(nameIndex, 1);
  }
  console.log(users);
  res.redirect('/ta02');
})

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users
  });
});



// module.exports = router;
exports.routes = router;
exports.users = users;

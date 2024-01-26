const express =  require('express')
const router = express.Router()

// // GET route for all users
router.get('/', (req, res) => {
    res.send('Users List')
    // Use query parameters for filtering, if appropriate
    // const filteredUsers = filterData(users, req.query);
    // res.json(filteredUsers);
  });
  
  router.get('/new', (req, res) => {
    res.send('Choose your Pokemon')
  })
  
//   app.get('/', (req,res) => {
//     console.log('no time left')
//     res.render("index",{ text: 'Bulbasar'})
//   })

module.exports = router;

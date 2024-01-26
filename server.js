const express = require('express');
const pokemon = require('pokemon');
const app = express();
const port = (4200);

app.set('view egnine', 'ejs');


const bodyParser = require('body-parser');

// // Custom Middleware 1
// app.use((req, res, next) => {
//   console.log(`Request received at ${new Date()}`);
//   next();
// });

// // Custom Middleware 2
// app.use((req, res, next) => {
//   console.log(`Method: ${req.method}, Path: ${req.path}`);
//   next();
// });

// app.use(bodyParser.json());

// // In-memory data storage (for simplicity)
// let users = [];
// let posts = [];
// let comments = [];

// // GET route for all users
// app.get('/users', (req, res) => {
//   // Use query parameters for filtering, if appropriate
//   const filteredUsers = filterData(users, req.query);
//   res.json(filteredUsers);
// });

app.get('/', (req,res) => {
  console.log('no time left')
  res.render("index",{ text: 'Bulbasar'})
})
// // POST route for creating users
// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// // PATCH route for updating a user
// app.patch('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   const updatedUserData = req.body;

//   // Find and update user
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], ...updatedUserData };
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // DELETE route for deleting a user
// app.delete('/users/:id', (req, res) => {
//   const userId = req.params.id;

//   // Filter out the user to delete
//   users = users.filter(u => u.id !== userId);
//   res.json({ message: 'User deleted successfully' });
// });

// // Similar routes for posts and comments...

// // Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

// app.listen(4200)

// // Helper function to filter data based on query parameters
// function filterData(data, query) {
//   if (!query) {
//     return data;
//   }

//   // Implement filtering logic based on query parameters
//   // For simplicity, this is a placeholder and should be adapted based on your use case
//   return data;
// }

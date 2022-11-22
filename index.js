const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const static = express.static('./public');

// log all requests to the server
app.use(morgan('dev'));
// serve files from within 'public'
app.use(static);

app.get('/:user.json', (req, res) => {
  const database = [
    { userName: 'joshua', favoriteFruit: 'apple' },
    { userName: 'samantha', favoriteFruit: 'cherry' },
    { userName: 'john', favoriteFruit: 'pineapple' },
  ];

  const { user } = req.params;
  const data = database.find((person) => person.userName === user);
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log(`Application listenting on http://localhost:${PORT}`);
});

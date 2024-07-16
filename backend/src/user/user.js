const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PoliceCource123',
  database: 'PoliceCourse',
  port:3306,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Route to get data from a MySQL table
app.post('/', (req, resp) => {

})

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM User'; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
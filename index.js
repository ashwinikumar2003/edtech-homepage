const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'aboutus.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactus.html'));
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

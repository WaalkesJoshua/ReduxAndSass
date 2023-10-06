const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

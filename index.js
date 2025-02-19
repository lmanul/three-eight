import express from 'express';
import fs from 'fs';

const app = express()
const port = 3000

const wordsRaw = fs.readFileSync('data/words.txt',
    { encoding: 'utf8', flag: 'r' }
);
const words = wordsRaw.split('\n');

app.get('/', (req, res) => {
  res.send('Loading...');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

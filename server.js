// Server returning array of file names in selected directory

const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const cors = require('cors');
const port = 3000

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("ok")
})

app.get('/api', (req, res) => {
  // directory will be selected by request query parameter "dir"
  console.log("req.query: ", req.query.dir)
  const dirPath = path.join(__dirname, 'assets', req.query.dir);
  // const dirPath = path.join(req.query.dir);
  fs.readdir(dirPath, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //push all files in selected dir into array
    files.forEach(file => {
      files.concat(file)
    });
    console.log("files: ", files)
    res.send(files)
    // res.send(dirPath)
  });
})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})
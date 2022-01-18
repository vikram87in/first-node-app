const express = require('express');
const path = require('path');
const process = require('process');

const port = 3000;
const app = express();

//sets the path for the static files in two different ways
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(`${process.cwd()}/javascript`));

// sets the default extension
app.set('view engine', 'html');

//  To be able to use .html file instead of .ejs file, use any one of the below lines
// app.engine('html', (require('ejs').__express));
app.engine('html', require('ejs').renderFile)

// sets the default folder to anything other than '/views' to find the file to render
// app.set('views', process.cwd() + '/views');

app.get('/', (req, res) => {
    console.log('from index.js get');
    var { fName, fetchData, fetchDataWithAxios } = require('./javascript/file1');
    // fetchData()
    fetchDataWithAxios()
        .then(data => {
            res.render('index', { text: 'World', title: 'Node Practice', data, fName });
        });
});

app.listen(port, () => {
    console.log(`Express server started at https://localhost:${port}`);
});

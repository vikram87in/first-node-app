import express from 'express';
import { cwd } from 'process';
import ejs from 'ejs';
import { fName, fetchData, fetchDataWithAxios } from './javascript/file1.js';


const port = 3000;
const app = express();

//sets the path for the static files in two different ways
app.use(express.static(`${cwd()}/public`));
app.use(express.static(`${cwd()}/javascript`));

// sets the default extension
app.set('view engine', 'html');

//  To be able to use .html file instead of .ejs file, use any one of the below lines
app.engine('html', ejs.renderFile)

// sets the default folder to anything other than '/views' to find the file to render
// app.set('views', process.cwd() + '/views');

app.get('/', (req, res) => {
    // fetchData()
    fetchDataWithAxios()
        .then(data => {
            res.render('index', { text: 'Anonymous', title: 'Node Practice', data, fName });
        })
        .catch(err => res.render('index', {
            error: true, message: 'Sorry, the data could not be fetched',
            errorMsg: err, fName, title: 'Node Practice'
        }));
});

app.listen(port, () => {
    console.log(`Express server started at https://localhost:${port}`);
});

const express = require('express')
const path = require('path');
const fetch = require('cross-fetch');
const app = express()
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, resp) {
    resp.render('index');
})
app.get('/anime/:id', function(req, resp) {
    const { id } = req.params;
    const script = `<script> id = '${id}'; </script>`;
    resp.render('anime', { script });
})
app.get('*', function(req, res) {
    res.status(404).send('what???');
});
//
app.listen(80)
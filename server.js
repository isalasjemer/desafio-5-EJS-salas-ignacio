const express = require('express');
const app = express();
const routesProducts = require('./routes/routesProductos')

//  Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Formulario' });
});

app.use('/productos', routesProducts)

app.listen(4000, () => console.log('Server running on port 4000'));
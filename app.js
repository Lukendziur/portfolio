const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;
app.use(express.static('public'));
app.set('view engine', 'ejs');


//Rutes

const homeRouter = require('./routes/homeRoutes');
app.use('/', homeRouter);

const projectRouter = require('./routes/projectRoutes');
app.use('/project', projectRouter);

//Catching error

app.use((req, res, next) => {
    res.status(404).render('404');
    next();
})

// Port
app.listen(port || 3030, () => {
    if (port == undefined){
        console.log('Servidor corriendo en el puerto ' + 3030)
    } else {
        console.log('Servidor corriendo en el puerto ' + port)
    }
});
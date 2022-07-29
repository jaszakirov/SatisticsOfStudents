const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const {
    create
} = require('express-handlebars');
const Studentsrouter = require('./routes/AllStudents')
const hbs = create({
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        title: 'Students'
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


app.use('/', Studentsrouter)
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, `public`)))

const port = process.env.port || 5000

try {
    function db() {
        mongoose.connect('mongodb+srv://Jasurbek:NCWOspumfg8uZjSH@cluster0.dqm9bpr.mongodb.net/?retryWrites=true&w=majority', () => {
            console.log('Mongo conected');
        })
    }
    db()
    app.listen(port, () => {
        console.log('server listening on port' + port);
    })

} catch (error) {
    console.log(erroe);

}
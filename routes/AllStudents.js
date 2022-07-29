const {
    Router
} = require('express')
const router = Router()
const Student = require('../models/student')
router.get('/', async (req, res) => {
    const students = await Student.find()
    res.render('index', {
        tittle: 'Home page' ,
        students 

    })
})
router.post('/add/student', async  (req, res) => {
    console.log(req.body);
    const newStudent = new Student({
        name : req.body.name, 
        surname: req.body.surname , 
        group : req.body.group,
        points : req.body.points
    });
     newStudent.save();
    res.redirect('/');
})
router.get('/add/student', (req, res) => {
    res.render('addStudent')
})
module.exports = router
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
        img : req.body.img , 
        name : req.body.name, 
        course: req.body.course , 
        group : req.body.group,
        points : req.body.points
    });
     newStudent.save();
    res.redirect('/');
})
router.post('/add/poits', async  (req, res) => {
    const id = req.body.id
     const addPoints = +req.body.addPoints
    const student  = await Student.findById(id)
    console.log(student.points + addPoints );
    student.points = student.points + addPoints
    student.save()

    // const newStudent = new Student({
    //     img : req.body.img , 
    //     name : req.body.name, 
    //     course: req.body.course , 
    //     group : req.body.group,
    //     points : req.body.points
    // });
    //  newStudent.save();
    res.redirect('/');
})
router.get('/add/student', (req, res) => {
    res.render('addStudent')
})
module.exports = router
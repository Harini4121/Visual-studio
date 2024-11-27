// Install express: npm install express(handling get requests)
const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const courses = [{ id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },

];
app.get('/', (req, res) => {
    res.send('<h2 style="text-align: center;">Hello People...!!!  A WARM WELCOME FROM  World of Express!</h2> ');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
   // res.send(req.params);
    //res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID was not found');
        res.send(course);
}); 
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    if (!req.body.name || req.body.name.length <3) {
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }
    const course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID was not found');
      
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
}); 

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID was not found');
      
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    res.send(course);
}); 

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}..`);
});
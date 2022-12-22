const http = require('http');

const Joi = require('joi');
const express = require('express');
const { response } = require('express');
const { resourceLimits } = require('worker_threads');
const app = express();



app.use(express.json())
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {     // two arguments(url and callback)
    res.send('Helo World!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };
    const joiResult = Joi.validate(req.body, schema);

    if (joiResult.error) {
        res.status(400).send(joiResult.error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with that ID was not found.')
    } else {
        res.send(course);
    }
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});
/// PORT is variable in enviroment of the server, it is used instead of radnom port
// like port 3000


/////////////////////////////// UPDATING


app.put('/api/courses/:id', (req, res) => {
    // look up if the course exist
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with that ID was not found.')
        return;
    }
    //validate
    const schema = {
        name: Joi.string().min(3).required()
    };
    const joiResult = Joi.validate(req.body, schema);
    if (joiResult.error) {
        res.status(400).send(joiResult.error.details[0].message)
        return;
    }


    // update course
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // lookup if there is the course
    // look up if the course exist
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with that ID was not found.')
        return;
    }


    // delete
    const index = courses.indexOf(course)
    courses.splice(index, 1);

    //return deleted course
    res.send(course)

})

const port = process.env.PORT || 3000; // if port is not defined on the device then use 3000
app.listen(port, () => console.log(`Listening on ${port}`));
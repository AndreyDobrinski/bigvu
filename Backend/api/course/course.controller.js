const logger = require('../../services/logger.service')
const axios = require('axios');



async function getCourses(req, res) {
    try {
        console.log('I am at backend!!');
        const apiUrl = 'https://interviews.bigvu.tv/course/list';
        const auth = {
            username: 'bigvu',
            password: 'interview'
        };
        const courses = await axios.get(apiUrl, { auth });
        res.json(courses.data.result);
    } catch (err) {
        console.log('err', err);
        logger.error('getCourses, Controller: Failed to get Courses, got this:', err)
        res.status(500).send({ err: 'getCourses, Controller: Failed to get Courses' })
    }
}




async function getCourse(req, res) {
    try {
        const apiURL = `https://interviews.bigvu.tv/course/${req.params.id}`;
        const auth = {
            username: 'bigvu',
            password: 'interview'
        };
        const course = await axios.get(apiURL, { auth });
        res.json(course.data);
    } catch (err) {
        console.log('err', err);
        logger.error('getCourses, Controller: Failed to get Course, got this:', err)
        res.status(500).send({ err: ' getCourses, Controller: Failed to get Course' })
    }
}


module.exports = {
    getCourses,
    getCourse
}
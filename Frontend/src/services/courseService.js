import axios from 'axios'

export const courseService = {
    query,
    getById
}

const baseUrl = process.env.NODE_ENV === 'production'
    ? '/api/course'
    : 'http://localhost:8080/api/course'


function query() {
    return axios.get(baseUrl).then(res => res.data)
}


function getById(courseId) {
    return axios.get(`${baseUrl}/${courseId}`)
        .then(res => res.data)
}
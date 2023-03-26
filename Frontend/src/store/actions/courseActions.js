import { courseService } from "../../services/courseService"


export function loadCourses() {
    return async dispatch => {
        try {
            const courses = await courseService.query()
            dispatch({ type: 'SET_COURSES', courses })
        } catch (err) {
            console.log('Could not get courses', err);
        }
    }
}

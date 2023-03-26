const initialState = {
    courses: [],
}

export function courseReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_COURSES':
            return { ...state, courses: action.courses }
        default:
            return state
    }
}


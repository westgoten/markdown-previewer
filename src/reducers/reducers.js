import { EDIT_TEXT } from '../actions/types'

const initialState = {
    originalText: '',
    parsedText: ''
}

export function editingReducer(state = initialState, action) {
    switch(action.type) {
        case EDIT_TEXT:
            return {
                originalText: action.text,
                parsedText: action.text
            }
        default:
            return state
    }
}

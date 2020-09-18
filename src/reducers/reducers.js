import { EDIT_TEXT } from '../actions/types'
import marked from '../utils/markdownParser'
import DOMPurify from 'dompurify'

const initialState = {
    originalText: '',
    parsedText: ''
}

export function editingReducer(state = initialState, action) {
    switch(action.type) {
        case EDIT_TEXT:
            return {
                originalText: action.text,
                parsedText: DOMPurify.sanitize(marked(action.text))
            }
        default:
            return state
    }
}

import { EDIT_TEXT } from '../actions/types'
import INITIAL_TEXT from '../utils/consts/initialText'
import marked from '../utils/markdownParser'
import DOMPurify from 'dompurify'

const initialState = {
    originalText: INITIAL_TEXT,
    parsedText: parseAndSanitizeMarkdown(INITIAL_TEXT)
}

function editing(state = initialState, action) {
    switch(action.type) {
        case EDIT_TEXT:
            return {
                originalText: action.text,
                parsedText: parseAndSanitizeMarkdown(action.text)
            }
        default:
            return state
    }
}

function parseAndSanitizeMarkdown(text) {
    return DOMPurify.sanitize(marked(text))
}

export default editing

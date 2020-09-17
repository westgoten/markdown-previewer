import { EDIT_TEXT } from './types'

export function editText(text) {
    return {
        type: EDIT_TEXT,
        text
    }
}

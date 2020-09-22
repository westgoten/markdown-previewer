import { EDIT_TEXT, MAXIMIZE_WINDOW } from './types'

export function editText(text) {
    return {
        type: EDIT_TEXT,
        text
    }
}

export function maximizeWindow(window) {
    return {
        type: MAXIMIZE_WINDOW,
        window
    }
}

import { createSelector } from '@reduxjs/toolkit'

const parsedTextSelector = createSelector(
    [getParsedText, getMaximizedState], 
    (parsedText, maximized) => ({ parsedText, maximized })
)

function getParsedText(state) {
    return state.editing.parsedText
}

function getMaximizedState(state) {
    return state.maximized
}

export default parsedTextSelector

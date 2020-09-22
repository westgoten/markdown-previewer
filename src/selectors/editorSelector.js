import { createSelector } from '@reduxjs/toolkit'

const originalTextSelector = createSelector(
    [getOriginalText, getMaximizedState], 
    (originalText, maximized) => ({ originalText, maximized })
)

function getOriginalText(state) {
    return state.editing.originalText
}

function getMaximizedState(state) {
    return state.maximized
}

export default originalTextSelector

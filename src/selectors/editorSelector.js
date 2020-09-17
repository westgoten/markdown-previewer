import { createSelector } from '@reduxjs/toolkit'

const originalTextSelector = createSelector(getOriginalText, (originalText) => ({ originalText }))

function getOriginalText(state) {
    return state.originalText
}

export default originalTextSelector

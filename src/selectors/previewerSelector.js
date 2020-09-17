import { createSelector } from '@reduxjs/toolkit'

const parsedTextSelector = createSelector(getParsedText, (parsedText) => ({ parsedText }))

function getParsedText(state) {
    return state.parsedText
}

export default parsedTextSelector

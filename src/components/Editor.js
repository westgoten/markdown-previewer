import React, { useState } from 'react'
import '../style/Editor.css'

function Editor(props) {
    return (
        <div id='editor-wrapper'>
            <div id='toolbar'>Editor</div>
            <textarea id='editor' type='text'></textarea>
        </div>
    )
}

export default Editor

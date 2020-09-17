import React, { useState } from 'react'
import '../style/Editor.css'

function Editor(props) {
    const [input, setInput] = useState('')

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <div id='editor-wrapper' className='wrapper'>
            <div id='toolbar-wrapper' className='toolbar'>Editor</div>
            <textarea id='editor' className='text-block' onChange={handleInput} type='text' placeholder='Type here' autoFocus>
                {input}
            </textarea>
        </div>
    )
}

export default Editor

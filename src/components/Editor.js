import React from 'react'
import { connect } from 'react-redux'
import originalTextSelector from '../selectors/editorSelector'
import { editText } from '../actions/actions'
import '../style/Editor.css'

function Editor(props) {
    function handleInput(event) {
        props.editText(event.target.value)
    }

    return (
        <div id='editor-wrapper' className='wrapper'>
            <div id='toolbar-wrapper' className='toolbar'>Editor</div>
            <textarea id='editor' className='text-block' onChange={handleInput} type='text' placeholder='Type here' autoFocus>
                {props.originalText}
            </textarea>
        </div>
    )
}

function mapStateToProps(state) {
    return originalTextSelector(state)
}

const mapDispatchToProps = { editText }

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

import React from 'react'
import { connect } from 'react-redux'
import originalTextSelector from '../selectors/editorSelector'
import { EDITOR, PREVIEWER, NONE } from '../utils/consts/maximizedState'
import { editText, maximizeWindow } from '../actions/creators'
import '../style/Editor.css'

function Editor(props) {
    function handleInput(event) {
        props.editText(event.target.value)
    }

    function handleResize() {
        if (props.maximized === NONE)
            props.maximizeWindow(EDITOR)
        else if (props.maximized === EDITOR)
            props.maximizeWindow(NONE)
    }

    function getResizeIcon() {
        return props.maximized === EDITOR ? 'fas fa-compress-alt' : 'fas fa-expand-arrows-alt'
    }

    function getStyle() {
        const style = {
            wrapper: 'wrapper',
            toolbar: 'toolbar',
            editor: 'text-block editor-normal'
        }

        if (props.maximized === EDITOR) {
            style.wrapper = 'wrapper-maximized'
            style.toolbar = 'toolbar-maximized'
            style.editor = 'text-block-maximized editor-maximized'
        } else if (props.maximized === PREVIEWER) {
            style.wrapper = 'wrapper-hidden'
        }

        return style
    }

    return (
        <div id='editor-wrapper' className={getStyle().wrapper}>
            <div id='editor-toolbar' className={getStyle().toolbar}>
                <i className='fab fa-free-code-camp toolbar-icon'></i>
                <span className='toolbar-title'>Editor</span>
                <i className={getResizeIcon() + ' resize-button'} onClick={handleResize}></i>
            </div>
            <textarea id='editor' className={getStyle().editor} onChange={handleInput} value={props.originalText} type='text' placeholder='Type here' autoFocus></textarea>
        </div>
    )
}

function mapStateToProps(state) {
    return originalTextSelector(state)
}

const mapDispatchToProps = { editText, maximizeWindow }

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

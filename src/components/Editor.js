import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import originalTextSelector from '../selectors/editorSelector'
import { EDITOR, PREVIEWER, NONE } from '../utils/consts/maximizedState'
import { editText, maximizeWindow } from '../actions/creators'
import '../style/Editor.css'

function Editor(props) {
    const [style, setStyle] = useState({
        wrapper: 'wrapper',
        toolbar: 'toolbar',
        editor: 'text-block editor-normal'
    })

    useEffect(() => {
        switch (props.maximized) {
            case EDITOR:
                setStyle({
                    wrapper: 'wrapper-maximized',
                    toolbar: 'toolbar-maximized',
                    editor: 'text-block-maximized editor-maximized'
                })
                break
            case PREVIEWER:
                setStyle({
                    wrapper: 'wrapper-hidden',
                    toolbar: 'toolbar',
                    editor: 'text-block editor-normal'
                })
                break
            default:
                setStyle({
                    wrapper: 'wrapper',
                    toolbar: 'toolbar',
                    editor: 'text-block editor-normal'
                })
        }
    }, [props.maximized])

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

    return (
        <div id='editor-wrapper' className={style.wrapper}>
            <div id='editor-toolbar' className={style.toolbar}>
                <i className='fab fa-free-code-camp toolbar-icon'></i>
                <span className='toolbar-title'>Editor</span>
                <i className={getResizeIcon() + ' resize-button'} onClick={handleResize}></i>
            </div>
            <textarea id='editor' className={style.editor} onChange={handleInput} value={props.originalText} type='text' placeholder='Type here' autoFocus></textarea>
        </div>
    )
}

function mapStateToProps(state) {
    return originalTextSelector(state)
}

const mapDispatchToProps = { editText, maximizeWindow }

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

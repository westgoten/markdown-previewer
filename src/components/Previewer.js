import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import parsedTextSelector from '../selectors/previewerSelector'
import { EDITOR, PREVIEWER, NONE } from '../utils/consts/maximizedState'
import { maximizeWindow } from '../actions/creators'
import '../style/Previewer.css'

function Previewer(props) {
    const preview = useRef(null)

    useEffect(() => {
        preview.current.innerHTML = props.parsedText
    })

    function handleResize() {
        if (props.maximized === NONE)
            props.maximizeWindow(PREVIEWER)
        else if (props.maximized === PREVIEWER)
            props.maximizeWindow(NONE)
    }

    function getResizeIcon() {
        return props.maximized === PREVIEWER ? 'fas fa-compress-alt' : 'fas fa-expand-arrows-alt'
    }

    function getStyle() {
        const style = {
            wrapper: 'wrapper preview-wrapper-normal',
            toolbar: 'toolbar',
            preview: 'text-block preview'
        }

        if (props.maximized === PREVIEWER) {
            style.wrapper = 'wrapper-maximized'
            style.toolbar = 'toolbar-maximized'
            style.preview = 'text-block-maximized preview'
        } else if (props.maximized === EDITOR) {
            style.wrapper = 'wrapper-hidden'
        }

        return style
    }

    return (
        <div id='preview-wrapper' className={getStyle().wrapper}>
            <div id='preview-toolbar' className={getStyle().toolbar}>
                <i className='fab fa-free-code-camp toolbar-icon'></i>
                <span className='toolbar-title'>Previewer</span>
                <i className={getResizeIcon() + ' resize-button'} onClick={handleResize}></i>
            </div>
            <div id='preview' className={getStyle().preview} ref={preview}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return parsedTextSelector(state)
}

const mapDispatchToProps = { maximizeWindow }

export default connect(mapStateToProps, mapDispatchToProps)(Previewer)

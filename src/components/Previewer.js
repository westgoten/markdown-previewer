import React, { useState, useEffect, useRef } from 'react'
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

    const [style, setStyle] = useState({
        wrapper: 'wrapper preview-wrapper-normal',
        toolbar: 'toolbar',
        preview: 'text-block preview'
    })
    useEffect(() => {
        switch(props.maximized) {
            case PREVIEWER:
                setStyle({
                    wrapper: 'wrapper-maximized',
                    toolbar: 'toolbar-maximized',
                    preview: 'text-block-maximized preview'
                })
                break
            case EDITOR:
                setStyle({
                    wrapper: 'wrapper-hidden',
                    toolbar: 'toolbar',
                    preview: 'text-block preview'
                })
                break
            default:
                setStyle({
                    wrapper: 'wrapper preview-wrapper-normal',
                    toolbar: 'toolbar',
                    preview: 'text-block preview'
                })
        }
    }, [props.maximized])

    function handleResize() {
        if (props.maximized === NONE)
            props.maximizeWindow(PREVIEWER)
        else if (props.maximized === PREVIEWER)
            props.maximizeWindow(NONE)
    }

    function getResizeIcon() {
        return props.maximized === PREVIEWER ? 'fas fa-compress-alt' : 'fas fa-expand-arrows-alt'
    }

    return (
        <div id='preview-wrapper' className={style.wrapper}>
            <div id='preview-toolbar' className={style.toolbar}>
                <i className='fab fa-free-code-camp toolbar-icon'></i>
                <span className='toolbar-title'>Previewer</span>
                <i className={getResizeIcon() + ' resize-button'} onClick={handleResize}></i>
            </div>
            <div id='preview' className={style.preview} ref={preview}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return parsedTextSelector(state)
}

const mapDispatchToProps = { maximizeWindow }

export default connect(mapStateToProps, mapDispatchToProps)(Previewer)

import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import parsedTextSelector from '../selectors/previewerSelector'
import '../style/Previewer.css'

function Previewer(props) {
    const preview = useRef(null)

    useEffect(() => {
        preview.current.innerHTML = props.parsedText
    })

    return (
        <div id='preview-wrapper' className='wrapper'>
            <div id='preview-toolbar' className='toolbar'>
                <i className='fab fa-free-code-camp toolbar-icon'></i>
                <span className='toolbar-title'>Previewer</span>
                <i className='fas fa-expand-arrows-alt resize-button'></i>
            </div>
            <div id='preview' className='text-block' ref={preview}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return parsedTextSelector(state)
}

export default connect(mapStateToProps)(Previewer)

import React from 'react'
import { connect } from 'react-redux'
import parsedTextSelector from '../selectors/previewerSelector'
import '../style/Previewer.css'

function Previewer(props) {
    return (
        <div id='preview-wrapper' className='wrapper'>
            <div id='preview-toolbar' className='toolbar'>Previewer</div>
            <div id='preview' className='text-block'>{props.parsedText}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return parsedTextSelector(state)
}

export default connect(mapStateToProps)(Previewer)

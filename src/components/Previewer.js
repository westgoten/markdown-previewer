import React, { useState } from 'react'
import '../style/Previewer.css'

function Previewer(props) {
    return (
        <div id='preview-wrapper' className='wrapper'>
            <div id='preview-toolbar' className='toolbar'>Previewer</div>
            <div id='preview' className='text-block'></div>
        </div>
    )
}

export default Previewer

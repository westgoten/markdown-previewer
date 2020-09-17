import React from 'react'
import Editor from './Editor'
import Previewer from './Previewer'
import '../style/App.css'

function App() {
  return (
    <div id='app-wrapper'>
      <Editor />
      <Previewer />
    </div>
  )
}

export default App

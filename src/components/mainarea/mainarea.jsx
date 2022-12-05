import React from 'react'
import Top from './top'
import Bottom from './bottom'

import './mainarea.css'

const MainArea = () => {
  return (
    <div className='mainArea'>
      <div className="container">
        <Top />
        <Bottom />
      </div>
    </div>
  )
}

export default MainArea
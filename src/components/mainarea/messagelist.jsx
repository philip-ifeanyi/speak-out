import React from 'react'
// import { useState } from 'react'

import MESSAGES from '../../pages/dashboard/dummyData'
import Message from './message'

const MessageList = () => {
  // const [unfiltered, setfiltered] = useState

  const filterSent = (e) => {
    const result = MESSAGES.filter(com => com.status === 'Sent');
    
    console.log(result)
  }

  const filterPending = () => {

  }

  const filterSolved = () => {

  }
  return (
    <div>
      <div className="buttons">
        <button className="dash-btn" onClick={filterSent}>Sent</button>
        <button className="dash-btn" onClick={filterPending}>Pending</button>
        <button className="dash-btn" onClick={filterSolved}>Solved</button>
      </div>
      <div className='rounded-lg bg-white/30 overflow-auto lg:h-80 md:h-64'>
        {
          MESSAGES
            .map(({ id, ...otherProps }) => (
              <Message key={id} {...otherProps} />
            ))
        }
      </div>
    </div>
  )
}

export default MessageList
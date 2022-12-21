import React from 'react'
import { useState } from 'react'

import MESSAGES from '../../pages/dashboard/dummyData'
import Message from './message'

const MessageList = () => {
  const [messages, setMessages] = useState(MESSAGES)

  const filterSent = (e) => {
    const result = MESSAGES.filter(com => com.status === 'Sent');
    
    setMessages(result)
  }

  const filterPending = () => {
    const result = MESSAGES.filter(com => com.status === 'Pending');
    
    setMessages(result)
  }

  const filterSolved = () => {
    const result = MESSAGES.filter(com => com.status === 'Solved');
    
    setMessages(result)
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
          messages
            .map(({ id, ...otherProps }) => (
              <Message key={id} {...otherProps} />
            ))
        }
      </div>
    </div>
  )
}

export default MessageList
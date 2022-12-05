import React from 'react'

const Message = ({ date, title, complaints}) => {
  return (
    <div className='flex py-3 px-6 mb-[1px] justify-between bg-[#DAEEF5]'>
      <h3 className='w-1/5 font-bold'>{title}</h3>
      <p className='w-4/6 font-normal'>{complaints}</p>
      <h3 className='w-1/5 font-bold text-right'>{date}</h3>
    </div>
  )
}

export default Message
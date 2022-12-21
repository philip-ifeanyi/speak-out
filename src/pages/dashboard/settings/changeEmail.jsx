import React from 'react'

const ChangeEmail = () => {
  return (
    <div>
      <form action="" method="post">
        <input type="email" name="email" placeholder="Old email" />
        <input type="email" name="email" placeholder="New email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ChangeEmail
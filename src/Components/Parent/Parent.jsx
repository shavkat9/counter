import React, { useState }  from 'react'
import './Parent.css'

function Parent() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1 className='content'>{count}</h1>
        <button className='hero__btn' onClick={() => setCount(count + 1)}>Add</button>
        <button className='happy__btn' onClick={() => setCount(count - 1)}>Add</button>
    </div>
  )
}

export default Parent
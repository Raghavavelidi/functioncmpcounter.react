import React, { useEffect, useState } from 'react'

function FunctionalComponentCounter() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count ${count} times`;
    })

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default FunctionalComponentCounter
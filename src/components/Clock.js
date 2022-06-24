import React, { useState, useEffect } from 'react'

const Clock = () => {
   const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() =>{
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    
    }, [])

  return (
    <div style={{fontSize : "larger"}}>{clock}</div>
  )
}

export default Clock
import React from 'react'

const Note = ({content, initialPosition, ...props}) => {
  return (
    <div
    style={{left : `${initialPosition?.x}px`, top:`${initialPosition?.y}px`}}

    className={`bg-yellow-50 absolute border border-black w-80 select-none cursor-move`}
    {...props}  
    >{content}</div>
  )
}

export default Note
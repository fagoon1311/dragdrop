import React, { forwardRef } from 'react'

const Note = forwardRef(({content, initialPosition, ...props}, ref) => {
  return (
    <div
    ref={ref}
    style={{left : `${initialPosition?.x}px`, top:`${initialPosition?.y}px`}}

    className={`bg-yellow-50 absolute border border-black w-80 select-none cursor-move p-2 rounded-md`}
    {...props}  
    >{content}</div>
  )
});

export default Note
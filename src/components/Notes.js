import React, { useEffect } from 'react'
import Note from './Note'

const Notes = ({notes=[], setNotes = () =>{}}) => {

    useEffect (()=>{
        const savedNotes = []
        const updatedNotes = notes.map((note)=>{
            const savedNote = null
            if(savedNote) return {}
            else {
                const position = determineNewPosition()
                return {...note, position}
            }
        })
        setNotes(updatedNotes)
    }, [notes.length])

    const determineNewPosition = () =>{
        const maxX = window.innerWidth - 320
        const maxY = window.innerHeight - 320
        return {
            x:Math.floor(Math.random()*maxX),
            y:Math.floor(Math.random()*maxY)
        }

    }
  return (
    <div>
        {
            notes.map((note) =>{ return <Note key={note.id} initialPosition={note.position} content={note.description}/>})
        }
    </div>
  )
}

export default Notes
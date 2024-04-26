import React, { useEffect, useRef } from 'react'
import Note from './Note'

const Notes = ({notes=[], setNotes = () =>{}}) => {

    useEffect (()=>{
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
        const updatedNotes = notes.map((note)=>{
            const savedNote = savedNotes.find((n)=> n.id === note.id)
            if(savedNote) return {...note, position:savedNote.position}
            else {
                const position = determineNewPosition()
                return {...note, position}
            }
        })
        setNotes(updatedNotes)
        localStorage.setItem('notes', JSON.stringify(updatedNotes))
    }, [notes.length]);

    const noteRefs = useRef([]) // This will store reference to each of our note.

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
            notes.map((note) =>{ return <Note 
                key={note.id} 
                initialPosition={note.position} 
                content={note.description} 
                ref = {noteRefs.current[note.id] ? noteRefs.current[note.id] : (noteRefs.current[note.id] = createRef())}
                />})
        }
    </div>
  )
}

export default Notes
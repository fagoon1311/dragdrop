import React, { useEffect, useRef, createRef } from 'react'
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
    
    const handleDragStart = (note, e)=>{
        const {id} = note
        console.log(noteRefs)
        const noteRef = noteRefs.current[id].current
        const rect = noteRef.getBoundingClientRect()
        console.log(rect)
        const offsetX = e.clientX - rect.left
        const offsetY = e.clientY - rect.top
        const startPos = note

        const handleMouseMove = (e) =>{
            const newX = e.clientX - offsetX
            const newY = e.clientY - offsetY

            noteRef.style.left = `${newX}px`
            noteRef.style.top = `${newY}px`

        }
        const handleMouseUp = () =>{
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            const finalrect = noteRef.getBoundingClientRect()
            const newPosition = {x:finalrect.left, y:finalrect.top}
            updateNotePosition(id, newPosition)
        }

        const updateNotePosition = (id, newPosition) =>{
            const updatedNotes = notes.map((note)=>note.id ===id?{...note, position:newPosition } : note)
            setNotes(updatedNotes)
        localStorage.setItem('notes', JSON.stringify(updatedNotes))
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

    }
  return (
    <div>
        {
            notes.map((note) =>{ return <Note 
                key={note.id} 
                initialPosition={note.position} 
                content={note.description} 
                ref = {noteRefs.current[note.id] ? noteRefs.current[note.id] : (noteRefs.current[note.id] = createRef())}
                onMouseDown = {(e)=>handleDragStart(note, e)}
                />})
        }
    </div>
  )
}

export default Notes
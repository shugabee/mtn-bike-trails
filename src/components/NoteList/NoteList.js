import React from 'react'
import Note from '../Note/Note';
import "./NoteList.css"

const NoteList = ({ notes, getTrailNote }) => {
    
  return (
    <div className='notes-container'>
        {notes.length > 0 && 
          notes.map((note) => {
            return <Note 
            key={notes} note={note} getTrailNote={getTrailNote}
            />;
          })
          }
    </div>
  )
}

export default NoteList
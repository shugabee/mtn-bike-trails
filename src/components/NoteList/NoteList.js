import React from 'react'
import NoteDisplay from '../NoteDisplay/NoteDisplay';

const NoteList = ({ notes }) => {
    
    
  return (
    <div>
        {notes.length > 0 && 
          notes.map(( {trail_note, datetime}) => {
            return <NoteDisplay 
            key={trail_note.id} trail_note={trail_note} 
            key= {datetime} datetime={datetime}
            />;
          })
          }
    </div>
  )
}

export default NoteList
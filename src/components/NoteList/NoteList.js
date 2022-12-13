import React from 'react'
import Note from '../Note/Note';

const NoteList = ({ notes, getTrailNote }) => {
    
  return (
    <div>
        {notes.length > 0 && 
          notes.map((note) => {
            return <Note 
            // key={trail_note.id} trail_note={trail_note} 
            // key= {datetime} datetime={datetime}
            key={notes} note={note} getTrailNote={getTrailNote}
            />;
          })
          }
    </div>
  )
}

export default NoteList
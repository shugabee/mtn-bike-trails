import React from 'react'
import Note from '../Note/Note';

const NoteList = ({ notes, getTrailNote }) => {
    
  return (
    <div>
        {notes.length > 0 && 
          notes.map(() => {
            return <Note 
            // key={trail_note.id} trail_note={trail_note} 
            // key= {datetime} datetime={datetime}
            key={notes.id} notes={notes} getTrailNote={getTrailNote}
            />;
          })
          }
    </div>
  )
}

export default NoteList
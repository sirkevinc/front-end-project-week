import React from 'react';
import { Link } from 'react-router-dom';

const NotesList = (props) => {
  console.log('NotesList props', props)
  return (
    <Link to={`/${props.id}`}>
    <div className="Note">
      <div className="Note-Title">{props.note.title}</div>
      <hr />
      <div className="Note-Content">{props.note.content}</div>
    </div>
    </Link>
  )
}


export default NotesList;
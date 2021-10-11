import React from 'react'
import { useHistory } from 'react-router-dom'
import '../index'

export function Row({ note, index, onDelete }) {
    const history = useHistory();

    function navigateEditOnClick(index) {
        const indexObject = { index }
        history.push('/edit', indexObject);
    }

    return (
        <div style={{ border: '1px solid black' }}>
            {index}:
            {note.noteTitle}
            <br />
            {note.noteBody}
            <button onClick={() => navigateEditOnClick(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
        </div>

    );
}
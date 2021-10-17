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
        <div class="m-6 p-2 border shadow rounded-lg">
            {index + 1}:
            <br/>
            <span class="text-2xl font-black font-serif text-black text-center">{note.noteTitle}</span>
            <br />
            {note.noteBody}
            <div class="flex space-x-2 pt-2">
                <button class="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-base font-semibold text-white" onClick={() => navigateEditOnClick(index)}>Edit Note</button>
                <button class="bg-red-500 hover:bg-red-700 p-2 rounded-lg text-base font-semibold text-black" onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>


    );
}
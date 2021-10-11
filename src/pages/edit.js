import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { Storage } from '../services'


export function Edit(props) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const [notes, setNotes] = useState([]);
    const history = useHistory();
    const number = useLocation();


    useEffect(() => {
        const storedNotes = Storage.getItem("notes");
        setNotes(storedNotes);
        const selectedNote = storedNotes[number.state.index];
        setNoteTitle(selectedNote.noteTitle);
        setNoteBody(selectedNote.noteBody);
    }, [number.state.index])

    // https://reactrouter.com/web/api/Hooks
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    function onNoteTitleChange(event) {
        let newNoteTitle = event.target.value;
        setNoteTitle(newNoteTitle)
        Storage.setItem("notes", newNoteTitle)
    }

    function onNoteBodyChange(event) {
        let newNoteBody = event.target.value;
        setNoteBody(newNoteBody)
        Storage.setItem("notes", newNoteBody)
    }

    function EditNote() {
        notes[number.state.index].noteTitle = noteTitle
        notes[number.state.index].noteBody = noteBody

        Storage.setItem('notes', notes)
        history.push('/');

        // build a new note object
        // const obj = { noteTitle, noteBody }
        // const notesCopy = [...notes];
        // notesCopy[props.location.state.index] = obj;
        // Storage.setItem('notes', notesCopy);
    }

    return (
        <div>
            <span className="page title">Edit Page</span>
            <div className="editPage">
                <div>
                    <form>
                        <input
                            id="noteTitleInput"
                            type="text"
                            value={noteTitle}
                            onChange={onNoteTitleChange}
                            placeholder="Title"
                        />
                        <br />
                        <textarea
                            id="noteBodyInput"
                            value={noteBody}
                            onChange={onNoteBodyChange}
                            placeholder="Say something"
                        />
                    </form>
                </div>
                <button title='Edit' onClick={EditNote}>Submit Edit</button>
            </div>
        </div>
    );
}
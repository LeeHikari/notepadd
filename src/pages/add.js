import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Storage } from '../services'


export function Add(){
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const [notes, setNotes] = useState([]);
    const history = useHistory();


    useEffect(() => {
        setNotes(Storage.getItem("notes", []))
    },[]) 

    // https://reactrouter.com/web/api/Hooks
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    function onNoteTitleChange(event){
        let newNoteTitle = event.target.value;
        setNoteTitle(newNoteTitle)
        Storage.setItem("notes", newNoteTitle)
    }

    function onNoteBodyChange(event){
        let newNoteBody = event.target.value;
        setNoteBody(newNoteBody)
        Storage.setItem("notes", newNoteBody)
    }

    return(
        <div>
            <span className="page title">Add Page</span>
            <div className="addPage">
                <div>
                    <form>
                        <input
                            id="noteTitleInput"
                            type="text"
                            value={noteTitle}
                            onChange={onNoteTitleChange}
                            placeholder="Title"
                        />
                        <textarea
                            id="noteBodyInput"
                            value={noteBody}
                            onChange={onNoteBodyChange}
                            placeholder="Say something"
                        />
                    </form>
                </div>
                <button title='Submit' onClick={()=>{

                    Storage.setItem("notes", [...notes, {noteBody, noteTitle}])
                    history.push("/")
                }}/>
            </div>
        </div>
    );
}
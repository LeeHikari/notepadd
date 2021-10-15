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
            <span class="text-4xl font-black font-serif text-black text-center">Add Page</span>
            <div class="border border-gray-300">
                <div>
                    <form>
                        <input
                            class="border border-gray-300 pb-5"
                            type="text"
                            value={noteTitle}
                            onChange={onNoteTitleChange}
                            placeholder="Title"
                        />
                        <br/>
                        <textarea
                            class="border border-gray-300"
                            id="noteBodyInput"
                            value={noteBody}
                            onChange={onNoteBodyChange}
                            placeholder="Say something"
                        />
                    </form>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-base font-semibold text-white " title='Submit' onClick={()=>{
                    Storage.setItem("notes", [...notes, {noteBody, noteTitle}])
                    history.push("/")
                }}>Submit</button>
            </div>
        </div>
    );
}
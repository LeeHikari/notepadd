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
        <div class="p-5">
            <span class="text-4xl font-black font-serif text-black text-center">Add Page</span>
            <div class="m-6 p-2 border-2 border-black rounded-lg">
                <div>
                    <form>
                        <label class="text-lg font-black font-serif text-black">Title</label>
                        <br/>
                        <input
                            class="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                            type="text"
                            value={noteTitle}
                            onChange={onNoteTitleChange}
                            placeholder="Holiday Plans"
                        />
                        <br/>
                        <label class="text-lg font-black font-serif text-black">Body</label>
                        <br/>
                        <textarea
                            class="resize bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                            id="noteBodyInput"
                            value={noteBody}
                            onChange={onNoteBodyChange}
                            placeholder="Meet Emma at 1:30pm @ Melbourne Art Centre"
                        />
                    </form>
                </div>
                <div class="p-2">
                <button class="bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-base font-semibold text-white " title='Submit' onClick={()=>{
                    Storage.setItem("notes", [...notes, {noteBody, noteTitle}])
                    history.push("/")
                }}>Submit</button>
                </div>

            </div>
        </div>
    );
}
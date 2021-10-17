import React, {useState, useEffect} from "react";
import { Row } from '../components';
import { useHistory } from 'react-router-dom'
import { Storage } from '../services'


export function Home(){

    const history = useHistory();

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(Storage.getItem("notes", []))
    }, []);

    function renderNotes() {
        return notes.map((item, index) => {
            return <Row note={item} index={index} onDelete={deleteNote} />;
        });
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        setNotes(notes);
        Storage.setItem("notes", notes);
        window.location.reload(false);
    }

    function ClearAll(){
        Storage.removeItem("notes");
        history.go(0)
    }

    return(
        <div>
            <h2 class="content-start text-2xl justify-items-start">Welcome, let's take some notes</h2>
            <div className="empty">
                <div class="flex space-x-2">
                    <button class="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-base font-semibold text-white " onClick={() => {
                        history.push("/add")
                        }}>Add Note
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 p-2 rounded-lg text-base font-semibold text-black" onClick={ClearAll}>
                        Clear All
                    </button>
                </div>

                {renderNotes()}
            </div>
        </div>

    );
}
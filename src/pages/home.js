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
        // const result = notes.filter((note)=>note.index !== index);
        notes.splice(index, 1);
        setNotes(notes);
        Storage.setItem("notes", notes);
        window.location.reload(false);
    }

    return(
        <div>
            <span className="page title">Home Page!</span>
            <div className="empty">
                <p>This page is empty</p>
                <div>
                    <button title="Add Note" onClick={() => {
                        history.push("/add")
                    }}>Add Note</button>
                </div>

                {renderNotes()}
            </div>
        </div>

    );
}
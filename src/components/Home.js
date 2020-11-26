import React, { useState, useEffect } from "react";
import Header from "./Header";
//import Note from "./auth/helper/index.js";
import CreateNote from "./CreateNote";
import fetch from "../utils/apiClient"
import Note from "./Note";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { getNote, isAuthenticated } from "../auth/helper/index";
import SearchBar from "./SearchBar";

const SERVER = "http://127.0.0.1:5000/"

async function sendNote(note) {
    try {
        const url = SERVER + "note/";
        console.log(SERVER)
        const resp = await fetch.post(url, note)
        if (resp) {
            return resp
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function getNotes() {
    try {
        const url = SERVER + "note/";
        const resp = await fetch.get(url)
        return resp.data.notes
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function deleteNote(id) {
    try {
        const url = SERVER + "note/";
        // console.log(id)
        const data = { id: id }
        const resp = await fetch.delete(url, { data: data })
        return resp.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const Home = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = async (note) => {
        await sendNote(note);
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    };

    useEffect(() => {
        setAddItem((prev) => {
            getNotes()
                .then((data) => {
                    setAddItem(() => data)
                })
        })
    }, [])


    const onDelete = async (id, apiId) => {
        await deleteNote(apiId)
        setAddItem((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        )

    };

    if (isAuthenticated()) {
        console.log(isAuthenticated())
        return <>

            <SearchBar addNote={addNote}></SearchBar>
            <CreateNote passNote={addNote} />
            <div className="container">
                <div className="row">
                    {addItem?.map((val, index) => {
                        return (<Note key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            apiId={val.id}
                            deleteItem={onDelete}
                        />
                        );
                    })}
                </div>
            </div>


        </>;

    }
    else {
        return <>
            <div className="display-3 text-center mt-5">
                Please SignIn first!!!

            </div>
        </>;
    }
}


export default Home;
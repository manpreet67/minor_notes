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

const SERVER = "http://4ae9136a7eec.ngrok.io/"

async function sendNote(note) {
    try {
        const url = SERVER + "note";
        console.log(SERVER)
        const resp = await fetch.post(url, note)
        if (resp) {
            console.log(resp)
            return resp
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function getNotes() {
    try {
        const url = SERVER + "note";
        const resp = await fetch.get(url)
        return resp.data.notes
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function deleteNote(id) {
    try {
        const url = SERVER + "note";
        // console.log(id)
        const data = { id: id }
        const resp = await fetch.delete(url, { data: data })
        return resp.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function searchKeyword(value) {
    try {
        let url = SERVER + `note?keywords=${value}`
        const resp = await fetch.get(url)
        if (resp.error) {
            console.error(resp.error)
            throw new Error(resp.error)
        }
        else {
            return resp
        }
    } catch (e) {
        console.error(e)
        throw e
    }
}

async function getLabels(id) {
    try {
        const url = SERVER + "labels";
        const data = { id: id }
        console.log(data)
        const resp = await fetch.post(url, { data: data })
        return resp
    } catch (error) {
        console.error(error)
        throw error
    }
    
}


const Home = () => {
    const [addItem, setAddItem] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [searchData, setSearchData] = useState("")
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

    const addEvent = async () => {
        const data = await searchKeyword(searchItem)
        setSearchData(() => data)
    }


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
        console.log(!!!searchData)
        if (!!!searchData) {
            return <>
                <SearchBar addEvent={addEvent} setSearchItem={setSearchItem}></SearchBar>
                <CreateNote passNote={addNote} />
                <div className="container">
                    <div className="row">
                        {addItem?.map((val, index) => {
                            console.log(val);
                           console.log(getLabels(val.id));
                           
                           
                            return (<Note key={index}
                                id={index}
                                title={val.title}
                                content={val.content}
                                apiId={val.id}
                                // label={val.label}
                                //label
                                deleteItem={onDelete}
                            />
                            );
                        })}
                    </div>
                </div>
            </>;
        } else {
            //GREEN
            return (
                <div>
                    <SearchBar addEvent={addEvent} setSearchItem={setSearchItem}></SearchBar>
                    {/* <div className="row-md-6">
                        <ul>

                            {searchData.data.myNotes.map((value, idx) => (
                                <li>
                                    <div className="col-md-12" key={idx} style={{ backgroundColor: "green", color: "white" }}>
                                        {value.doc}
                                    </div>
                                    <br />
                                </li>
                            ))
                            }
                        </ul> */}


                        <div className="mt-3 ">

                        {searchData.data.myNotes.map((value, idx) => (
                            <div className="col d-flex justify-content-center">
                            <div className="card mt-3 mb-3 w-75 px-3 py-3" style={{ backgroundColor: "#3f1866", color: "white" }}>
                                <div className="card-text" key={idx} >
                                    {value.doc}
                                </div>
                            </div>
                            </div>))
                        }
                            //  {console.log(searchData)}



                    
                        </div>



                    {/* </div > */}
                    {/* <div className="row-md-6">
                        <ul>

                            {searchData.data.extra.map((value, idx) => (
                                <li>

                                    <div className="col-md-12" key={idx} style={{ backgroundColor: "grey", color: "black" }}>
                                        {value.doc}
                                    </div>
                                    <br />
                                </li>
                            ))
                            }
                        </ul>
                        {console.log(searchData)}
                    </div >
                </div>

                

                //GREY
            ); */}
                    

                        {searchData.data.extra.map((value, idx) => (
                            <div className="col d-flex justify-content-center">
                            <div className="card mt-3 mb-3 w-75 px-3 py-3" style={{ backgroundColor: "grey", color: "black"}} >
                                <div className="card-text" key={idx} >
                                    {value.doc}
                                </div>
                            </div>
                            </div>
                            ))
                        }
                         //  {console.log(searchData)}



                    </div>
                
                 
            );
        }



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
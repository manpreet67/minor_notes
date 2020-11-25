import React,{useState,useEffect} from "react";
import Header from "./Header";
//import Note from "./auth/helper/index.js";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {getNote,isAuthenticated} from "../auth/helper/index";


const Home=()=>
{
    const[addItem,setAddItem]=useState([]);
    const addNote=(note)=>
    {
        setAddItem((prevData)=>{
            return[...prevData,note];
        });
    };
    // useEffect(() => {
    //     getNote({})
        
    //   });


    const onDelete=(id)=>{

        setAddItem((olddata)=>
        olddata.filter((currdata,indx)=>
        {
            return indx!==id;
        })
        )

    };
    if(isAuthenticated()) 
    {
        console.log(isAuthenticated())
    return <>
        
        
        <CreateNote passNote={addNote}/>
        <div className="container">
        <div className="row ">
            
        {addItem.map((val,index)=>
        {
            return( <Note key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
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